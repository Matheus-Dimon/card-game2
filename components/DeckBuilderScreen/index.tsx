import React, { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { CardType } from '@/components/Card';
import ExtendedCards from '@/components/DataCards'; // seu array com 20 cartas repetidas
import { styles } from './styles';

interface Props {
  onSave: (deck: CardType[]) => void;
}

export default function DeckBuilderScreen({ onSave }: Props) {
  const [selectedDeck, setSelectedDeck] = useState<CardType[]>([]);

  const toggleCard = (card: CardType) => {
    const alreadySelected = selectedDeck.some(c => c.id === card.id);
    if (alreadySelected) {
      // Remove a carta se já estiver selecionada
      setSelectedDeck(prev => prev.filter(c => c.id !== card.id));
    } else {
      if (selectedDeck.length >= 20) {
        Alert.alert('Limite de cartas', 'Você pode selecionar até 20 cartas.');
        return;
      }
      setSelectedDeck(prev => [...prev, card]);
    }
  };

  const saveDeck = () => {
    if (selectedDeck.length !== 20) {
      Alert.alert('Deck incompleto', 'Você precisa selecionar exatamente 20 cartas.');
      return;
    }
    onSave(selectedDeck);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Selecione suas Cartas (20)</Text>

      {/* Lista de cartas para selecionar */}
      <View style={styles.cardList}>
        {ExtendedCards.map(card => {
          const selected = selectedDeck.some(c => c.id === card.id);
          return (
            <TouchableOpacity
              key={card.id}
              style={[styles.card, selected && styles.cardSelected]}
              onPress={() => toggleCard(card)}
            >
              <Image
                 source={card.image}
                 style={[
                 styles.cardImage,           // estilo base
                selected && { opacity: 0.4 } // estilo condicional
              ]}
            />
              <Text style={styles.cardText}>{card.name}</Text>
              <Text style={styles.cardStats}>
                ⚔ {card.attack} | 🛡 {card.defense} | 🔮 {card.mana}
              </Text>
              {card.ability && (
                <Text style={styles.cardAbility}>{card.ability.description}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Cartas selecionadas */}
      <View style={styles.deckContainer}>
        <Text style={styles.deckTitle}>Cartas Selecionadas: {selectedDeck.length}/20</Text>
        {selectedDeck.map(card => (
          <View key={card.id} style={styles.deckCardRow}>
            <Text style={styles.deckCardText}>{card.name}</Text>
          </View>
        ))}
      </View>

      {/* Botão para salvar */}
      <TouchableOpacity style={styles.saveButton} onPress={saveDeck}>
        <Text style={styles.saveButtonText}>Salvar Deck</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
