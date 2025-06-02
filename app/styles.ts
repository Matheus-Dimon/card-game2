import { StyleSheet, Dimensions } from 'react-native';

// Obtenção das dimensões da tela do dispositivo
const { width, height } = Dimensions.get('window');
// Definição das dimensões dos cards
const CARD_WIDTH = 60;
const CARD_HEIGHT = 90;
   
export const styles = StyleSheet.create({
  // Estilos para o container principal da tela
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#2e2e2e', // Cor de fundo
  }
});
 