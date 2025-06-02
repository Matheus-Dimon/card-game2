import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PlayerArea from '@/components/PlayerArea';
import CenterPanel from '@/components/CentralPanel';
import Hero from '@/components/Hero';
import HeroPowerButton from '@/components/HeroPowerButton';
import Heropower from '@/components/HeroPowerButton';

interface Player {
  id: number;
  name: string;
  hp: number;
  hero: any; // Replace 'any' with the correct type if available
  // other properties
}

interface GameBoardProps {
  player1: Player;
  player2: Player;
  turn: number;
  log: string[];
  actions: {
    playCard: (cardId: number) => void;
    attack: (attackerId: number, targetId: number) => void;
    useHeroPower: () => void;
  };
}

export default function GameBoard({ player1, player2, turn, log, actions }: GameBoardProps) {
  const safeActions = actions || {
    playCard: () => {},
    attack: () => {},
    useHeroPower: () => {},
  };

  return (
    <View style={styles.gameBoard}>
      <PlayerArea
        player={player2}
        isCurrentTurn={turn === 2}
        playCard={(card: any) => safeActions.playCard(card.id)}
        attack={(card: any) => safeActions.attack(player2.id, card.id)}
        useHeroPower={safeActions.useHeroPower}
      />
      {player1 && player1.hero && <Hero {...player1.hero} />}
      <HeroPowerButton onPress={safeActions.useHeroPower} />
      <CenterPanel turn={turn} player1={player1} player2={player2} log={log} />

      <PlayerArea
        player={player1}
        isCurrentTurn={turn === 1}
        playCard={(card: any) => safeActions.playCard(card.id)}
        attack={(card: any) => safeActions.attack(player1.id, card.id)}
        useHeroPower={safeActions.useHeroPower}
      />
    </View>
  );
}
