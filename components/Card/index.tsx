// components/Card.jsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export type CardType = {
  id: number;
  nome: string;
  tipo: 'guerreiro' | 'mago' | 'arqueiro';
  ataque: number;
  defesa: number;
  mana: number;
  imagem: string;
};
type CardProps = {
  card: CardType;
  onPress: () => void;
  disabled?: boolean;
};

export default function Card({ card, onPress, disabled = false }: CardProps)  {
  return (
    <TouchableOpacity
      style={[styles.card, disabled && styles.disabled]}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Image source={{ uri: card.imagem }} style={styles.image} />
      <Text style={styles.name}>{card.nome}</Text>
      <Text>Tipo: {card.tipo}</Text>
      <Text>Ataque: {card.ataque}</Text>
      <Text>DEF: {card.defesa}</Text>
      <Text>Mana: {card.mana}</Text>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  disabled: {
    opacity: 0.5,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
