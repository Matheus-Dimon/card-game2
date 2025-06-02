import { StyleSheet, Dimensions } from 'react-native';

// Obtenção das dimensões da tela do dispositivo
const { width, height } = Dimensions.get('window');
// Definição das dimensões dos cards
const CARD_WIDTH = 60;
const CARD_HEIGHT = 90;
   
export  const  styles =  StyleSheet.create({
  // Estilos para o container principal da tela
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#2e2e2e', // Cor de fundo
  },
  // Estilos para o painel central onde os cards são exibidos
  centerPanel: {
    flex: 1, // Ocupa todo o espaço disponível
    justifyContent: 'center', // Centraliza os itens verticalmente
    alignItems: 'center', // Centraliza os itens horizontalmente
  },
  // Estilos para a lista de cards
  cardList: {
    width: width * 0.8, // Largura da lista de cards é 80% da largura da tela
    height: height * 0.6, // Altura da lista de cards é 60% da altura da tela
    backgroundColor: '#3e3e3e', // Cor de fundo da lista de cards
    borderRadius: 10, // Bordas arredondadas
    padding: 10, // Espaçamento interno
  },
});