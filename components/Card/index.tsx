// components/Card.jsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

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

const Card: React.FC<CardProps> = ({ card, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.card, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
     
      
      <Text style={styles.name}>{card.nome}</Text>
      <Text style={styles.text}>Tipo: {card.tipo}</Text>
      <Text>Ataque: {card.ataque}</Text>
      <Text>DEF: {card.defesa}</Text>
      <Text>Mana: {card.mana}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: 130,
    alignItems: 'center', // Garante que a imagem e textos fiquem centralizados
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#ccc', // Ajuda a visualizar o espaço da imagem caso não carregue
  },
  disabled: {
    opacity: 0.5,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
  }
});
