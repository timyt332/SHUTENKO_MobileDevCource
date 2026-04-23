import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { UserService } from "../api/services/UserService";
// Припускаємо, що globalStyles існує
import { globalStyles } from "../app/styles/global";

interface UserProfileProps {
  userId: number;
}

export const UserProfile: React.FC<UserProfileProps> = ({ userId }) => {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const formattedName = await UserService.getFormattedUserName(userId);
        setUserName(formattedName);
      } catch (error) {
        console.error("Помилка при завантаженні імені користувача:", error);
        setUserName("Помилка завантаження");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={[globalStyles.card, styles.card]}>
      <Text style={globalStyles.text}>Привіт, {userName}!</Text>
      <Text style={globalStyles.text}>Ваш ID: {userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  card: {
    padding: 20,
    margin: 20,
  },
});
