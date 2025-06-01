import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Modelo básico de carta
const initialDeckPlayer1 = [
  { id: 'c1', nome: 'Dragão', ataque: 8, defesa: 6, mana: 5, tipo: 'monstro' },
  { id: 'c2', nome: 'Feiticeiro', ataque: 6, defesa: 4, mana: 3, tipo: 'monstro' },
];

const initialDeckPlayer2 = [
  { id: 'c3', nome: 'Golem', ataque: 7, defesa: 7, mana: 4, tipo: 'monstro' },
  { id: 'c4', nome: 'Elfa', ataque: 5, defesa: 5, mana: 2, tipo: 'monstro' },
];

const STARTING_HP = 20;
const STARTING_MANA = 5;

export default function App() {
  const [player1, setPlayer1] = useState<Player>({ hp: STARTING_HP, mana: STARTING_MANA, hand: [...initialDeckPlayer1], field: [] });
  const [player2, setPlayer2] = useState<Player>({ hp: STARTING_HP, mana: STARTING_MANA, hand: [...initialDeckPlayer2], field: [] });
  const [turn, setTurn] = useState(1); // 1 para jogador 1, 2 para jogador 2
  const [log, setLog] = useState<string[]>([]);

  const currentPlayer = turn === 1 ? player1 : player2;
  const opponentPlayer = turn === 1 ? player2 : player1;
  const setCurrentPlayer = turn === 1 ? setPlayer1 : setPlayer2;
  const setOpponentPlayer = turn === 1 ? setPlayer2 : setPlayer1;

function playCard(cardId: string): void {
    const card: Card | undefined = currentPlayer.hand.find((c: Card) => c.id === cardId);
    if (!card || currentPlayer.mana < card.mana) return;

    const newHand: Card[] = currentPlayer.hand.filter((c: Card) => c.id !== cardId);
    const newField: Card[] = [...currentPlayer.field, card];
    setCurrentPlayer({
        ...currentPlayer,
        mana: currentPlayer.mana - card.mana,
        hand: newHand,
        field: newField,
    });
    setLog([...log, `Jogador ${turn} jogou ${card.nome}`]);
}

interface AttackCard extends Card {}

function attack(cardId: string): void {
    const card: AttackCard | undefined = currentPlayer.field.find((c: AttackCard) => c.id === cardId);
    if (!card) return;

    const totalDamage: number = card.ataque;
    const newHp: number = opponentPlayer.hp - totalDamage;

    setOpponentPlayer({ ...opponentPlayer, hp: newHp });
    setLog([...log, `Jogador ${turn} atacou com ${card.nome} causando ${totalDamage} de dano!`]);
}

  function endTurn() {
    setTurn(turn === 1 ? 2 : 1);
    const resetMana = (p: Player) => ({ ...p, mana: STARTING_MANA });
    if (turn === 1) {
      setPlayer2(resetMana(player2));
    } else {
      setPlayer1(resetMana(player1));
    }
  }

interface Card {
    id: string;
    nome: string;
    ataque: number;
    defesa: number;
    mana: number;
    tipo: string;
}

interface Player {
    hp: number;
    mana: number;
    hand: Card[];
    field: Card[];
}

function renderCard(card: Card, actionFn: (cardId: string) => void): React.ReactElement {
    return (
        <TouchableOpacity style={styles.card} onPress={() => actionFn(card.id)}>
            <Text>{card.nome}</Text>
            <Text>Ataque: {card.ataque}</Text>
            <Text>Defesa: {card.defesa}</Text>
            <Text>Mana: {card.mana}</Text>
            <Text>Tipo: {card.tipo}</Text>
        </TouchableOpacity>
    );
}

  const isGameOver = player1.hp <= 0 || player2.hp <= 0;

  return (
    <View style={styles.container}>
      {isGameOver ? (
        <Text style={styles.title}>Jogador {player1.hp <= 0 ? '2' : '1'} venceu!</Text>
      ) : (
        <>
          <Text style={styles.title}>Turno do Jogador {turn}</Text>

          <Text style={styles.section}>Mão do Jogador {turn} (Mana: {currentPlayer.mana})</Text>
          <FlatList
            data={currentPlayer.hand}
            renderItem={({ item }) => renderCard(item, playCard)}
            keyExtractor={(item) => item.id}
            horizontal
          />

          <Text style={styles.section}>Campo do Jogador {turn}</Text>
          <FlatList
            data={currentPlayer.field}
            renderItem={({ item }) => renderCard(item, attack)}
            keyExtractor={(item) => item.id}
            horizontal
          />

          <Button title="Finalizar Turno" onPress={endTurn} />

          <Text style={styles.section}>Pontos de Vida</Text>
          <Text>Jogador 1: {player1.hp} HP</Text>
          <Text>Jogador 2: {player2.hp} HP</Text>

          <Text style={styles.section}>Log de Ações:</Text>
          {log.slice(-5).map((entry, index) => (
            <Text key={index}>- {entry}</Text>
          ))}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#eee',
    padding: 10,
    margin: 5,
    borderRadius: 8,
    width: 120,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  section: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});
