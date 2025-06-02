import React from 'react';
import { View, Text } from 'react-native';
import gamerboard from '@/app/gameboard';
import { styles } from './styles';


interface GameBoardProps {
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

const GameBoard: React.FC<GameBoardProps> = ({ player1, player2, turn, log, actions }) => {
    return null; // Add implementation here
};

interface GameScreenProps {
    player1: any;
    player2: any;
    turn: number;
    log: string[];
    playCard: (cardId: number) => void;
    attack: (target: 'player1' | 'player2') => void;
    useHeroPower: () => void;
    isGameOver: boolean;
    invert?: boolean;
    isCurrent?: boolean;
}

export const GameScreen: React.FC<GameScreenProps> = ({
    player1,
    player2,
    turn,
    log,
    playCard,
    attack,
    useHeroPower,
    isGameOver,
}) => {
    return (
        <View style={styles.container}>
            {isGameOver ? (
                <Text style={styles.title}>Player{player1.hp <= 0 ? '2' : '1'} vence!</Text>
            ) : (
                <GameBoard
                    player1={player1}
                    player2={player2}
                    turn={turn}
                    log={log}
                    actions={{
                        playCard,
                        attack: (_: number, __: number) => {
                            // Assuming attackerId is always the current player's ID
                            // and you want to attack the other player
                            const target = turn === 1 ? 'player2' : 'player1';
                            attack(target);
                        },
                        useHeroPower
                    }}
                />
            )}
        </View>
    );
};
