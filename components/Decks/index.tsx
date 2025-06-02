import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../Card';

type CardType = {
  id: number;
  nome: string;
  ataque: number;
  defesa: number;
  mana: number;
  imagem: string;
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
  { id: 1, nome: 'Guerreiro Flamejante', ataque: 3, defesa: 2, mana: 2, imagem: 'guerreiro.png', tipo: 'guerreiro' },
  { id: 2, nome: 'Mago do Gelo', ataque: 2, defesa: 3, mana: 1, imagem: 'mago.png', tipo: 'mago' },
  // Adicione mais cartas conforme necessário
];

export const player2Deck: CardType[] = [
  { id: 11, nome: 'Arqueiro da Terra', ataque: 4, defesa: 4, mana: 3, imagem: 'arqueiro.png', tipo: 'arqueiro' },
  { id: 12, nome: 'Guerreiro do Ar', ataque: 1, defesa: 2, mana: 1, imagem: 'guerreiro.png', tipo: 'guerreiro' },
  // Adicione mais cartas conforme necessário
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
