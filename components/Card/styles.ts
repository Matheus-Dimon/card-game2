import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 1,
    padding: 1,
    margin: 1,
    width: 1,
    alignItems: 'center', // Garante que a imagem e textos fiquem centralizados
  },
  image: {
    width: 1,
    height: 1,
    borderRadius: 1,
    marginBottom: 1,
    backgroundColor: '#ccc', // Ajuda a visualizar o espaço da imagem caso não carregue
  },
  disabled: {
    opacity: 0.5,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
  }
});