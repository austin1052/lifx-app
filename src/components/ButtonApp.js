import { View, Text, Button } from "react-native";
import { updateLight } from "../api";

const colors = { r: 50, g: 152, b: 30 };
const id = "d073d56f6851";

const ButtonApp = () => {
  const handlePress = () => {
    updateLight(id, colors);
  };
  return (
    <View>
      <Button onPress={handlePress} title="Change Light" />
    </View>
  );
};

export default ButtonApp;
