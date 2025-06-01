import {Text  , TouchableOpacity,  TouchableOpacityProps} from "react-native"
import {styles} from "./styles"
import { Image, View } from "react-native";

export default function Battle() {
    return (
        <View style={styles.card}>
            <Image
                source={require("../../assets/images/card.png")}
                style={styles.card}
                resizeMode="contain"
            />
        </View>
    );
}