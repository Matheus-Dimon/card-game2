import React from 'react';
import { Button, View } from 'react-native';

type HeroPowerProps = {
  mana: number;
  skill: string;
  canUseSkill: boolean;
  useSkill: () => void;
};

export default function HeroPower({ mana, skill, canUseSkill, useSkill }: HeroPowerProps) {
  return (
    <View>
      <Button
        title="Hero Power"
        onPress={useSkill}
        disabled={!canUseSkill || mana < 1} // Desabilita o botão se não puder usar a habilidade ou se não tiver mana suficiente
      />
    </View>
  );
}
