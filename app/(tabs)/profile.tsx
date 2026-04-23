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

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSave = () => {
    Alert.alert("Інформація", `Користувач: ${name}\nПрізвище: ${lastName}`);
  };

  const handleClear = () => {
    setName("");
    setLastName("");
  };

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={globalStyles.container}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={globalStyles.avatar}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Ім'я"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Прізвище"
          value={lastName}
          onChangeText={setLastName}
        />

        <View style={globalStyles.rowContainer}>
          <Pressable
            style={[globalStyles.button, globalStyles.primaryButton]}
            onPress={handleSave}
          >
            <Text style={globalStyles.buttonText}>Зберегти</Text>
          </Pressable>

          <Pressable
            style={[globalStyles.button, globalStyles.redBtn]}
            onPress={handleClear}
          >
            <Text style={globalStyles.buttonText}>Очистити</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
