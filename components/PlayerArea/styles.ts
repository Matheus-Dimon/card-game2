import { StyleSheet, Dimensions } from 'react-native';
import PlayerArea from '.';

// Obtenção das dimensões da tela do dispositivo
const { width, height } = Dimensions.get('window');
// Definição das dimensões dos cards
const CARD_WIDTH = 60;
const CARD_HEIGHT = 90;
   
export  const  styles =  StyleSheet.create({
  PlayerArea: {
    flex: 1, // Preenche todo o espaço disponível
  },
  handhow : {
    flexDirection: 'row', // Alinha os cards em linha
},
 handRow: {
    flexDirection: 'row', // Alinha os cards em linha
 },
  fieldRow:{
    flexDirection: 'row', // Alinha os cards em linha
  },
cardField:{
    width: CARD_WIDTH, // Largura do card
    height: CARD_HEIGHT, // Altura do card
    backgroundColor: '#fff', // Cor de fundo do card
    borderRadius: 8, // Bordas arredondadas
    padding: 5, // Espaçamento interno
    margin: 5, // Margem externa
    alignItems: 'center', // Alinha os itens no centro horizontalmente
    justifyContent: 'center', // Alinha os itens no centro verticalmente
  },
  cardHand:{
    width: CARD_WIDTH, // Largura do card
    height: CARD_HEIGHT, // Altura do card
    backgroundColor: '#fff', // Cor de fundo do card
    borderRadius: 8, // Bordas arredondadas
    padding: 5, // Espaçamento interno
    margin: 5, // Margem externa
    alignItems: 'center', // Alinha os itens no centro horizontalmente
    justifyContent: 'center', // Alinha os itens no centro verticalmente
  },
  cardImage:{
    width: CARD_WIDTH, // Largura do card
    height: CARD_HEIGHT, // Altura do card
    borderRadius: 8, // Bordas arredondadas
  },
  cardTitle:{
    color: '#000', // Cor do texto  
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    marginTop: 5, // Espaçamento acima do texto
  },
  cardStats:{
    color: '#000', // Cor do texto  
    fontSize: 14, // Tamanho da fonte
    marginTop: 5, // Espaçamento acima do texto
  },
  playerArea:{
    flex: 1, // Preenche todo o espaço disponível
    backgroundColor: '#f0f0f0', // Cor de fundo do container
    padding: 10, // Espaçamento interno do container
  }
  },

);