import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PlayerArea from '@/components/PlayerArea';
import CenterPanel from '@/components/CentralPanel';

interface GameBoardProps {
  player1: any; // Replace 'any' with the actual type of player1
  player2: any; // Replace 'any' with the actual type of player2
  turn: number;
  log: string[]; // Replace 'string[]' with the actual type of log
  actions: {
    playCard: (cardId: number) => void; // Replace 'number' and 'void' with the actual types
    attack: (attackerId: number, targetId: number) => void; // Replace 'number' and 'void' with the actual types
    useHeroPower: () => void; // Replace 'void' with the actual type
  };
}

export default function GameBoard({ player1, player2, turn, log, actions }: GameBoardProps) {
  return (
    <View style={styles.gameBoard}>
      <PlayerArea
        player={player2}
        isCurrentTurn={turn === 2}
        playCard={(card: any) => actions.playCard(card.id)}
        attack={(card: any) => actions.attack(player2.id, card.id)}
        useHeroPower={actions.useHeroPower}
      />

      <CenterPanel turn={turn} player1={player1} player2={player2} log={log} />

      <PlayerArea
        player={player1}
        isCurrentTurn={turn === 1}
        playCard={(card: any) => actions.playCard(card.id)}
        attack={(card: any) => actions.attack(player1.id, card.id)}
        useHeroPower={actions.useHeroPower}
      />
    </View>
  );
}
