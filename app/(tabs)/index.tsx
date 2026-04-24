import {
  Dimensions,
  FlatList,
  ImageBackground,
  ListRenderItem,
  Text,
  View,
} from "react-native";
import { Header } from "../../components/Header";
import { homeStyles } from "../../styles/homeStyle";

const { height } = Dimensions.get("window");

interface ListItem {
  id: string;
  title: string;
  image: string;
}

const universalData: ListItem[] = [
  {
    id: "1",
    title: "Київ: Золоті Куполи",
    image: "https://apostrophe.ua/img/article/3076/14_main-v1762250659.jpg",
  },
  {
    id: "2",
    title: "Карпати: Гірські Стежки",
    image:
      "https://shambala.com.ua/content/uploads/images/blog/raionuvannia-ukrainskykh-karpat/2.jpg",
  },
  {
    id: "3",
    title: "Одеса: Чорноморське Узбережжя",
    image: "https://cdn4.suspilne.media/images/5295b7cfa23a909e.png",
  },
  {
    id: "4",
    title: "Львів: Історичний Центр",
    image: "https://7chudes.in.ua/wp-content/uploads/2015/12/lviv1.jpg",
  },
  {
    id: "5",
    title: "Закарпаття: Термальні Джерела",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjOP-CZ0w6vczAUoXWYwyFFkQ6iLqp4fEMA&s",
  },
];

export default function HomeScreen() {
  const renderItem: ListRenderItem<ListItem> = ({ item }) => (
    <ImageBackground
      source={{ uri: item.image }}
      style={[homeStyles.card, { height: height * 0.25 }]}
      imageStyle={homeStyles.cardImage}
    >
      <View style={homeStyles.overlay}>
        <Text style={homeStyles.cardTitle}>{item.title}</Text>
      </View>
    </ImageBackground>
  );

  return (
    <View style={homeStyles.wrapper}>
      <Header title="Туристичні подорожі" />
      <FlatList
        data={universalData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={homeStyles.listContainer}
      />
    </View>
  );
}
