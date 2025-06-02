// CreatureCard.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { CardType } from '../Card';

type Props = {
  card: CardType;
  onPress?: (card: CardType) => void;
  disabled?: boolean;
};

export default function CreatureCard({ card, onPress, disabled }: Props) {
  return (
    <TouchableOpacity 
      onPress={() => onPress?.(card)} 
      disabled={disabled} 
      style={[styles.card, disabled && { opacity: 0.5 }]}
    >
      <Image source={{ uri: card.imagem }} style={styles.image} />
      <Text style={styles.name}>{card.nome}</Text>
      <Text>Tipo: {card.tipo}</Text>
      <Text>Ataque: {card.ataque}</Text>
      <Text>Defesa: {card.defesa}</Text>
      <Text>Mana: {card.mana}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    width: 140,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});