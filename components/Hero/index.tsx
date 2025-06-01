import {Text  , TouchableOpacity,  TouchableOpacityProps} from "react-native"
import {styles} from "./styles"
import { Image, View } from "react-native";

export default function Battle() {
    return (
        <View>
            <Image
                source={require("../../assets/warrior.png")}
                style={styles.warrior}
                resizeMode="contain"
            />
        </View>
    );
}