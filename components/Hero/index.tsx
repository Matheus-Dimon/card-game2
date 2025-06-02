import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { styles } from './styles';
export type HeroType = {
  name: string;
  hp: number;
  mana: number;
  skill: string;
  image: any;
  canUseSkill: boolean;
  useSkill: () => void;
};



type Card = {
  defense: number;
  // Adicione outras propriedades relevantes do Card aqui, se necessário
};

let player1: any = { hp: 0, mana: 0, field: [] };
let setPlayer1: React.Dispatch<React.SetStateAction<any>> = () => {};
let player2: any = { hp: 0, mana: 0, field: [] };
let setPlayer2: React.Dispatch<React.SetStateAction<any>> = () => {};
let setLog: React.Dispatch<React.SetStateAction<string[]>> = () => {};

const hero1: HeroType = {
  name: 'Aran',
  image: '../assets/images/hero1.png',
  hp: player1.hp,
  mana: player1.mana,
  skill: 'Magic Shield (absorbs 3 damage)',
  canUseSkill: player1.mana >= 1,
  useSkill: () => {
    setPlayer1((prev: any) => ({
      ...prev,
      mana: prev.mana - 1,
      field: prev.field.map((card: Card) => ({
      ...card,
      defense: card.defense + 1,
      })),
    }));
    setLog(prev => [...prev, 'Hero used 1 magic shield!']);
  },
};

const hero2: HeroType = {
  name: 'Zara',
  image: '../assets/images/hero.png',
  hp: player2?.hp ?? 0,
  mana: player2?.mana ?? 0,
  skill: 'Bolt (2 direct damage)',
  canUseSkill: player2?.mana >= 1,
  useSkill: () => {
    setPlayer1((prev: any) => ({ ...prev, hp: prev.hp - 2, mana: prev.mana }));
    setPlayer2((prev: any) => ({ ...prev, mana: prev.mana - 1 }));
    setLog((prev: string[]) => [...prev, 'Hero used  Bolt']);
  },
};
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
        disabled={!canUseSkill || mana < 1}
      />
    </View>
  );
}



export function registerPlayer1State(
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>,
  setLogFn: React.Dispatch<React.SetStateAction<string[]>>
) {
  player1 = state;
  setPlayer1 = setState;
  setLog = setLogFn;
}

export function registerPlayer2State(
  state: any,
  setState: React.Dispatch<React.SetStateAction<any>>,
  setLogFn: React.Dispatch<React.SetStateAction<string[]>>
) {
  player2 = state;
  setPlayer2 = setState;
  setLog = setLogFn;
}

