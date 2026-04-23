import { useState } from "react";
import {
    Alert,
    Image,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function SandboxScreen() {
  const [inputText, setInputText] = useState("");

  const handlePress = () => {
    Alert.alert("Результат", `Ви ввели: ${inputText}`);
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={globalStyles.container}>
        <Text style={globalStyles.titleText}>Пісочниця</Text>

        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={[
            globalStyles.image,
            { height: 100, width: 100, alignSelf: "center" },
          ]}
          resizeMode="contain"
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Напишіть щось тут..."
          value={inputText}
          onChangeText={setInputText}
        />

        <Pressable style={globalStyles.button} onPress={handlePress}>
          <Text style={globalStyles.buttonText}>Перевірити</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
