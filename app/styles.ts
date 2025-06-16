<<<<<<< HEAD
import { Dimensions, StyleSheet } from 'react-native';

// Estilos do componente
const { width, height } = Dimensions.get('window');
const CARD_WIDTH = 80;
const CARD_HEIGHT =90;
=======
import { StyleSheet, Dimensions } from 'react-native';

// Estilos do componente
const { width, height } = Dimensions.get('window');
const CARD_WIDTH = 60;
const CARD_HEIGHT = 90;
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
     
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
<<<<<<< HEAD
    backgroundColor: 'gray',
=======
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
  },
  playerArea: {
    flex: 1,
    padding: 5,
  },
  handRow: {
    minHeight: CARD_HEIGHT + 10,
    marginVertical: 2,
<<<<<<< HEAD
    backgroundColor: 'gray',
    maxHeight: 90,
  },
  cardHand: {
    backgroundColor: '#fff',  
    borderColor: '#bbb',
    width: CARD_WIDTH-25,
    height: CARD_HEIGHT-20,
=======
  },
  cardHand: {
    marginHorizontal: 2,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bbb',
    width: CARD_WIDTH,
    height: CARD_HEIGHT + 20,
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
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
<<<<<<< HEAD
    width: CARD_WIDTH - 1,
=======
    width: CARD_WIDTH - 4,
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
  },
  cardStats: {
    fontSize: 9,
    color: '#444',
    textAlign: 'center',
    width: CARD_WIDTH - 4,
  },
  fieldRow: {
    flexDirection: 'row',
<<<<<<< HEAD
    minWidth: 2,
=======
    minWidth: 50,
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardField: {
<<<<<<< HEAD
    width: CARD_WIDTH - 1,
    height: CARD_HEIGHT - 1,
    backgroundColor: '#e0e0e0',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 1,
    marginHorizontal: 1,
=======
    width: CARD_WIDTH - 8,
    height: CARD_HEIGHT - 20,
    backgroundColor: '#e0e0e0',
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 2,
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerPanel: {
<<<<<<< HEAD
    width: 50,
=======
    width: 150,
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    padding: 5,
    alignItems: 'center',
  },
  centerText: {
    color: '#fff',
    fontWeight: 'bold',
<<<<<<< HEAD
    fontSize: 10,
=======
    fontSize: 16,
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffd700',
    marginBottom: 4,
    textAlign: 'center',
  },
  section: {
<<<<<<< HEAD
    marginTop: 1,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: 5,
},
=======
    marginTop: 8,
    fontWeight: 'bold',
    color: '#fff',
  },
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
});