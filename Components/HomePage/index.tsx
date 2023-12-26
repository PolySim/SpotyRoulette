import { Text } from "react-native";
import { globalStyle } from "../../GlobalStyle/style";
import { LinearGradient } from "expo-linear-gradient";

const HomePage = () => {
  return (
    <LinearGradient
      colors={["#1DB954", "#191414"]}
      style={globalStyle.container}
    >
      <Text style={globalStyle.h1}>Spoty Roulette</Text>
    </LinearGradient>
  );
};

export default HomePage;
