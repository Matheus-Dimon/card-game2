import {Text , View , ImageBackground, StyleSheet, Button} from "react-native"
import { router } from "expo-router"
import Card from "../components/Card"
import Hero from "../components/Hero"


export default function Index() {
    function handleNext() {
        router.navigate("/battle")
    }

    return (
        <View style={styles.container}>
            {/* Make sure the image exists at the specified path or update the path below */}
            <ImageBackground source={require("../assets/images/masmorra.png")}
                             style={styles.background}>
            </ImageBackground>
            <Hero />
            <Card />
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center",
    },
    background: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 40,
    },
});