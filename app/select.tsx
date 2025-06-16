import { Card, CardType } from '@/components/Card';
import { AllCards } from '@/components/DataCards';
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

  // ✅ Este return deve estar DENTRO da função Index
  return (
    <View style={styleselect.container}>
      <AllCards>
        {AllCards.map(card => (
          <Card key={card.id} card={card} onPress={() => toggleCard(card)} />
        ))}
      </AllCards>
      <DeckBuilderScreen onSave={handleSave} />
      <ImageBackground
        source={require("../assets/images/masmorra.png")}
        style={styleselect.background}
      >
        <Startbutton title="Iniciar Jogo" onPress={handleNext} />
      </ImageBackground>
    </View>
  );
}
