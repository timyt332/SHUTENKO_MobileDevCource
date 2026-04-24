// homeStyle.js
import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#f5f5f5" },
  listContainer: { padding: 16 },
  card: {
    width: "100%",
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: { borderRadius: 12 },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  cardTitle: { color: "white", fontSize: 18, fontWeight: "bold" },
});
