import React from 'react';
import { View, Text, Button } from 'react-native';

export default function CenterPanel({ turn, onEndTurn, log }) {
  return (
    <View style={{ width: 150, alignItems: 'center' }}>
      <Text>VS</Text>
      <Text>Turno: {turn}</Text>
      <Button title="End Turn" onPress={onEndTurn} />
      <Text>Log:</Text>
      {log.slice(-3).map((entry, i) => <Text key={i}>{entry}</Text>)}
    </View>
  );
}