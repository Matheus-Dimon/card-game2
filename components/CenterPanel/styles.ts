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
  paddingTop: 10, // Espaçamento superior
  paddingBottom: 5, // Espaçamento inferior
  },
  // Estilos para a área do tabuleiro do jogo
  gameBoard: {
  flex: 1, // Ocupa todo o espaço disponível
  flexDirection: 'row', // Disposição dos elementos em linha
  },
  // Estilos para a área de cada jogador
  playerArea: {
  flex: 1, // Ocupa todo o espaço disponível
  padding: 1, // Espaçamento interno
  },
  // Estilos para a linha da mão de cartas
  handRow: {
  minHeight: CARD_HEIGHT + 10, // Altura mínima da linha
  marginVertical: 2, // Margem vertical
  },
  // Estilos para o card na mão do jogador
  cardHand: {
  marginHorizontal: 2, // Margem horizontal
  backgroundColor: '#fff', // Cor de fundo
  borderRadius: 8, // Borda arredondada
  borderWidth: 1, // Largura da borda
  borderColor: '#bbb', // Cor da borda
  width: CARD_WIDTH, // Largura do card
  height: CARD_HEIGHT + 20, // Altura do card
  justifyContent: 'flex-start', // Alinhamento vertical do conteúdo
  alignItems: 'center', // Alinhamento horizontal do conteúdo
  paddingBottom: 2, // Espaçamento inferior
  paddingTop: 0, // Espaçamento superior
  },
  // Estilos para a imagem do card
  cardImage: {
  width: CARD_WIDTH, // Largura da imagem
  height: CARD_HEIGHT, // Altura da imagem
  borderRadius: 8, // Borda arredondada
  },
  // Estilos para o título do card
  cardTitle: {
  fontWeight: 'bold', // Texto em negrito
  fontSize: 10, // Tamanho da fonte
  marginTop: 2, // Margem superior
  marginBottom: 0, // Margem inferior
  color: '#222', // Cor do texto
  textAlign: 'center', // Alinhamento do texto
  width: CARD_WIDTH - 4, // Largura do título
  },
  // Estilos para as estatísticas do card
  cardStats: {
  fontSize: 9, // Tamanho da fonte
  color: '#444', // Cor do texto
  textAlign: 'center', // Alinhamento do texto
  width: CARD_WIDTH - 2, // Largura das estatísticas
  },
  // Estilos para a linha do campo de jogo
  fieldRow: {
  flexDirection: 'row', // Disposição dos elementos em linha
  minWidth: 50, // Largura mínima da linha
  flexWrap: 'wrap', // Quebra de linha automática
  justifyContent: 'center', // Alinhamento horizontal do conteúdo
  },
  // Estilos para o card no campo de jogo
  cardField: {
  width: CARD_WIDTH, // Largura do card
  height: CARD_HEIGHT + 20, // Altura do card
  backgroundColor: '#e0e0e0', // Cor de fundo
  borderColor: '#888', // Cor da borda
  borderWidth: 1, // Largura da borda
  borderRadius: 8, // Borda arredondada
  marginHorizontal: 2, // Margem horizontal
  justifyContent: 'space-between', // Alinhamento vertical do conteúdo
  alignItems: 'center', // Alinhamento horizontal do conteúdo
  paddingBottom: 2, // Espaçamento inferior
  paddingTop: 0, // Espaçamento superior
  },
  // Estilos para o painel central
  centerPanel: {
  width: 150, // Largura do painel
  padding: 5, // Espaçamento interno
  alignItems: 'center', // Alinhamento horizontal do conteúdo
  },
  // Estilos para o texto central
  centerText: {
  color: '#fff', // Cor do texto
  fontWeight: 'bold', // Texto em negrito
  fontSize: 16, // Tamanho da fonte
  },
  // Estilos para o título
  title: {
  fontSize: 16, // Tamanho da fonte
  fontWeight: 'bold', // Texto em negrito
  color: '#ffd700', // Cor do texto
  marginBottom: 4, // Margem inferior
  textAlign: 'center', // Alinhamento do texto
  },
  // Estilos para a seção
  section: {
  marginTop: 8, // Margem superior
  fontWeight: 'bold', // Texto em negrito
  color: '#fff', // Cor do texto
  },
  Buttons :{
    marginTop: 10, // Margem superior para os botões
    flexDirection: 'row', //
  }
});