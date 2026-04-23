import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Головна" }} />
      {/*<Tabs.Screen name="sandbox" options={{ title: "Пісочниця" }} />*/}
      <Tabs.Screen
        name="network"
        options={{
          title: "Мережа",
        }}
      ></Tabs.Screen>
      <Tabs.Screen name="profile" options={{ title: "Профіль" }} />
      <Tabs.Screen name="list" options={{ title: "Список" }} />
    </Tabs>
  );
}
