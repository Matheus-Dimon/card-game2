import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import PlayerArea from '@/components/PlayerArea';
import CenterPanel from '@/components/CentralPanel';
import Hero from '@/components/Hero';
import HeroPowerButton from '@/components/HeroPowerButton';
import Heropower from '@/components/HeroPowerButton';
import PlayerHand from '@/components/PlayerHand';
import FieldRow from '@/components/FieldRow';
import CenterPanel from '@/components/CenterPanel';
// ...imports

export default function GameBoard() {
  // ...estados e lógica

  return (
    <View style={styles.container}>
      {isGameOver ? (
        <Text style={styles.title}>Jogador {player1.hp <= 0 ? '2' : '1'} vence!</Text>
      ) : (
        <View style={styles.gameBoard}>
          {/* Área do jogador 2 */}
          <View style={styles.playerArea}>
            <Hero {...hero2} />
            <PlayerHand
              hand={player2.hand}
              turn={turn}
              player={2}
              mana={player2.mana}
              playCard={playCard}
            />
            <FieldRow
              field={player2.field}
              turn={turn}
              player={2}
              hasAttacked={player2.hasAttacked}
              attack={attack}
            />
          </View>

          {/* Painel central */}
          <CenterPanel
            turn={turn}
            endTurn={endTurn}
            drawCard={drawCard}
            useHeroPower={useHeroPower}
            player1={player1}
            player2={player2}
            log={log}
          />

          {/* Área do jogador 1 */}
          <View style={styles.playerArea}>
            <Hero {...hero1} />
            <PlayerHand
              hand={player1.hand}
              turn={turn}
              player={1}
              mana={player1.mana}
              playCard={playCard}
            />
            <FieldRow
              field={player1.field}
              turn={turn}
              player={1}
              hasAttacked={player1.hasAttacked}
              attack={attack}
            />
          </View>
        </View>
      )}
    </View>
  );
}
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
