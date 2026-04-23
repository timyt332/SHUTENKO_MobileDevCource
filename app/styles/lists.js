import { StyleSheet } from "react-native";

export const listStyles = StyleSheet.create({
  // Стиль для контейнера списку (FlatList)
  listContainer: {
    paddingBottom: 20, // Відступ знизу, щоб останній елемент не "прилипав" до краю екрана
  },

  // Стиль для картки (одного елемента списку)
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,

    // Тінь для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Тінь для Android
    elevation: 3,
  },

  // Стиль заголовка всередині картки
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },

  // Стиль підзаголовка/статусу
  cardSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },

  // Стиль фото та рядку у елементі списку
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  smallAvatar: {
    width: 70,
    height: 70,
    borderRadius: 50, // Робить круглим
    marginRight: 15,
  },
});
