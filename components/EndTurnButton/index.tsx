import React from 'react';
import { Button, View } from 'react-native';

interface EndTurnButtonProps {
  onEndTurn: () => void;
}

export default function EndTurnButton({ onEndTurn }: EndTurnButtonProps) {
  return (
    <View style={{ marginVertical: 4 }}>
      <Button title="Encerrar Turno" onPress={onEndTurn} color="#2196F3" />
    </View>
  );
}
