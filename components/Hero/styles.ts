<<<<<<< HEAD
import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const HERO_HEIGHT = 90; // Use apenas uma vez
=======
import { StyleSheet } from 'react-native';
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
<<<<<<< HEAD
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f4f4f4',
    maxWidth: 70, // ← vírgula adicionada
    maxHeight: 70,
  },
  image: {
    width: 50,
    height: 50,
=======
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f4f4f4'
  },
  image: {
    width: 100,
    height: 100,
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
