import { Dimensions, StyleSheet } from 'react-native';

// Estilos do componente
const { width, height } = Dimensions.get('window');
const CARD_WIDTH = 80;
const CARD_HEIGHT =90;
     
export const styleselect = StyleSheet.create({
    container: {
        flex:  1,
        padding: 32,
        justifyContent: "center" ,
    },
    title:{
        color: "red" ,  
        fontSize: 24 ,
        fontWeight: "bold" ,

        },
    background: {
        flex: 1, 
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
    },   
    });
