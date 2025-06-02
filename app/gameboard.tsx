import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import PlayerArea from '@/components/PlayerArea';
import CenterPanel from '@/components/CenterPanel';
import { styles } from '../app/styles';

export default function GameBoard() {
  // Estados simplificados
  const [turn, setTurn] = useState(1);
  const [log, setLog] = useState<string[]>([]);

  // Dados fictícios de exemplo
  const player1 = { /* hp, mana, hand, field, etc */ };
  const player2 = { /* hp, mana, hand, field, etc */ };

  function endTurn() {
    setTurn((t) => (t === 1 ? 2 : 1));
    setLog((l) => [...l, `Fim do turno ${turn}`]);
  }

  return (
    <View style={styles.container}>
      <PlayerArea player={player2} isCurrent={turn === 2} />
      <CenterPanel
        turn={turn}
        onEndTurn={endTurn}
        log={log}
      />
      <PlayerArea player={player1} isCurrent={turn === 1} invert />
    </View>
  );
}