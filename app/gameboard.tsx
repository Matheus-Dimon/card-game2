import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { player1Deck, player2Deck } from '@/components/Decks';
import Hero, { HeroType } from '../components/Hero';
import type { CardType } from '@/components/Card';

const STARTING_HP = 20;
const STARTING_MANA = 5;

type Card = CardType;

interface PlayerState {
    hp: number;
    mana: number;
    hand: Card[];
    field: Card[];
    hasAttacked: boolean;
}

function EndTurnButton({ onEndTurn }: { onEndTurn: () => void }) {
    return (
        <Button
            title="Fim de turno"
            onPress={onEndTurn}
            color="#2196F3"
        />
    );
}

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

  const hero1: HeroType = {
    nome: 'Herói 1',
    imagem: require('../assets/images/hero1.png'),
    hp: player1.hp,
    mana: player1.mana,
    habilidade: '',
    podeUsarHabilidade: true,
    usarHabilidade: () => {},
  };

  const hero2: HeroType = {
    nome: 'Herói 2',
    imagem: require('../assets/images/hero2.png'),
    hp: player2.hp,
    mana: player2.mana,
    habilidade: '',
    podeUsarHabilidade: true,
    usarHabilidade: () => {},
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {isGameOver ? (
          <Text style={styles.title}>Jogador {player1.hp <= 0 ? '2' : '1'} venceu!</Text>
        ) : (
          <>
            {/* Herói do Jogador 2 */}
            <View style={styles.heroRow}>
              <Hero {...hero2} />
            </View>
            {/* Mão do Jogador 2 (Topo) */}
            <ScrollView horizontal style={styles.handRow} contentContainerStyle={styles.handContent}>
              {player2.hand.map(card => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 2 || player2.mana < card.mana}
                  onPress={() => playCard(card)}
                  style={[
                    styles.cardHand,
                    { opacity: turn !== 2 || player2.mana < card.mana ? 0.5 : 1 }
                  ]}
                >
                  <View style={styles.card}>
                    <Text style={styles.cardTitle}>{card.nome}</Text>
                    <Text style={styles.cardStats}>ATK: {card.ataque}</Text>
                    <Text style={styles.cardStats}>DEF: {card.defesa}</Text>
                    <Text style={styles.cardStats}>Mana: {card.mana}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            {/* Campo do Jogador 2 */}
            <View style={styles.fieldRow}>
              {player2.field.map(card => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 2 || player2.hasAttacked}
                  onPress={() => attack(card)}
                  style={[
                    styles.cardField,
                    { opacity: turn !== 2 || player2.hasAttacked ? 0.5 : 1 }
                  ]}
                >
                  <Text style={styles.cardTitle}>{card.nome}</Text>
                  <Text style={styles.cardStats}>ATK: {card.ataque}</Text>
                </TouchableOpacity>
              ))}
            </View>
              {/* Centro */}
              <View style={styles.centerCircle}>
                <Text style={styles.centerText}>VS</Text>
              </View>
              {/* Campo do Jogador 1 */}
              <View style={styles.fieldRow}>
                {player1.field.map(card => (
                  <TouchableOpacity
                    key={card.id}
                    disabled={turn !== 1 || player1.hasAttacked}
                    onPress={() => attack(card)}
                    style={[
                      styles.cardField,
                      { opacity: turn !== 1 || player1.hasAttacked ? 0.5 : 1 }
                    ]}
                  >
                    <Text style={styles.cardTitle}>{card.nome}</Text>
                    <Text style={styles.cardStats}>ATK: {card.ataque}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            {/* Herói do Jogador 1 */}
            <View style={styles.heroRow}>
              <Hero {...hero1} />
            </View>

            {/* Mão do Jogador 1 (Base) */}
            <ScrollView horizontal style={styles.handRow} contentContainerStyle={styles.handContent}>
              {player1.hand.map(card => (
                <TouchableOpacity
                  key={card.id}
                  disabled={turn !== 1 || player1.mana < card.mana}
                  onPress={() => playCard(card)}
                  style={[
                    styles.cardHand,
                    { opacity: turn !== 1 || player1.mana < card.mana ? 0.5 : 1 }
                  ]}
                >
                  <View style={styles.card}>
                    <Text style={styles.cardTitle}>{card.nome}</Text>
                    <Text style={styles.cardStats}>Mana: {card.mana}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </>
        )}
      </ScrollView>
      {/* Controles e informações fixos na parte inferior */}
      <View style={styles.infoPanel}>
        {!isGameOver && (
          <>
            <Text style={styles.title}>Turno do Jogador {turn}</Text>
            <EndTurnButton onEndTurn={endTurn} />
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
    maxWidth: 420, // Limita largura para web/mobile
    alignSelf: 'center',
    width: '100%',
  },
  handRow: {
    minHeight: CARD_HEIGHT + 10,
    marginVertical: 4,
    maxWidth: '100%',
  },
  handContent: {
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  cardHand: {
    marginHorizontal: 4,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#f5f5dc',
    borderColor: '#b8860b',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
    color: '#222',
    textAlign: 'center',
  },
  cardStats: {
    fontSize: 12,
    color: '#444',
    textAlign: 'center',
  },
  heroRow: {
    alignItems: 'center',
    marginVertical: 2,
  },
  battlefield: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    minHeight: CARD_HEIGHT + 20,
    maxWidth: '100%',
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
