import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { UserProfile } from "../../customComponents/UserProfile";
import { globalStyles } from "../styles/global";

export default function NetworkScreen() {
  const [currentUserId, setCurrentUserId] = useState<number>(1);

  // Генерація випадкового ID від 1 до 9 при кожному завантаженні сторінки
  useEffect(() => {
    generateRandomId();
  }, []);

  const generateRandomId = () => {
    const randomId = Math.floor(Math.random() * 9) + 1;
    setCurrentUserId(randomId);
  };

  const refreshUser = () => {
    generateRandomId();
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.card}>Тестування Network Layer</Text>

      <TouchableOpacity style={globalStyles.button} onPress={refreshUser}>
        <Text style={globalStyles.buttonText}>Новий користувач</Text>
      </TouchableOpacity>

      <UserProfile userId={currentUserId} />
    </SafeAreaView>
  );
}
