import React from 'react';
import { View, ScrollView, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './styles';
import Hero from '@/components/Hero';
import EndTurnButton from '@/components/EndTurnButton';
import DrawCardButton from '@/components/DrawCardButton';
import HeroPowerButton from '@/components/HeroPowerButton';
import { CardType } from '@/components/Card';

interface PlayerAreaProps {
  player: any;
  isCurrentTurn: boolean;
  playCard: (card: CardType) => void;
  attack: (card: CardType) => void;
  useHeroPower: () => void;
}

export default function PlayerArea({ player, isCurrentTurn, playCard, attack, useHeroPower }: PlayerAreaProps) {
  return (
    <View style={styles.playerArea}>
      <Hero {...player.hero} />
      <HeroPowerButton onPress={useHeroPower} />
      <EndTurnButton onEndTurn={player.onEndTurn} />
      <DrawCardButton onDraw={player.onDrawCard} />

      <ScrollView horizontal style={styles.handRow}>
        {player.hand.map((card: CardType) => (
          <TouchableOpacity
            key={card.id}
            disabled={!isCurrentTurn || player.mana < card.mana}
            onPress={() => playCard(card)}
            style={[styles.cardHand, { opacity: !isCurrentTurn || player.mana < card.mana ? 0.5 : 1 }]}>
            <Image source={card.image} style={styles.cardImage} resizeMode="cover" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.fieldRow}>
        {player.field.map((card: CardType) => (
          <TouchableOpacity
            key={card.id}
            disabled={!isCurrentTurn || player.hasAttacked}
            onPress={() => attack(card)}
            style={[styles.cardField, { opacity: !isCurrentTurn || player.hasAttacked ? 0.5 : 1 }]}>
            <Text style={styles.cardTitle}>{card.name}</Text>
            <Text style={styles.cardStats}>ATQ: {card.attack}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
