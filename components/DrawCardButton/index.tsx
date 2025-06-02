import React from 'react';
import { Button, View } from 'react-native';

interface DrawCardButtonProps {
  onDraw: () => void;
}

export default function DrawCardButton({ onDraw }: DrawCardButtonProps) {
  return (
    <View style={{ marginVertical: 4 }}>
      <Button title="Comprar Carta" onPress={onDraw} color="#4CAF50" />
    </View>
  );
}
