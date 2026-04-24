import { Dimensions, StyleSheet } from "react-native";
const { height } = Dimensions.get("window");

export const homeStyles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
    paddingBottom: 20,
  },
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
  cardImage: {
    borderRadius: 12,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    padding: 20,
  },
  cardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardPrice: {
    color: "#FFD700",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cardDesc: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 14,
  },
});
