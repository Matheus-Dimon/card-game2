// components/Card.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type CardType = {
  id: string | number;
  nome: string;
  ataque: number;
  defesa: number;
  mana: number;
  tipo: string;
};

type Props = {
  card: CardType;
  onPress: (id: CardType['id']) => void;
  disabled?: boolean;
};

export default function Card({ card, onPress, disabled = false }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, disabled && styles.disabled]}
      onPress={() => onPress(card.id)}
      disabled={disabled}
    >
      <Text style={styles.name}>{card.nome}</Text>
      <Text>Ataque: {card.ataque}</Text>
      <Text>Defesa: {card.defesa}</Text>
      <Text>Mana: {card.mana}</Text>
      <Text>Tipo: {card.tipo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: 130,
  },
  disabled: {
    opacity: 0.5,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
