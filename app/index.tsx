import {Text , View , ImageBackground, StyleSheet, Button} from "react-native"
import { router } from "expo-router"
import Startbutton from "@/components/Startbutton"


export default function Index() {
    function handleNext() {
        router.navigate("/battle")
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("@/assets/masmorra.png")}
                             style={styles.background}>
                <Startbutton title="Iniciar Jogo" onPress={handleNext} />
                <Text style={styles.title}>
                    Bem vindo
                </Text>
                <Button title="continuar" 
                        onPress={handleNext} />
            </ImageBackground>
        </View>
        )
}

const styles = StyleSheet.create({

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
        alignItems: "center"
    },   
    });