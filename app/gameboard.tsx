import type { CardType } from '@/components/Card';
import { player1Deck, player2Deck } from '@/components/Decks';
import HeroPower from '@/components/HeroPower';
import React, { useState } from 'react';
import { Button, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Hero, { HeroType } from '../components/Hero';
import { styles } from './styles';

const STARTING_HP = 20;
const STARTING_MANA = 5;

interface PlayerState {
  hp: number;
  mana: number;
  hand: CardType[];
  field: CardType[];
  hasAttacked: boolean;
}

function EndTurnButton({ onEndTurn }: { onEndTurn: () => void }) {
  return <Button title="End Turn" onPress={onEndTurn} color="#2196F3" />;
}

function DrawCardButton({ onDraw }: { onDraw: () => void }) {
  return <Button title="Draw Card" onPress={onDraw} color="#4CAF50" />;
}

export default function GameBoard() {
  const [player1, setPlayer1] = useState<PlayerState>({
    hp: STARTING_HP,
    mana: STARTING_MANA,
    hand: [...player1Deck.slice(0, 3)],
    field: [],
    hasAttacked: false,
  });

  const [player2, setPlayer2] = useState<PlayerState>({
    hp: STARTING_HP,
    mana: STARTING_MANA,
    hand: [...player2Deck.slice(0, 3)],
    field: [],
    hasAttacked: false,
  });

  const [turn, setTurn] = useState(1);
  const [log, setLog] = useState<string[]>([]);

  const currentPlayer = turn === 1 ? player1 : player2;
  const opponentPlayer = turn === 1 ? player2 : player1;
  const setCurrentPlayer = turn === 1 ? setPlayer1 : setPlayer2;
  const setOpponentPlayer = turn === 1 ? setPlayer2 : setPlayer1;

  function playCard(card: CardType) {
    if (!card || currentPlayer.mana < card.mana) return;
    const newHand = currentPlayer.hand.filter((c) => c.id !== card.id);
    const newField = [...currentPlayer.field, card];
    setCurrentPlayer({
      ...currentPlayer,
      mana: currentPlayer.mana - card.mana,
      hand: newHand,
      field: newField,
    });
    setLog((prev) => [...prev, `Player ${turn} played ${card.name}`]);
  }

  function attack(card: CardType) {
    if (currentPlayer.hasAttacked || !card) return;
    const newHp = opponentPlayer.hp - card.attack;
    setOpponentPlayer({ ...opponentPlayer, hp: newHp });
    setCurrentPlayer({ ...currentPlayer, hasAttacked: true });
    setLog((prev) => [...prev, `Player ${turn} attacked with ${card.name} causing ${card.attack} damage!`]);
  }

  function endTurn() {
    const reset = (p: PlayerState) => ({ ...p, mana: STARTING_MANA, hasAttacked: false });
    setTurn((prev) => (prev === 1 ? 2 : 1));
    if (turn === 1) setPlayer1(reset(player1));
    else setPlayer2(reset(player2));
  }

  function drawCard() {
    const deck = turn === 1 ? player1Deck : player2Deck;
    const drawnCard = deck.find(
      (c) => !currentPlayer.hand.includes(c) && !currentPlayer.field.includes(c)
    );
    if (drawnCard) {
      setCurrentPlayer({
        ...currentPlayer,
        hand: [...currentPlayer.hand, drawnCard],
      });
      setLog((prev) => [...prev, `Player ${turn} drew a card.`]);
    }
  }

  function useHeroPower() {
    if (currentPlayer.mana >= 3) {
      setOpponentPlayer({ ...opponentPlayer, hp: opponentPlayer.hp - 2 });
      setCurrentPlayer({ ...currentPlayer, mana: currentPlayer.mana - 3 });
      setLog((prev) => [...prev, `Player ${turn} used special ability and caused 2 damage!`]);
    }
  }

  const isGameOver = player1.hp <= 0 || player2.hp <= 0;

  const hero1: HeroType = {
    name: 'Hero 1',
    image: require('../assets/images/hero1.png'),
    hp: player1.hp,
    mana: player1.mana,
    skill: 'Arcane Explosion',
    canUseSkill: player1.mana >= 3,
    useSkill: turn === 1 ? useHeroPower : () => {},
  };

  const hero2: HeroType = {
    name: 'Hero 2',
    image: require('../assets/images/hero2.png'),
    hp: player2.hp,
    mana: player2.mana,
    skill: 'Shadow Strike',
    canUseSkill: player2.mana >= 3,
    useSkill: turn === 2 ? useHeroPower : () => {},
  };

  return (
    <View style={styles.container}>
      {isGameOver ? (
        <Text style={styles.title}>Jogador {player1.hp <= 0 ? '2' : '1'} vence!</Text>
      ) : (
        <View style={styles.gameBoard}>
          {/* Jogador 2 */}
          <View style={styles.playerArea}>
            <Hero {...hero2} />
            <View style={styles.buttonRow}>
              <HeroPower {...hero2} />
              <DrawCardButton onDraw={drawCard} />
              <EndTurnButton onEndTurn={endTurn} />
            </View>

            <ScrollView horizontal style={styles.handRow}>
              {player2.hand.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 2 || player2.mana < card.mana}
                  onPress={() => playCard(card)}
                  style={[
                    styles.cardHand,
                    { opacity: turn !== 2 || player2.mana < card.mana ? 0.5 : 1 },
                  ]}>
                  <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.fieldRow}>
              {player2.field.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 2 || player2.hasAttacked}
                  onPress={() => attack(card)}
                  style={[styles.cardField, { opacity: turn !== 2 || player2.hasAttacked ? 0.5 : 1 }]}>
                  <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
                  <Text>{card.name}</Text>
                  <Text>ATQ: {card.attack}</Text>
                  <Text>DEF: {card.defense}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Painel Central */}
          <View style={styles.centerPanel}>
            <Text style={styles.centerText}>VS</Text>
            <Text style={styles.title}>Turno do Jogador {turn}</Text>
            <Text style={styles.section}>HP</Text>
            <Text>P1: {player1.hp}</Text>
            <Text>P2: {player2.hp}</Text>
            <Text style={styles.section}>Log:</Text>
            {log.slice(-3).map((entry, i) => (
              <Text key={i}>- {entry}</Text>
            ))}
          </View>

          {/* Jogador 1 */}
          <View style={styles.playerArea}>
            <Hero {...hero1} />
            <View style={styles.buttonRow}>
              <HeroPower {...hero1} />
              <DrawCardButton onDraw={drawCard} />
              <EndTurnButton onEndTurn={endTurn} />
            </View>

            <ScrollView horizontal style={styles.handRow}>
              {player1.hand.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 1 || player1.mana < card.mana}
                  onPress={() => playCard(card)}
                  style={[
                    styles.cardHand,
                    { opacity: turn !== 1 || player1.mana < card.mana ? 0.5 : 1 },
                  ]}>
                  <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.fieldRow}>
              {player1.field.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 1 || player1.hasAttacked}
                  onPress={() => attack(card)}
                  style={[styles.cardField, { opacity: turn !== 1 || player1.hasAttacked ? 0.5 : 1 }]}>
                  <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
                  <Text>{card.name}</Text>
                  <Text>ATQ: {card.attack}</Text>
                  <Text>DEF: {card.defense}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
