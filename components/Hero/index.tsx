import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { styles } from './styles';

// Define o tipo para um herói, especificando suas propriedades
export type HeroType = {
  name: string; // Nome do herói
  hp: number; // Pontos de vida do herói
  mana: number; // Mana do herói
  skill: string; // Descrição da habilidade do herói
  image: any; // Imagem do herói
  canUseSkill: boolean; // Indica se o herói pode usar a habilidade
  useSkill: () => void; // Função para usar a habilidade do herói
};

// Define o tipo para um card
type Card = {
  defense: number; // Pontos de defesa do card
  // Adicione outras propriedades relevantes do Card aqui, se necessário
};

// Declaração de variáveis para o estado do jogador 1, inicializadas com valores padrão
let player1: any = { hp: 0, mana: 0, field: [] };
// Declaração da função para atualizar o estado do jogador 1
let setPlayer1: React.Dispatch<React.SetStateAction<any>> = () => {};
// Declaração de variáveis para o estado do jogador 2, inicializadas com valores padrão
let player2: any = { hp: 0, mana: 0, field: [] };
// Declaração da função para atualizar o estado do jogador 2
let setPlayer2: React.Dispatch<React.SetStateAction<any>> = () => {};
// Declaração da função para atualizar o log
let setLog: React.Dispatch<React.SetStateAction<string[]>> = () => {};

// Definição do herói 1
const hero1: HeroType = {
  name: 'Aran',
  image: '../assets/images/hero1.png',
  hp: player1.hp,
  mana: player1.mana,
  skill: 'Magic Shield (absorbs 3 damage)',
  canUseSkill: player1.mana >= 1,
  useSkill: () => {
    // Atualiza o estado do jogador 1 ao usar a habilidade
    setPlayer1((prev: any) => ({
      ...prev,
      mana: prev.mana - 1, // Reduz o mana do jogador
      field: prev.field.map((card: Card) => ({
        ...card,
        defense: card.defense + 1, // Aumenta a defesa de cada card no campo
      })),
    }));
    // Adiciona uma entrada ao log
    setLog(prev => [...prev, 'Hero used 1 magic shield!']);
  },
};

// Definição do herói 2
const hero2: HeroType = {
  name: 'Zara',
  image: '../assets/images/hero.png',
  hp: player2?.hp ?? 0,
  mana: player2?.mana ?? 0,
  skill: 'Bolt (2 direct damage)',
  canUseSkill: player2?.mana >= 1,
  useSkill: () => {
    // Atualiza o estado do jogador 1 ao receber dano
    setPlayer1((prev: any) => ({ ...prev, hp: prev.hp - 2, mana: prev.mana }));
    // Atualiza o estado do jogador 2 ao usar a habilidade
    setPlayer2((prev: any) => ({ ...prev, mana: prev.mana - 1 }));
    // Adiciona uma entrada ao log
    setLog((prev: string[]) => [...prev, 'Hero used  Bolt']);
  },
};

// Componente funcional Hero que renderiza as informações do herói
export default function Hero({ name, hp, mana, skill, image, canUseSkill, useSkill }: HeroType) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text>HP: {hp}</Text>
      <Text>Mana: {mana}</Text>
      <Text>Skill: {skill}</Text>
      <Button
        title="Hero Power"
        onPress={useSkill}
        disabled={!canUseSkill || mana < 1} // Desabilita o botão se não puder usar a habilidade ou se não tiver mana suficiente
      />
    </View>
  );
}

// Função para registrar o estado do jogador 1
export function registerPlayer1State(
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>,
  setLogFn: React.Dispatch<React.SetStateAction<string[]>>
) {
  player1 = state;
  setPlayer1 = setState;
  setLog = setLogFn;
}

// Função para registrar o estado do jogador 2
export function registerPlayer2State(
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>,
  setLogFn: React.Dispatch<React.SetStateAction<string[]>>
) {
  player2 = state;
  setPlayer2 = setState;
  setLog = setLogFn;
}
