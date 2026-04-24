import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { Header } from "../../components/Header";
import { useUser } from "../../contexts/UserContext";
import { formStyles } from "../../styles/formStyle";

interface FormData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  city: string;
}

export default function RequestScreen() {
  const { updateUser } = useUser();
  const [form, setForm] = useState<FormData>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
  });

  const submit = async () => {
    if (!form.name || !form.email || !form.phone) {
      Alert.alert("Помилка", "Заповніть Ім'я, Email, Телефон");
      return;
    }

    // Зберігаємо в AsyncStorage через Context
    await updateUser(form);

    Alert.alert(
      "✅ Успіх",
      `Заявку від ${form.name} ${form.surname} відправлено!\n📧 ${form.email}\n📱 ${form.phone}\n🏙️ ${form.city}\n\nДані збережено в профіль`,
    );

    // Очищуємо форму (дані лишаються в профілі)
    setForm({ name: "", surname: "", email: "", phone: "", city: "" });
  };

  return (
    <View style={formStyles.container}>
      <Header title="Заявка на Тур" />
      <TextInput
        style={formStyles.input}
        placeholder="Ім'я *"
        value={form.name}
        onChangeText={(txt) => setForm({ ...form, name: txt })}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Прізвище"
        value={form.surname}
        onChangeText={(txt) => setForm({ ...form, surname: txt })}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Email *"
        keyboardType="email-address"
        autoCapitalize="none"
        value={form.email}
        onChangeText={(txt) => setForm({ ...form, email: txt })}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Телефон *"
        keyboardType="phone-pad"
        value={form.phone}
        onChangeText={(txt) => setForm({ ...form, phone: txt })}
      />
      <TextInput
        style={formStyles.input}
        placeholder="Місто"
        value={form.city}
        onChangeText={(txt) => setForm({ ...form, city: txt })}
      />
      <TouchableOpacity style={formStyles.button} onPress={submit}>
        Відправити та зберегти
      </TouchableOpacity>
    </View>
  );
}
