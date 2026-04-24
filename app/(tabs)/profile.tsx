import { Image, Text, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { profileStyles } from "../../styles/profileStyle";

export default function ProfileScreen() {
  return (
    <View style={profileStyles.container}>
      <Header title="Профіль" />
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={profileStyles.avatar}
      />
      <Text style={profileStyles.name}>Іван Іваненко</Text>
      <Text style={profileStyles.email}>ivan@example.com</Text>

      <TouchableOpacity style={profileStyles.btn}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          Змінити особисті дані
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={profileStyles.btn}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "500" }}>
          Підтримка
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
