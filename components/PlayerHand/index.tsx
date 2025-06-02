import React from 'react';
import { ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import type { CardType } from '@/components/Card';

interface PlayerHandProps {
  hand: CardType[];
  turn: number;
  player: number;
  mana: number;
  playCard: (card: CardType) => void;
}

export default function PlayerHand({ hand, turn, player, mana, playCard }: PlayerHandProps) {
  return (
    <ScrollView horizontal style={styles.handHow}>
      {hand.map((card) => (
        <TouchableOpacity
          key={card.id}
          disabled={turn !== player || mana < card.mana}
          onPress={() => playCard(card)}
          style={[styles.cardHand, { opacity: turn !== player || mana < card.mana ? 0.5 : 1 }]}>
          <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}