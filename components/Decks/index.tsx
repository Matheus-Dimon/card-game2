import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Card from '../Card';
import { styles } from './styles';

// Define o tipo para um card, especificando suas propriedades como id, nome, ataque, defesa, mana, imagem e tipo.
type CardType = {
  id: number;
  name: string;
  attack: number;
  defense: number;
  mana: number;
  image: any; // 'any' é usado aqui para a imagem, pois o tipo correto dependerá de como as imagens são tratadas no projeto (ex: string para caminho do arquivo, ou um objeto Image).
  type: 'warrior' | 'mage' | 'archer';
};

// Define o tipo para um jogador, incluindo mana, campo (cards em jogo) e mão (cards que o jogador pode usar).
type PlayerType = {
  mana: number;
  field: CardType[];
  hand: CardType[];
  
};

// Define as propriedades que o componente Player recebe.
// Inclui informações do jogador, se é o jogador atual, e funções para jogar um card e atacar com um card.
type PlayerProps = {
  player: PlayerType;
  isCurrent: boolean; // Indica se este é o jogador atual.
  onPlayCard: (card: CardType) => void; // Função chamada quando o jogador joga um card.
  onAttack: (card: CardType) => void; // Função chamada quando o jogador ataca com um card.
};

// Componente funcional Player que renderiza as informações e ações de um jogador.
export default function Player({ player, isCurrent, onPlayCard, onAttack }: PlayerProps) {
  return (
    <View style={styles.container}>
      {/* Exibe o título do campo, indicando se é o campo do jogador atual ou do oponente. */}
      <Text style={styles.title}>{isCurrent ? 'Your Field' : "Opponent's Field"}</Text>

      {/* Exibe a quantidade de mana do jogador. */}
      <Text style={styles.section}>Mana: {player.mana}</Text>

      {/* Seção para exibir os cards no campo do jogador. */}
      <Text style={styles.section}>Field:</Text>
      <FlatList
      data={player.field} // Dados para a lista são os cards no campo do jogador.
      horizontal // Renderiza a lista horizontalmente.
      keyExtractor={(item) => item.id.toString()} // Usa o ID do card como chave para otimização.
      renderItem={({ item }) => ( // Renderiza cada card no campo.
        <Card
        card={item} // Passa as informações do card para o componente Card.
        onPress={() => onAttack(item)} // Define a ação ao pressionar o card para ser um ataque.
        disabled={false} // Card não está desabilitado.
        />
      )}
      />

      {/* Se o jogador é o jogador atual, exibe a mão dele. */}
      {isCurrent && (
      <>
        <Text style={styles.section}>Hand:</Text>
        <FlatList
        data={player.hand} // Dados para a lista são os cards na mão do jogador.
        horizontal // Renderiza a lista horizontalmente.
        keyExtractor={(item) => item.id.toString()} // Usa o ID do card como chave para otimização.
        renderItem={({ item }) => ( // Renderiza cada card na mão.
          <Card
          card={item} // Passa as informações do card para o componente Card.
          onPress={() => onPlayCard(item)} // Define a ação ao pressionar o card para ser jogar o card.
          disabled={false} // Card não está desabilitado.
          />
        )}
        />
      </>
      )}
    </View>

  )}
  // Define um deck de cards para o jogador 1.
  export const player1Deck: CardType[] = [
    { id: 1, name: 'Archer', attack: 3, defense: 2, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
    { id: 2, name: 'Warrior', attack: 4, defense: 3, mana: 3, image: require('../../assets/images/warrior.png'), type: 'warrior' },
    { id: 3, name: 'Mage', attack: 2, defense: 4, mana: 2, image: require('../../assets/images/mage.png'), type: 'mage' },
    { id: 4, name: 'Archer', attack: 3, defense: 2, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
    { id: 5, name: 'Warrior', attack: 5, defense: 2, mana: 4, image: require('../../assets/images/warrior.png'), type: 'warrior' },
  ];

  // Define um deck de cards para o jogador 2.
  export const player2Deck: CardType[] = [
    { id: 6, name: 'Mage', attack: 3, defense: 3, mana: 3, image: require('../../assets/images/mage.png'), type: 'mage' },
    { id: 7, name: 'Archer', attack: 2, defense: 5, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
    { id: 8, name: 'Warrior', attack: 4, defense: 2, mana: 3, image: require('../../assets/images/warrior.png'), type: 'warrior' },
    { id: 9, name: 'Mage', attack: 5, defense: 1, mana: 4, image: require('../../assets/images/mage.png'), type: 'mage' },
    { id: 10, name: 'Archer', attack: 3, defense: 3, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
  ];