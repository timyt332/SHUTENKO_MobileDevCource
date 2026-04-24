import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Головна" }} />
      <Tabs.Screen name="request" options={{ title: "Заявки" }} />
      <Tabs.Screen name="about" options={{ title: "Про нас" }} />
      <Tabs.Screen name="profile" options={{ title: "Профіль" }} />
    </Tabs>
  );
}
