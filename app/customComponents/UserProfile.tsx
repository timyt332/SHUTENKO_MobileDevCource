import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { UserService } from "../api/services/UserService";
import { globalStyles } from "../styles/global";

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
        console.error("Помилка при завантаженні:", error);
        setUserName("Помилка завантаження");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return (
      <ActivityIndicator size="small" color="#007AFF" style={{ margin: 20 }} />
    );
  }

  return (
    <View style={[globalStyles.card, { padding: 20 }]}>
      <Text style={globalStyles.titleText}>Привіт, {userName}!</Text>
      <Text style={globalStyles.text}>Ваш ID: {userId}</Text>
    </View>
  );
};
