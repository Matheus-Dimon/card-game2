import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../Card';

type CardType = {
  id: number;
  name: string;
  attack: number;
  defense: number;
  mana: number;
  image: any; 
  type: 'warrior' | 'mage' | 'archer';
};

type PlayerType = {
  mana: number;
  field: CardType[];
  hand: CardType[];
  
};

type PlayerProps = {
  player: PlayerType;
  isCurrent: boolean;
  onPlayCard: (card: CardType) => void;
  onAttack: (card: CardType) => void;
};

export default function Player({ player, isCurrent, onPlayCard, onAttack }: PlayerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isCurrent ? 'Your Field' : "Opponent's Field"}</Text>

      <Text style={styles.section}>Mana: {player.mana}</Text>

      <Text style={styles.section}>Field:</Text>
      <FlatList
      data={player.field}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card
        card={item}
        onPress={() => onAttack(item)}
        disabled={false}
        />
      )}
      />

      {isCurrent && (
      <>
        <Text style={styles.section}>Hand:</Text>
        <FlatList
        data={player.hand}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
          card={item}
          onPress={() => onPlayCard(item)}
          disabled={false}
          />
        )}
        />
      </>
      )}
    </View>

  )}
  export const player1Deck: CardType[] = [
    { id: 1, name: 'Archer', attack: 3, defense: 2, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
    { id: 2, name: 'Warrior', attack: 4, defense: 3, mana: 3, image: require('../../assets/images/warrior.png'), type: 'warrior' },
    { id: 3, name: 'Mage', attack: 2, defense: 4, mana: 2, image: require('../../assets/images/mage.png'), type: 'mage' },
    { id: 4, name: 'Archer', attack: 3, defense: 2, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
    { id: 5, name: 'Warrior', attack: 5, defense: 2, mana: 4, image: require('../../assets/images/warrior.png'), type: 'warrior' },
  ];

  export const player2Deck: CardType[] = [
    { id: 6, name: 'Mage', attack: 3, defense: 3, mana: 3, image: require('../../assets/images/mage.png'), type: 'mage' },
    { id: 7, name: 'Archer', attack: 2, defense: 5, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
    { id: 8, name: 'Warrior', attack: 4, defense: 2, mana: 3, image: require('../../assets/images/warrior.png'), type: 'warrior' },
    { id: 9, name: 'Mage', attack: 5, defense: 1, mana: 4, image: require('../../assets/images/mage.png'), type: 'mage' },
    { id: 10, name: 'Archer', attack: 3, defense: 3, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
  ];



const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
