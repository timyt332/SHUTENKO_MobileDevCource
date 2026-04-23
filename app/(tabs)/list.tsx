import { FlatList, Image, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { listStyles } from "../styles/lists";

interface LicenseItem {
  id: string;
  name: string;
  expires: string;
  image: string;
}

const LICENSES_DATA: LicenseItem[] = [
  {
    id: "1",
    name: "MS Office Pro",
    expires: "2027-06-30",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "2",
    name: "Adobe Photoshop",
    expires: "2026-12-15",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "3",
    name: "Windows 11 Enterprise",
    expires: "2028-03-20",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "4",
    name: "Visual Studio",
    expires: "2027-09-10",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "5",
    name: "JetBrains All",
    expires: "2026-11-05",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "6",
    name: "AutoCAD",
    expires: "2027-01-18",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "7",
    name: "1C Enterprise",
    expires: "2028-05-22",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "8",
    name: "Kaspersky Endpoint",
    expires: "2026-07-14",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "9",
    name: "SQL Server",
    expires: "2027-04-30",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
  {
    id: "10",
    name: "VMware Workstation",
    expires: "2026-10-25",
    image: "https://reactnative.dev/img/tiny_logo.png",
  },
];

const renderItem = ({ item }: { item: LicenseItem }) => (
  <View style={[listStyles.card, listStyles.row]}>
    <Image source={{ uri: item.image }} style={listStyles.smallAvatar} />
    <View>
      <Text style={listStyles.cardTitle}>{item.name}</Text>
      <Text style={listStyles.cardSubtitle}>Термін: {item.expires}</Text>
    </View>
  </View>
);

const ListHeader = () => (
  <Text
    style={[globalStyles.titleText, { textAlign: "center", marginBottom: 20 }]}
  >
    Шутенко: Облік ліцензій ПЗ
  </Text>
);

const ListEmpty = () => (
  <Text
    style={{ textAlign: "center", fontSize: 16, color: "#666", padding: 50 }}
  >
    Список порожній
  </Text>
);

export default function List() {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={LICENSES_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={listStyles.listContainer}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListHeaderComponent={ListHeader}
        ListEmptyComponent={ListEmpty}
      />
    </View>
  );
}
