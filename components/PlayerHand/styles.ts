import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
  handHow: {
    flexDirection: "row", // Alinha os cards em linha
    justifyContent: "center", // Centraliza os cards horizontalmente
    alignItems: "center", // Alinha os cards verticalmente
    flexWrap: "wrap", // Permite que os cards se movam para a próxima linha se não houver espaço suficiente
    padding: 10, // Espaçamento interno ao redor dos cards
  },
    card: {
        width: 60, // Largura do card
        height: 90, // Altura do card
        backgroundColor: "#fff", // Cor de fundo do card
        borderRadius: 8, // Bordas arredondadas
        padding: 5, // Espaçamento interno
        margin: 5, // Margem externa
        alignItems: "center", // Alinha os itens no centro horizontalmente
        justifyContent: "center", // Alinha os itens no centro verticalmente
    },
    cardImage: {
        width: 60, // Largura da imagem do card
        height: 90, // Altura da imagem do card
        borderRadius: 8, // Bordas arredondadas na imagem
    },
    cardHand: {
        
  }  }) 