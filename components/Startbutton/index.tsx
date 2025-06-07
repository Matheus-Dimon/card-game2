import {Text  , TouchableOpacity,  TouchableOpacityProps} from "react-native"
import {styles} from "./styles"

type Props  =   TouchableOpacityProps & {
    title  : string
}

export default function Startbutton ( {title, ...rest}: Props) {
    return (
        <TouchableOpacity {...rest} 
                           activeOpacity={0.3} 
                           style={styles.Startbutton}>
        <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}
