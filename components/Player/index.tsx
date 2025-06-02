// components/Player/index.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../Card'; // Importa o componente Card
import { styles } from './styles'; // Importa os estilos do componente

// Define o tipo para um jogador
type PlayerType = {
  hp: number; // Pontos de vida do jogador
  mana: number; // Mana do jogador
  hand: CardType[]; // Mão de cartas do jogador
  field: CardType[]; // Campo de cartas do jogador
};

// Define o tipo para uma carta
type CardType = {
  id: number; // Identificador único da carta
  name: string; // Nome da carta
  type: 'warrior' | 'mage' | 'archer'; // Tipo da carta
  attack: number; // Valor de ataque da carta
  defense: number; // Valor de defesa da carta
  mana: number; // Custo de mana da carta
  image: any; // Imagem da carta (pode ser um require() ou URL)
};

// Define as propriedades que o componente Player recebe
type PlayerProps = {
  player: PlayerType; // Dados do jogador
  isCurrent: boolean; // Indica se é o turno do jogador
  onPlayCard: (card: CardType) => void; // Função para jogar uma carta
  onAttack: (card: CardType) => void; // Função para atacar com uma carta
};

// Componente Player
export default function Player({ player, isCurrent, onPlayCard, onAttack }: PlayerProps) {
  return (
    <View style={styles.container}>
      {/* Exibe o HP e a Mana do jogador */}
      <Text style={styles.status}>HP: {player.hp} | Mana: {player.mana}</Text>

      {/* Exibe a mão do jogador */}
      <Text style={styles.section}>Mão:</Text>
      <FlatList
        data={player.hand} // Dados da mão do jogador
        renderItem={({ item }) => (
          <Card
            card={item} // Passa os dados da carta para o componente Card
            onPress={() => onPlayCard(item)} // Função a ser chamada quando a carta é pressionada
            disabled={!isCurrent} // Desabilita a carta se não for o turno do jogador
          />
        )}
        keyExtractor={(item) => item.id.toString()} // Define a chave única para cada carta
        horizontal // Exibe as cartas horizontalmente
      />

      {/* Exibe o campo do jogador */}
      <Text style={styles.section}>Campo:</Text>
      <FlatList
        data={player.field} // Dados do campo do jogador
        renderItem={({ item }) => (
          <Card
            card={item} // Passa os dados da carta para o componente Card
            onPress={() => onAttack(item)} // Função a ser chamada quando a carta é pressionada
            disabled={!isCurrent} // Desabilita a carta se não for o turno do jogador
          />
        )}
        keyExtractor={(item) => item.id.toString()} // Define a chave única para cada carta
        horizontal // Exibe as cartas horizontalmente
      />
    </View>
  );
}
