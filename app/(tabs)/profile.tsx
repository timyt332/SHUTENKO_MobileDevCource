import { File, Paths } from "expo-file-system/next";
import { useFocusEffect } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, Text, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";

const profileFile = new File(Paths.document, "user_profile.json");

async function loadProfileData(): Promise<{
  name: string;
  lastname: string;
} | null> {
  if (!profileFile.exists) return null;
  try {
    const content = await profileFile.text();
    return JSON.parse(content);
  } catch {
    await profileFile.delete();
    return null;
  }
}

async function saveProfileData(name: string, lastname: string) {
  await profileFile.write(JSON.stringify({ name, lastname }));
}

async function deleteProfileData() {
  if (profileFile.exists) {
    await profileFile.delete();
  }
}

const AnimatedFields = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setIsFocused(true);
      const initInputs = async () => {
        const data = await loadProfileData();
        if (data) {
          setName(data.name || "");
          setLastname(data.lastname || "");
        }
      };
      initInputs();
      return () => setIsFocused(false);
    }, []),
  );

  const handleSave = async () => {
    try {
      await saveProfileData(name, lastname);
      Alert.alert("Успіх", "Профіль збережено!");
    } catch (error) {
      Alert.alert("Помилка", "Не вдалося зберегти дані");
    }
  };

  const handleClear = async () => {
    try {
      await deleteProfileData();
      setName("");
      setLastname("");
      Alert.alert("Успіх", "Дані профілю очищено");
    } catch (error) {
      Alert.alert("Помилка", "Не вдалося очистити дані");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Профіль</Text>
      <TextInput
        style={{ ...globalStyles.input, marginTop: 20 }}
        placeholder="Імʼя"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Прізвище"
        value={lastname}
        onChangeText={setLastname}
      />
      <Button title="Зберегти" onPress={handleSave} />
      <Button title="Очистити" onPress={handleClear} />
    </View>
  );
};

export default AnimatedFields;
