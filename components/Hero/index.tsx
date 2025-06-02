import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export type HeroType = {
  nome: string;
  hp: number;
  mana: number;
  habilidade: string;
  imagem: string;
  podeUsarHabilidade: boolean;
  usarHabilidade: () => void;
};



type Card = {
  defesa: number;
  // Adicione outras propriedades relevantes do Card aqui, se necessário
};

let player1: any = { hp: 0, mana: 0, field: [] };
let setPlayer1: React.Dispatch<React.SetStateAction<any>> = () => {};
let player2: any = { hp: 0, mana: 0, field: [] };
let setPlayer2: React.Dispatch<React.SetStateAction<any>> = () => {};
let setLog: React.Dispatch<React.SetStateAction<string[]>> = () => {};

const hero1: HeroType = {
  nome: 'Aran, o Protetor',
  imagem: 'https://via.placeholder.com/100/blue',
  hp: player1.hp,
  mana: player1.mana,
  habilidade: 'Escudo Mágico (absorve 3 de dano)',
  podeUsarHabilidade: player1.mana >= 1,
  usarHabilidade: () => {
    // Exemplo: aumenta a defesa de todas as criaturas em campo
    setPlayer1((prev: any) => ({
      ...prev,
      mana: prev.mana - 1,
      field: prev.field.map((card: Card) => ({
      ...card,
      defesa: card.defesa + 1,
      })),
    }));
    setLog(prev => [...prev, 'Herói 1 usou Escudo Mágico!']);
  },
};

const hero2: HeroType = {
  nome: 'Zara, a Sombria',
  imagem: 'https://via.placeholder.com/100/red',
  hp: player2?.hp ?? 0,
  mana: player2?.mana ?? 0,
  habilidade: 'Raio Sombrio (causa 2 de dano direto)',
  podeUsarHabilidade: player2?.mana >= 1,
  usarHabilidade: () => {
    setPlayer1((prev: any) => ({ ...prev, hp: prev.hp - 2, mana: prev.mana }));
    setPlayer2((prev: any) => ({ ...prev, mana: prev.mana - 1 }));
    setLog((prev: string[]) => [...prev, 'Herói 2 usou Raio Sombrio!']);
  },
};
export default function Hero({ nome, hp, mana, habilidade, imagem, podeUsarHabilidade, usarHabilidade }: HeroType) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imagem }} style={styles.image} />
      <Text style={styles.name}>{nome}</Text>
      <Text>HP: {hp}</Text>
      <Text>Mana: {mana}</Text>
      <Text>Habilidade: {habilidade}</Text>
      <Button 
        title="Usar Habilidade"
        onPress={usarHabilidade}
        disabled={!podeUsarHabilidade || mana < 1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f4f4f4'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
  },
});

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

