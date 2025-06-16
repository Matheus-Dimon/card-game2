import { CardType } from "@/components/Card";

export const AllCards: CardType[] = [
  {
    id: 1,
    name: 'Archer',
    type: 'archer',
    attack: 3,
    defense: 2,
    mana: 2,
    image: require('../../assets/images/archer.png'),
    ability: {
      name: 'Flecha Precisa',
      description: 'Causa 1 de dano extra',
      effect: 'extraDamage',
      value: 1,
    },
  },
  {
    id: 2,
    name: 'Warrior',
    type: 'warrior',
    attack: 4,
    defense: 3,
    mana: 3,
    image: require('../../assets/images/warrior.png'),
    ability: {
      name: 'Resistência',
      description: 'Nega 1 de dano na próxima rodada',
      effect: 'damageNegation',
      value: 1,
      duration: 1,
    },
  },
  {
    id: 3,
    name: 'Mage',
    type: 'mage',
    attack: 2,
    defense: 4,
    mana: 2,
    image: require('../../assets/images/mage.png'),
    ability: {
      name: 'Cura Mística',
      description: 'Cura 1 de vida',
      effect: 'heal',
      value: 1,
    },
  },
];

// Agora, fora do array AllCards, crie o array estendido:

const ExtendedCards: CardType[] = Array.from({ length: 20 }, (_, i) => {
  const original = AllCards[i % AllCards.length]; // repete as cartas do AllCards
  return {
    ...original,
    id: i + 1, // garante id único para cada carta no ExtendedCards
  };
});

export default ExtendedCards;
