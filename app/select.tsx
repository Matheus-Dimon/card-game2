import { CardType } from '@/components/Card';
import DeckBuilderScreen from '@/components/DeckBuilderScreen';
import Startbutton from '@/components/Startbutton';
import { useRouter } from 'expo-router';
import { ImageBackground, View } from 'react-native';
import { styleselect } from './styleselect';

export default function Index() {
  const router = useRouter();

  function handleNext() {
    router.navigate("/gameboard");
  }

  function handleSave(deck: CardType[]) {
    console.log("Deck salvo:", deck);
    handleNext();
  }

  return (
    <View style={styleselect.container}>
      {/* Renderiza o construtor de deck com as cartas */}
      <DeckBuilderScreen onSave={handleSave} />

      {/* Imagem de fundo e botão de início */}
      <ImageBackground
        source={require("../assets/images/masmorra.png")}
        style={styleselect.background}
      >
        <Startbutton title="Iniciar Jogo" onPress={handleNext} />
      </ImageBackground>
    </View>
  );
}
