import { CardType } from "@/components/Card";

export const AllCards: CardType[] = [
  { id: 1, name: 'Archer', attack: 3, defense: 2, mana: 2, image: require('../../assets/images/archer.png'), type: 'archer' },
  { id: 2, name: 'Warrior', attack: 4, defense: 3, mana: 3, image: require('../../assets/images/warrior.png'), type: 'warrior' },
  { id: 3, name: 'Mage', attack: 2, defense: 4, mana: 2, image: require('../../assets/images/mage.png'), type: 'mage' },
  // ... mais cartas
];
