import {Text  , TouchableOpacity,  TouchableOpacityProps} from "react-native"
import {styles} from "./styles"
import { Image, View } from "react-native";

export default function Battle() {
    return (
        <View style={styles.hero}>
            <Image
                source={require("../../assets/images/warrior.png")}
                style={styles.hero}
                resizeMode="contain"
            />
        </View>
    );
}