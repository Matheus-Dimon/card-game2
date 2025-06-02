import React, { useState } from 'react';
import { View } from 'react-native';
import PlayerArea from '@/components/PlayerArea';
import { CenterPanel } from '@/components/CenterPanel';
import { styles } from '../app/styles';

import { CardType } from '@/components/Card';

export interface GameBoardProps {
  player1: any;
  player2: any;
  turn: number;
  log: string[];
  actions: {
    playCard: (cardId: number) => void;
    attack: (attackerId: number, targetId: number) => void;
    useHeroPower: () => void;
  };
}

export default function GameBoard() {
  const [turn, setTurn] = useState(1);
  const [log, setLog] = useState<string[]>([]);

  const player1 = {
    hp: 30,
    mana: 5,
    hand: [],
    field: [],
    onEndTurn: () => {},
    onDrawCard: () => {},
    hero: null,
    hasAttacked: false
  };

  const player2 = {
    hp: 30,
    mana: 5,
    hand: [],
    field: [],
    onEndTurn: () => {},
    onDrawCard: () => {},
    hero: null,
    hasAttacked: false
  };

  function endTurn() {
    setTurn((t) => (t === 1 ? 2 : 1));
  }

  return (
    <View style={styles.container}>
      <PlayerArea 
        player={player2} 
        isCurrentTurn={turn === 2}
        isCurrent={turn === 2}
        playCard={(card: CardType) => {/* implement playCard logic */}}
        attack={(card: CardType) => {/* implement attack logic */}}
        useHeroPower={() => {/* implement useHeroPower logic */}}
      />
      <CenterPanel
        turn={turn}
        onEndTurn={endTurn}
        log={log}
      />
      <PlayerArea 
        player={player1} 
        isCurrentTurn={turn === 1}
        isCurrent={turn === 1}
        playCard={(card: CardType) => {/* implement playCard logic */}}
        attack={(card: CardType) => {/* implement attack logic */}}
        useHeroPower={() => {/* implement useHeroPower logic */}}
        invert 
      />;
      
    </View>
  );
}
export interface GameBoardProps {
  player1: any;
  player2: any;
  turn: number;
  log: string[];
  actions: {
    playCard: (cardId: number) => void;
    attack: (attackerId: number, targetId: number) => void;
    useHeroPower: () => void;
  };
}
