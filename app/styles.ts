import { Dimensions, StyleSheet } from 'react-native';

// Estilos do componente
const { width, height } = Dimensions.get('window');
const CARD_WIDTH = 80;
const CARD_HEIGHT =90;
     
export  const  styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    paddingTop: 10,
    paddingBottom: 5,
  },
  gameBoard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'gray',
  },
  playerArea: {
    flex: 1,
    padding: 5,
  },
  handRow: {
    minHeight: CARD_HEIGHT + 10,
    marginVertical: 2,
    backgroundColor: 'gray',
    maxHeight: 90,
  },
  cardHand: {
    backgroundColor: '#fff',  
    borderColor: '#bbb',
    width: CARD_WIDTH-25,
    height: CARD_HEIGHT-20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 2,
    paddingTop: 0,
  },
  cardImage: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 10,
    marginTop: 2,
    marginBottom: 0,
    color: '#222',
    textAlign: 'center',
    width: CARD_WIDTH - 1,
  },
  cardStats: {
    fontSize: 9,
    color: '#444',
    textAlign: 'center',
    width: CARD_WIDTH - 4,
  },
  fieldRow: {
    flexDirection: 'row',
    minWidth: 2,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardField: {
    width: CARD_WIDTH - 1,
    height: CARD_HEIGHT - 1,
    backgroundColor: '#e0e0e0',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 1,
    marginHorizontal: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerPanel: {
    width: 50,
    padding: 5,
    alignItems: 'center',
  },
  centerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 4,
    textAlign: 'center',
  },
  section: {
    marginTop: 1,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 5,
},
});