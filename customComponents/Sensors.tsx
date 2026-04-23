import { Accelerometer } from "expo-sensors"; // ✅ Акселерометр замість гіроскопа
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sensors() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [isAvailable, setIsAvailable] = useState(false);

  useEffect(() => {
    let subscription: any;

    Accelerometer.isAvailableAsync().then((available) => {
      console.log("Акселерометр доступний:", available);
      setIsAvailable(available || false);

      if (available) {
        Accelerometer.setUpdateInterval(300);
        subscription = Accelerometer.addListener((sensorData) => {
          setData(sensorData);
        });
      }
    });

    return () => subscription?.remove();
  }, []);

  if (!isAvailable) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Сенсор недоступний</Text>
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <Text style={styles.data}>X: {data.x.toFixed(2)}</Text>
      <Text style={styles.data}>Y: {data.y.toFixed(2)}</Text>
      <Text style={styles.data}>Z: {data.z.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f8ff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#007AFF",
  },
  data: { fontSize: 22, marginVertical: 10, fontWeight: "600" },
  error: { fontSize: 20, color: "red", textAlign: "center" },
  hint: { fontSize: 16, color: "#666", marginTop: 20, textAlign: "center" },
});
