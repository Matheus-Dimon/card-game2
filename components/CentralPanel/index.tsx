import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface CenterPanelProps {
  turn: number;
  player1: { hp: number };
  player2: { hp: number };
  log: string[];
}

export default function CenterPanel({ turn, player1, player2, log }: CenterPanelProps) {
  return (
    <View style={styles.centerPanel}>
      <Text style={styles.centerText}>VS</Text>
      <Text style={styles.title}>Player {turn}</Text>
      <Text style={styles.section}>Life Points</Text>
      <Text>P1: {player1.hp} HP</Text>
      <Text>P2: {player2.hp} HP</Text>
      <Text style={styles.section}>Log:</Text>
      {log.slice(-3).map((entry, index) => (
        <Text key={index}>- {entry}</Text>
      ))}
    </View>
  );
}
