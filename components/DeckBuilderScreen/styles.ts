import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  cardList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#444',
    borderColor: '#777',
    borderWidth: 2,
    borderRadius: 10,
    margin: 6,
    padding: 4,
    alignItems: 'center',
    width: 90,
  },
  cardSelected: {
    borderColor: '#00ff00',
    backgroundColor: '#333',
  },
  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
  },
  cardText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 4,
    textAlign: 'center',
  },
  cardStats: {
    fontSize: 10,
    color: '#bbb',
    marginTop: 2,
  },
  deckContainer: {
    marginTop: 20,
    backgroundColor: '#222',
    padding: 10,
    borderRadius: 8,
    width: '100%',
  },
  deckTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
  },
  deckCardRow: {
    flexDirection: 'row',
    marginVertical: 2,
    padding: 4,
    backgroundColor: '#333',
    borderRadius: 4,
  },
  deckCardText: {
    color: '#fff',
    fontSize: 12,
  },
  saveButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardAbility: {
    fontSize: 10,
    color: '#ffcc00',
    marginTop: 4,
    textAlign: 'center',
  },
});
