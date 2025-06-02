import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    width: 60, // Largura do card
    height: 90, // Altura do card
    backgroundColor: '#fff', // Cor de fundo do card
    borderRadius: 8, // Bordas arredondadas
    padding: 5, // Espaçamento interno
    margin: 5, // Margem externa
    alignItems: 'center', // Alinha os itens no centro horizontalmente
    justifyContent: 'center', // Alinha os itens no centro verticalmente
  },
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    backgroundColor: '#2e2e2e', // Cor de fundo
    justifyContent: 'center', //
  },
  image: {
    width: 60,
    height: 90, // Altura do card
    borderRadius: 8,
  },
  name: {
    color: '#000', // Cor do texto  
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    marginTop: 5, // Espaçamento acima do texto
  }});
