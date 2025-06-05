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
    flex: 1, // Preenche todo o espaço disponível
    backgroundColor: '#f0f0f0', // Cor de fundo do container
    padding: 10, // Espaçamento interno do container  
  },
  title:{
    fontSize: 24, // Tamanho da fonte do título
    fontWeight: 'bold', // Negrito
    textAlign: 'center', // Centraliza o texto
    marginBottom: 20, // Espaçamento abaixo do título

  }
});