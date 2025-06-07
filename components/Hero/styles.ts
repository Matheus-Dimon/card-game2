import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const HERO_HEIGHT = 90; // Use apenas uma vez

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f4f4f4',
    maxWidth: 70, // ← vírgula adicionada
    maxHeight: 70,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
  },
});
