import React, { useEffect, useState } from "react";
import { SafeAreaView, Text } from "react-native";
import { globalStyles } from "../styles/global";

export default function NetworkScreen() {
  const [currentUserId, setCurrentUserId] = useState(1);

  const generateRandomId = () => {
    const randomId = Math.floor(Math.random() * 9) + 1;
    setCurrentUserId(randomId);
  };

  useEffect(() => {
    generateRandomId();
  }, []);

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Тестування Network Layer</Text>

      <Text>ID: {currentUserId}</Text>
      <Text>
        API: https://jsonplaceholder.typicode.com/users/{currentUserId}
      </Text>
    </SafeAreaView>
  );
}
