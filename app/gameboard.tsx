<<<<<<< HEAD
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

=======
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native';
import { player1Deck, player2Deck } from '@/components/Decks';
import Hero, { HeroType } from '../components/Hero';
import type { CardType } from '@/components/Card';
import { styles } from "./styles"


// Define o valor inicial de vida para os jogadores
const STARTING_HP = 20;
// Define o valor inicial de mana para os jogadores
const STARTING_MANA = 5;

// Define a interface para o estado do jogador
interface PlayerState {
  hp: number; // Pontos de vida
  mana: number; // Mana disponível
  hand: CardType[]; // Mão de cartas
  field: CardType[]; // Cartas em campo
  hasAttacked: boolean; // Indica se o jogador já atacou neste turno
}

// Componente para o botão de "End Turn"
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
function EndTurnButton({ onEndTurn }: { onEndTurn: () => void }) {
  return <Button title="End Turn" onPress={onEndTurn} color="#2196F3" />;
}

<<<<<<< HEAD
=======
// Componente para o botão de "Draw Card"
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
function DrawCardButton({ onDraw }: { onDraw: () => void }) {
  return <Button title="Draw Card" onPress={onDraw} color="#4CAF50" />;
}

<<<<<<< HEAD
export default function GameBoard() {
  const [player1, setPlayer1] = useState<PlayerState>({
    hp: STARTING_HP,
    mana: STARTING_MANA,
    hand: [...player1Deck.slice(0, 3)],
=======
// Componente principal do tabuleiro do jogo
export default function GameBoard() {
  // Estado para o jogador 1
  const [player1, setPlayer1] = useState<PlayerState>({
    hp: STARTING_HP,
    mana: STARTING_MANA,
    hand: [...player1Deck.slice(0, 3)], // Inicializa a mão com as 3 primeiras cartas do deck
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    field: [],
    hasAttacked: false,
  });

<<<<<<< HEAD
  const [player2, setPlayer2] = useState<PlayerState>({
    hp: STARTING_HP,
    mana: STARTING_MANA,
    hand: [...player2Deck.slice(0, 3)],
=======
  // Estado para o jogador 2
  const [player2, setPlayer2] = useState<PlayerState>({
    hp: STARTING_HP,
    mana: STARTING_MANA,
    hand: [...player2Deck.slice(0, 3)], // Inicializa a mão com as 3 primeiras cartas do deck
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    field: [],
    hasAttacked: false,
  });

<<<<<<< HEAD
  const [turn, setTurn] = useState(1);
  const [log, setLog] = useState<string[]>([]);

=======
  // Estado para controlar o turno
  const [turn, setTurn] = useState(1);
  // Estado para o log de eventos
  const [log, setLog] = useState<string[]>([]);

  // Determina o jogador atual e o oponente com base no turno
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
  const currentPlayer = turn === 1 ? player1 : player2;
  const opponentPlayer = turn === 1 ? player2 : player1;
  const setCurrentPlayer = turn === 1 ? setPlayer1 : setPlayer2;
  const setOpponentPlayer = turn === 1 ? setPlayer2 : setPlayer1;

<<<<<<< HEAD
  function playCard(card: CardType) {
    if (!card || currentPlayer.mana < card.mana) return;
    const newHand = currentPlayer.hand.filter((c) => c.id !== card.id);
    const newField = [...currentPlayer.field, card];
=======
  // Função para jogar uma carta
  function playCard(card: CardType) {
    // Se não houver carta ou mana insuficiente, não faz nada
    if (!card || currentPlayer.mana < card.mana) return;
    // Remove a carta da mão
    const newHand = currentPlayer.hand.filter((c) => c.id !== card.id);
    // Adiciona a carta ao campo
    const newField = [...currentPlayer.field, card];

    // Atualiza o estado do jogador atual
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    setCurrentPlayer({
      ...currentPlayer,
      mana: currentPlayer.mana - card.mana,
      hand: newHand,
      field: newField,
    });
<<<<<<< HEAD
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
=======

    // Adiciona uma entrada ao log
    setLog((prev) => [...prev, `Player ${turn} played ${card.name}`]);
  }

  // Função para atacar com uma carta
  function attack(card: CardType) {
    // Se o jogador já atacou ou não houver carta, não faz nada
    if (currentPlayer.hasAttacked || !card) return;

    // Calcula o novo valor de vida do oponente
    const newHp = opponentPlayer.hp - card.attack;
    // Atualiza o estado do oponente
    setOpponentPlayer({ ...opponentPlayer, hp: newHp });
    // Marca o jogador atual como tendo atacado
    setCurrentPlayer({ ...currentPlayer, hasAttacked: true });

    // Adiciona uma entrada ao log
    setLog((prev) => [
      ...prev,
      `Player ${turn} attacked with ${card.name} causing ${card.attack} damage!`,
    ]);
  }

  // Função para finalizar o turno
  function endTurn() {
    // Reseta a mana e o estado de ataque do jogador
    const reset = (p: PlayerState) => ({ ...p, mana: STARTING_MANA, hasAttacked: false });
    // Alterna o turno
    setTurn((prev) => (prev === 1 ? 2 : 1));
    // Reseta o jogador atual
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    if (turn === 1) setPlayer1(reset(player1));
    else setPlayer2(reset(player2));
  }

<<<<<<< HEAD
  function drawCard() {
    const deck = turn === 1 ? player1Deck : player2Deck;
    const drawnCard = deck.find(
      (c) => !currentPlayer.hand.includes(c) && !currentPlayer.field.includes(c)
    );
    if (drawnCard) {
=======
  // Função para comprar uma carta
  function drawCard() {
    // Determina o deck com base no turno
    const deck = turn === 1 ? player1Deck : player2Deck;
    // Encontra uma carta que não está na mão nem no campo do jogador
    const drawnCard = deck.find((c) => !currentPlayer.hand.includes(c) && !currentPlayer.field.includes(c));
    if (drawnCard) {
      // Adiciona a carta à mão do jogador
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
      setCurrentPlayer({
        ...currentPlayer,
        hand: [...currentPlayer.hand, drawnCard],
      });
<<<<<<< HEAD
=======
      // Adiciona uma entrada ao log
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
      setLog((prev) => [...prev, `Player ${turn} drew a card.`]);
    }
  }

<<<<<<< HEAD
  function useHeroPower() {
    if (currentPlayer.mana >= 3) {
      setOpponentPlayer({ ...opponentPlayer, hp: opponentPlayer.hp - 2 });
      setCurrentPlayer({ ...currentPlayer, mana: currentPlayer.mana - 3 });
=======
  // Função para usar o poder do herói
  function useHeroPower() {
    if (currentPlayer.mana >= 3) {
      // Aplica dano ao oponente
      setOpponentPlayer({ ...opponentPlayer, hp: opponentPlayer.hp - 2 });
      // Reduz a mana do jogador atual
      setCurrentPlayer({ ...currentPlayer, mana: currentPlayer.mana - 3 });
      // Adiciona uma entrada ao log
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
      setLog((prev) => [...prev, `Player ${turn} used special ability and caused 2 damage!`]);
    }
  }

<<<<<<< HEAD
  const isGameOver = player1.hp <= 0 || player2.hp <= 0;

=======
  // Verifica se o jogo acabou
  const isGameOver = player1.hp <= 0 || player2.hp <= 0;

  // Define os dados do herói 1
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
  const hero1: HeroType = {
    name: 'Hero 1',
    image: require('../assets/images/hero1.png'),
    hp: player1.hp,
    mana: player1.mana,
    skill: 'Arcane Explosion',
    canUseSkill: player1.mana >= 3,
<<<<<<< HEAD
    useSkill: turn === 1 ? useHeroPower : () => {},
  };

=======
    useSkill: useHeroPower,
  };

  // Define os dados do herói 2
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
  const hero2: HeroType = {
    name: 'Hero 2',
    image: require('../assets/images/hero2.png'),
    hp: player2.hp,
    mana: player2.mana,
    skill: 'Shadow Strike',
    canUseSkill: player2.mana >= 3,
<<<<<<< HEAD
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

=======
    useSkill: useHeroPower,
  };

  // Renderiza o componente
  return (
    <View style={styles.container}>
      {/* Se o jogo acabou, mostra o vencedor */}
      {isGameOver ? (
        <Text style={styles.title}>Jogador {player1.hp <= 0 ? '2' : '1'} vence!</Text>
      ) : (
        // Se não, mostra o tabuleiro do jogo
        <View style={styles.gameBoard}>
          {/* Área do jogador 2 */}
          <View style={styles.playerArea}>
            <Hero {...hero2} />
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
            <ScrollView horizontal style={styles.handRow}>
              {player2.hand.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 2 || player2.mana < card.mana}
                  onPress={() => playCard(card)}
<<<<<<< HEAD
                  style={[
                    styles.cardHand,
                    { opacity: turn !== 2 || player2.mana < card.mana ? 0.5 : 1 },
                  ]}>
=======
                  style={[styles.cardHand, { opacity: turn !== 2 || player2.mana < card.mana ? 0.5 : 1 }]}>
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
                  <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
                </TouchableOpacity>
              ))}
            </ScrollView>
<<<<<<< HEAD

=======
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
            <View style={styles.fieldRow}>
              {player2.field.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 2 || player2.hasAttacked}
                  onPress={() => attack(card)}
                  style={[styles.cardField, { opacity: turn !== 2 || player2.hasAttacked ? 0.5 : 1 }]}>
<<<<<<< HEAD
                  <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
                  <Text>{card.name}</Text>
                  <Text>ATQ: {card.attack}</Text>
                  <Text>DEF: {card.defense}</Text>
=======
                  <Text style={styles.cardTitle}>{card.name}</Text>
                  <Text style={styles.cardStats}>ATQ: {card.attack}</Text>
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
                </TouchableOpacity>
              ))}
            </View>
          </View>

<<<<<<< HEAD
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

=======
          {/* Painel central */}
          <View style={styles.centerPanel}>
            <Text style={styles.centerText}>VS</Text>
            <Text style={styles.title}> Player {turn}</Text>
            <EndTurnButton onEndTurn={endTurn} />
            <DrawCardButton onDraw={drawCard} />
            <Button title="Use skill" onPress={useHeroPower} color="#FF5722" />
            <Text style={styles.section}>Life Points</Text>
            <Text>P1: {player1.hp} HP</Text>
            <Text>P2: {player2.hp} HP</Text>
            <Text style={styles.section}>Log:</Text>
            {log.slice(-3).map((entry, index) => (
              <Text key={index}>- {entry}</Text>
            ))}
          </View>

          {/* Área do jogador 1 */}
          <View style={styles.playerArea}>
            <Hero {...hero1} />
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
            <ScrollView horizontal style={styles.handRow}>
              {player1.hand.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 1 || player1.mana < card.mana}
                  onPress={() => playCard(card)}
<<<<<<< HEAD
                  style={[
                    styles.cardHand,
                    { opacity: turn !== 1 || player1.mana < card.mana ? 0.5 : 1 },
                  ]}>
=======
                  style={[styles.cardHand, { opacity: turn !== 1 || player1.mana < card.mana ? 0.5 : 1 }]}>
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
                  <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
                </TouchableOpacity>
              ))}
            </ScrollView>
<<<<<<< HEAD

=======
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
            <View style={styles.fieldRow}>
              {player1.field.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 1 || player1.hasAttacked}
                  onPress={() => attack(card)}
                  style={[styles.cardField, { opacity: turn !== 1 || player1.hasAttacked ? 0.5 : 1 }]}>
<<<<<<< HEAD
                  <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
                  <Text>{card.name}</Text>
                  <Text>ATQ: {card.attack}</Text>
                  <Text>DEF: {card.defense}</Text>
=======
                  <Text style={styles.cardTitle}>{card.name}</Text>
                  <Text style={styles.cardStats}>ATQ: {card.attack}</Text>
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
