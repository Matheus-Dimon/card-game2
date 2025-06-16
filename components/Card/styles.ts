import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
<<<<<<< HEAD
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
=======
    borderRadius: 8,
    padding: 10,
    margin: 5,
    width: 130,
    alignItems: 'center', // Garante que a imagem e textos fiquem centralizados
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
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