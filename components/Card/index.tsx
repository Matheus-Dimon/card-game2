// components/Card.jsx
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { styles } from './styles';

// Define o tipo para as propriedades de um card
export type CardType = {
  id: number;
  name: string;
  type: 'warrior' | 'mage' | 'archer';
  attack: number;
  defense: number;
  mana: number;
  image: any; // Pode ser um require('path/to/image') ou uma URI
};

// Define o tipo para as propriedades do componente Card
type CardProps = {
  card: CardType; // Objeto card contendo informações do card
  onPress: () => void; // Função a ser executada quando o card é pressionado
  disabled?: boolean; // Propriedade opcional para desabilitar o card
};

// Componente funcional Card
const Card: React.FC<CardProps> = ({ card, onPress, disabled }) => {
  return (
    // TouchableOpacity torna o card clicável
    <TouchableOpacity
      style={[styles.card, disabled && styles.disabled]} // Aplica estilos, incluindo um estilo diferente se o card estiver desabilitado
      onPress={onPress} // Define a função onPress para ser executada ao clicar
      disabled={disabled} // Desabilita o TouchableOpacity se disabled for true
    >
      {/* Exibe a imagem do card */}
      <Image source={card.image} style={styles.image} resizeMode="cover" />
      
      {/* Exibe o nome do card */}
      <Text style={styles.name}>{card.name}</Text>
      {/* Exibe o tipo do card */}
      <Text style={styles.text}>Type: {card.type}</Text>
      {/* Exibe o ataque do card */}
      <Text>Attack: {card.attack}</Text>
      {/* Exibe a defesa do card */}
      <Text>DEF: {card.defense}</Text>
      {/* Exibe o mana do card */}
      <Text>Mana: {card.mana}</Text>
    </TouchableOpacity>
  );
};

export default Card;
