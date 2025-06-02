// components/Card.jsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { styles } from './styles';
export type CardType = {
  id: number;
  name: string;
  type: 'warrior' | 'mage' | 'archer';
  attack: number;
  defense: number;
  mana: number;
  image: any;
};
type CardProps = {
  card: CardType;
  onPress: () => void;
  disabled?: boolean;
};

const Card: React.FC<CardProps> = ({ card, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.card, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image source={card.image} style={styles.image} resizeMode="cover" />
      
      <Text style={styles.name}>{card.name}</Text>
      <Text style={styles.text}>Type: {card.type}</Text>
      <Text>Attack: {card.attack}</Text>
      <Text>DEF: {card.defense}</Text>
      <Text>Mana: {card.mana}</Text>
    </TouchableOpacity>
  );
};

export default Card;


