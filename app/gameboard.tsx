import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { player1Deck, player2Deck } from '@/components/Decks';
import Hero, { HeroType } from '../components/Hero';
import type { CardType } from '@/components/Card';

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
  return <Button title="Fim de turno" onPress={onEndTurn} color="#2196F3" />;
}

function DrawCardButton({ onDraw }: { onDraw: () => void }) {
  return <Button title="Comprar carta" onPress={onDraw} color="#4CAF50" />;
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

    setLog((prev) => [...prev, `Jogador ${turn} jogou ${card.nome}`]);
  }

  function attack(card: CardType) {
    if (currentPlayer.hasAttacked || !card) return;

    const newHp = opponentPlayer.hp - card.ataque;
    setOpponentPlayer({ ...opponentPlayer, hp: newHp });
    setCurrentPlayer({ ...currentPlayer, hasAttacked: true });

    setLog((prev) => [
      ...prev,
      `Jogador ${turn} atacou com ${card.nome} causando ${card.ataque} de dano!`,
    ]);
  }

  function endTurn() {
    const reset = (p: PlayerState) => ({ ...p, mana: STARTING_MANA, hasAttacked: false });
    setTurn((prev) => (prev === 1 ? 2 : 1));
    if (turn === 1) setPlayer1(reset(player1));
    else setPlayer2(reset(player2));
  }

  function drawCard() {
    const deck = turn === 1 ? player1Deck : player2Deck;
    const drawnCard = deck.find((c) => !currentPlayer.hand.includes(c) && !currentPlayer.field.includes(c));
    if (drawnCard) {
      setCurrentPlayer({
        ...currentPlayer,
        hand: [...currentPlayer.hand, drawnCard],
      });
      setLog((prev) => [...prev, `Jogador ${turn} comprou uma carta.`]);
    }
  }

  function usarHabilidadeEspecial() {
    if (currentPlayer.mana >= 3) {
      setOpponentPlayer({ ...opponentPlayer, hp: opponentPlayer.hp - 2 });
      setCurrentPlayer({ ...currentPlayer, mana: currentPlayer.mana - 3 });
      setLog((prev) => [...prev, `Jogador ${turn} usou habilidade especial e causou 2 de dano!`]);
    }
  }

  const isGameOver = player1.hp <= 0 || player2.hp <= 0;

  const hero1: HeroType = {
    nome: 'Herói 1',
    imagem: require('../assets/images/hero1.png'),
    hp: player1.hp,
    mana: player1.mana,
    habilidade: 'Explosão Arcana',
    podeUsarHabilidade: player1.mana >= 3,
    usarHabilidade: usarHabilidadeEspecial,
  };

  const hero2: HeroType = {
    nome: 'Herói 2',
    imagem: require('../assets/images/hero2.png'),
    hp: player2.hp,
    mana: player2.mana,
    habilidade: 'Golpe Sombrio',
    podeUsarHabilidade: player2.mana >= 3,
    usarHabilidade: usarHabilidadeEspecial,
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {isGameOver ? (
          <Text style={styles.title}>Jogador {player1.hp <= 0 ? '2' : '1'} venceu!</Text>
        ) : (
          <>
            <View style={styles.heroRow}><Hero {...hero2} /></View>

            <ScrollView horizontal style={styles.handRow} contentContainerStyle={styles.handContent}>
              {player2.hand.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 2 || player2.mana < card.mana}
                  onPress={() => playCard(card)}
                  style={[styles.cardHand, { opacity: turn !== 2 || player2.mana < card.mana ? 0.5 : 1 }]}
                >
                  <Image source={{ uri: card.imagem }} style={styles.cardImage} resizeMode="cover" />
                </TouchableOpacity>
              ))}
            </ScrollView>

            <View style={styles.fieldRow}>
              {player2.field.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 2 || player2.hasAttacked}
                  onPress={() => attack(card)}
                  style={[styles.cardField, { opacity: turn !== 2 || player2.hasAttacked ? 0.5 : 1 }]}
                >
                  <Text style={styles.cardTitle}>{card.nome}</Text>
                  <Text style={styles.cardStats}>ATK: {card.ataque}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.centerCircle}><Text style={styles.centerText}>VS</Text></View>

            <View style={styles.fieldRow}>
              {player1.field.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 1 || player1.hasAttacked}
                  onPress={() => attack(card)}
                  style={[styles.cardField, { opacity: turn !== 1 || player1.hasAttacked ? 0.5 : 1 }]}
                >
                  <Text style={styles.cardTitle}>{card.nome}</Text>
                  <Text style={styles.cardStats}>ATK: {card.ataque}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.heroRow}><Hero {...hero1} /></View>

            <ScrollView horizontal style={styles.handRow} contentContainerStyle={styles.handContent}>
              {player1.hand.map((card) => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 1 || player1.mana < card.mana}
                  onPress={() => playCard(card)}
                  style={[styles.cardHand, { opacity: turn !== 1 || player1.mana < card.mana ? 0.5 : 1 }]}
                >
                  <Image source={{ uri: card.imagem }} style={styles.cardImage} resizeMode="cover" />
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </ScrollView>

      <View style={styles.infoPanel}>
        {!isGameOver && (
          <>
            <Text style={styles.title}>Turno do Jogador {turn}</Text>
            <EndTurnButton onEndTurn={endTurn} />
            <DrawCardButton onDraw={drawCard} />
            <Button title="Usar Habilidade" onPress={usarHabilidadeEspecial} color="#FF5722" />
            <Text style={styles.section}>Cartas na mão:</Text>
            {(turn === 1 ? player1.hand : player2.hand).map((card) => (
              <Text key={card.id}>
                {card.nome} (Mana: {card.mana}, Ataque: {card.ataque})
              </Text>
            ))}
          </>
        )}
        <Text style={styles.section}>Pontos de Vida</Text>
        <Text>Jogador 1: {player1.hp} HP</Text>
        <Text>Jogador 2: {player2.hp} HP</Text>
        <Text style={styles.section}>Log de Ações:</Text>
        {log.slice(-5).map((entry, index) => (
          <Text key={index}>- {entry}</Text>
        ))}
      </View>
    </View>
  );
}
const CARD_WIDTH = 80;
const CARD_HEIGHT = 120;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e2e2e',
        paddingTop: 16,
        paddingBottom: 8,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        maxWidth: 420,
        alignSelf: 'center',
        width: '100%',
    },
    handRow: {
        minHeight: CARD_HEIGHT + 20,
        marginVertical: 4,
        maxWidth: '100%',
        overflow: 'visible',
    },
    handContent: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8,
        minHeight: CARD_HEIGHT + 10,
    },
    cardHand: {
        marginHorizontal: 4,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#bbb',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        width: CARD_WIDTH,
        height: CARD_HEIGHT + 32, // espaço extra para texto
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 4,
        paddingTop: 0,
    },
    cardImage: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 13,
        marginTop: 2,
        marginBottom: 0,
        color: '#222',
        textAlign: 'center',
        width: CARD_WIDTH - 8,
    },
    cardStats: {
        fontSize: 12,
        color: '#444',
        textAlign: 'center',
        width: CARD_WIDTH - 8,
    },
    heroRow: {
        alignItems: 'center',
        marginVertical: 2,
    },
    fieldRow: {
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: 80,
        maxWidth: '100%',
        flexWrap: 'wrap',
    },
    cardField: {
        width: CARD_WIDTH - 10,
        height: CARD_HEIGHT - 30,
        backgroundColor: '#e0e0e0',
        borderColor: '#888',
        borderWidth: 1,
        borderRadius: 8,
        marginHorizontal: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#444',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 12,
    },
    centerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    infoPanel: {
        backgroundColor: '#222',
        borderRadius: 10,
        margin: 8,
        padding: 10,
        width: '100%',
        maxWidth: 420,
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffd700',
        marginBottom: 6,
        textAlign: 'center',
    },
    section: {
        marginTop: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
});
