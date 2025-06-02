// components/Player.jsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../Card';
import { styles } from './styles';

type PlayerType = {
  hp: number;
  mana: number;
  hand: CardType[];
  field: CardType[];
  
};
type CardType = {
  id: number;
  name: string;
  type: 'warrior' | 'mage' | 'archer';
  attack: number;
  defense: number;
  mana: number;
  image: any; 
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
      <Text style={styles.status}>HP: {player.hp} | Mana: {player.mana}</Text>

      <Text style={styles.section}>Mão:</Text>
      <FlatList
        data={player.hand}
        renderItem={({ item }) => (
          <Card
            card={item}
            onPress={() => onPlayCard(item)}
            disabled={!isCurrent}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />

      <Text style={styles.section}>Campo:</Text>
      <FlatList
        data={player.field}
        renderItem={({ item }) => (
          <Card
            card={item}
            onPress={() => onAttack(item)}
            disabled={!isCurrent}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
      />
    </View>
  );
}


