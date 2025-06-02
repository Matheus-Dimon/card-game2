import React from 'react';
import { Button, View } from 'react-native';

interface HeroPowerButtonProps {
  onPress: () => void;
}

export default function HeroPowerButton({ onPress }: HeroPowerButtonProps) {
  return (
    <View style={{ marginVertical: 4 }}>
      <Button title="Poder do Herói" onPress={onPress} color="#FF5722" />
    </View>
  );
}
