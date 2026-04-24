import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { useUser } from "../../contexts/UserContext";
import { profileStyles } from "../../styles/profileStyle";

export default function ProfileScreen() {
  const { user } = useUser();

  return (
    <View style={profileStyles.container}>
      <Header title="Профіль Туриста" />
      <Image
        source={{ uri: "https://picsum.photos/seed/tourist/150/150" }}
        style={profileStyles.avatar}
      />
      <Text style={profileStyles.name}>
        {user.name} {user.surname || ""}
      </Text>
      <Text style={profileStyles.email}>{user.email || "Не вказано"}</Text>
      <Text style={profileStyles.info}>📱 {user.phone || "Не вказано"}</Text>
      <Text style={profileStyles.info}>🏙️ {user.city || "Не вказано"}</Text>

      <TouchableOpacity style={profileStyles.btn}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          Редагувати дані
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.btn}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          Підтримка турів
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[profileStyles.btn, { backgroundColor: "#FF3B30" }]}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          Вихід з акаунту
        </Text>
      </TouchableOpacity>
    </View>
  );
}
