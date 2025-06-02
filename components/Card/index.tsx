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


const imageMap: { [key: string]: any } = {
  'warrior.png': require('../../assets/images/warrior.png'),
  'mage.png': require('../../assets/images/mage.png'),
  'archer.png': require('../../assets/images/archer.png'),
};

const Card: React.FC<CardProps> = ({ card, onPress, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.card, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image
        source={
          card.imagem.startsWith('http') || card.imagem.startsWith('file')
            ? { uri: card.imagem }
            : imageMap[card.imagem] || imageMap['default.png']
        }
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{card.nome}</Text>
      <Text>Tipo: {card.tipo}</Text>
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
});
