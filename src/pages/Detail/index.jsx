import { View, Text, Pressable, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import Card from "../../components/Card";

function Detail() {
  const route = useRoute();
  const userData = route.params.userData;

  return (
    <LinearGradient
      colors={["#111017", "#090320"]}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View>
        <Card data={userData} />
      </View>
    </LinearGradient>
  );
}

export default Detail;
