<<<<<<< HEAD
import Startbutton from "@/components/Startbutton"
import { router } from "expo-router"
import { ImageBackground, StyleSheet, View } from "react-native"
=======
import {Text , View , ImageBackground, StyleSheet, Button} from "react-native"
import { router } from "expo-router"
import Startbutton from "@/components/Startbutton"
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162


export default function Index() {
    function handleNext() {
<<<<<<< HEAD
        router.navigate("/select")
=======
        router.navigate("/gameboard")
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
    }

    return (
        <View style={styles.container}>
            {/* Make sure the image exists at the specified path or update the path below */}
            <ImageBackground source={require("../assets/images/masmorra.png")}
                             style={styles.background}>
                <Startbutton title="Iniciar Jogo" onPress={handleNext} />
<<<<<<< HEAD
=======
                
            
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
            </ImageBackground>
        </View>
        )
}

const styles = StyleSheet.create({
<<<<<<< HEAD
=======

>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
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
<<<<<<< HEAD
    });
=======
    });
>>>>>>> 46181a126a910a7dcc38002793928aee2f14d162
