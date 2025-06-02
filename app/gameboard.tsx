import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Player from '@/components/Player';
import { player1Deck, player2Deck } from '@/components/Decks';
import type { CardType } from '@/components/Player';

const STARTING_HP = 20;
const STARTING_MANA = 5;

export default function GameBoard() {
  const [player1, setPlayer1] = useState<PlayerState>({
    hp: STARTING_HP,
    mana: STARTING_MANA,
    hand: [...player1Deck],
    field: [],
    hasAttacked: false,
  });

  const [player2, setPlayer2] = useState<PlayerState>({
    hp: STARTING_HP,
    mana: STARTING_MANA,
    hand: [...player2Deck],
    field: [],
    hasAttacked: false,
  });

  const [turn, setTurn] = useState(1);
  const [log, setLog] = useState<string[]>([]);

  const currentPlayer = turn === 1 ? player1 : player2;
  const opponentPlayer = turn === 1 ? player2 : player1;
  const setCurrentPlayer = turn === 1 ? setPlayer1 : setPlayer2;
  const setOpponentPlayer = turn === 1 ? setPlayer2 : setPlayer1;

type Card = CardType;

interface PlayerState {
    hp: number;
    mana: number;
    hand: Card[];
    field: Card[];
    hasAttacked: boolean;
}

function playCard(card: Card) {
    if (!card || currentPlayer.mana < card.mana) return;

    const newHand = currentPlayer.hand.filter((c: Card) => c.id !== card.id);
    const newField = [...currentPlayer.field, card];

    setCurrentPlayer({
        ...currentPlayer,
        mana: currentPlayer.mana - card.mana,
        hand: newHand,
        field: newField,
    });

    setLog((prev: string[]) => [...prev, `Jogador ${turn} jogou ${card.nome}`]);
}

interface AttackFunction {
    (card: Card): void;
}

function attack(card: Card): void {
    if (currentPlayer.hasAttacked) return;

    if (!card) return;

    const newHp: number = opponentPlayer.hp - card.ataque;
    setOpponentPlayer({ ...opponentPlayer, hp: newHp });
    setCurrentPlayer({ ...currentPlayer, hasAttacked: true });

    setLog((prev: string[]) => [
        ...prev,
        `Jogador ${turn} atacou com ${card.nome} causando ${card.ataque} de dano!`
    ]);
}
  function endTurn() {
    const resetManaAndAttack = (p: PlayerState) => ({ ...p, mana: STARTING_MANA, hasAttacked: false });

    if (turn === 1) {
      setPlayer1(resetManaAndAttack(player1));
    } else {
      setPlayer2(resetManaAndAttack(player2));
    }

    setTurn(prev => (prev === 1 ? 2 : 1));
  }

  const isGameOver = player1.hp <= 0 || player2.hp <= 0;

  return (
    <View style={styles.container}>
      {isGameOver ? (
        <Text style={styles.title}>Jogador {player1.hp <= 0 ? '2' : '1'} venceu!</Text>
      ) : (
        <>
          <Text style={styles.title}>Turno do Jogador {turn}</Text>

          <Player
            player={currentPlayer}
            isCurrent={true}
            onPlayCard={playCard}
            onAttack={attack}
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
