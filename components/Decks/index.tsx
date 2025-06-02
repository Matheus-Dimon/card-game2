import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../Card';

type CardType = {
  id: number;
  nome: string;
  ataque: number;
  defesa: number;
  mana: number;
  imagem: any; 
  tipo: 'guerreiro' | 'mago' | 'arqueiro';
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
  selectedAttacker: number | null;
};

export default function Player({ player, isCurrent, onPlayCard, onAttack, selectedAttacker }: PlayerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isCurrent ? 'Seu campo' : 'Campo do oponente'}</Text>

      <Text style={styles.section}>Mana: {player.mana}</Text>

      <Text style={styles.section}>Campo:</Text>
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
          <Text style={styles.section}>Mão:</Text>
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
  );
}
export const player1Deck: CardType[] = [
  { id: 1, nome: 'Archer', ataque: 3, defesa: 2, mana: 2, imagem: require('../../assets/images/archer.png'), tipo: 'arqueiro' },
  { id: 2, nome: 'Warrior', ataque: 4, defesa: 3, mana: 3, imagem: require('../../assets/images/warrior.png'), tipo: 'guerreiro' },
  { id: 3, nome: 'Mage', ataque: 2, defesa: 4, mana: 2, imagem: require('../../assets/images/mage.png'), tipo: 'mago' },
  { id: 4, nome: 'Archer', ataque: 3, defesa: 2, mana: 2, imagem: require('../../assets/images/archer.png'), tipo: 'arqueiro' },
  { id: 5, nome: 'Warrior', ataque: 5, defesa: 2, mana: 4, imagem: require('../../assets/images/warrior.png'), tipo: 'guerreiro' },
];

export const player2Deck: CardType[] = [
  { id: 6, nome: 'Mage', ataque: 3, defesa: 3, mana: 3, imagem: require('../../assets/images/mage.png'), tipo: 'mago' },
  { id: 7, nome: 'Archer', ataque: 2, defesa: 5, mana: 2, imagem: require('../../assets/images/archer.png'), tipo: 'arqueiro' },
  { id: 8, nome: 'Warrior', ataque: 4, defesa: 2, mana: 3, imagem: require('../../assets/images/warrior.png'), tipo: 'guerreiro' },
  { id: 9, nome: 'Mage', ataque: 5, defesa: 1, mana: 4, imagem: require('../../assets/images/mage.png'), tipo: 'mago' },
  { id: 10, nome: 'Archer', ataque: 3, defesa: 3, mana: 2, imagem: require('../../assets/images/archer.png'), tipo: 'arqueiro' },
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
