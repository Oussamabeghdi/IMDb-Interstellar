import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import logo from "./assets/logo.jpeg";
import film from "./assets/film.jpg";
export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView
          style={{
            marginTop:
              Platform.OS === "androïd" ? Constants.statusBarHeight : 0,
          }}
        >
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>

          <View style={styles.titleContainer}>
            <Text style={styles.title}> Interstellar</Text>
            <Text style={styles.infosMovie}>
              2014 PG-13 2h49min Adventure, Drama, Sci-Fi
            </Text>
            <View style={styles.movie}>
              <Image source={film} style={styles.imageFilm} />
              <View style={styles.synopsisAndPress}>
                <Text style={styles.synopsis}>
                  A team of explorers travel through a{"\n"}wormhole in space in
                  an attempt to {"\n"}ensure humanity'ssurvival.
                </Text>
                <TouchableOpacity activeOpacity="0.8" style={styles.press}>
                  <Text style={{ color: "white" }}>+ ADD TO WATCHLIST</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.icons}>
              <Ionicons name="star" size={28} color="gold" />
              <Ionicons name="star-outline" size={28} color="white" />
              <Ionicons name="" size={30} color="gold" />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#000000",
  },
  logoContainer: {
    backgroundColor: "#3b3b3b",
    height: 60,
    justifyContent: "center",
  },
  logo: {
    width: 90,
    height: 40,
    marginLeft: 10,
    resizeMode: "contain",
    // borderRadius: 5,
  },

  titleContainer: {
    backgroundColor: "#262626",
    height: 400,
  },
  title: {
    color: "white",
    fontSize: 35,
    margin: (10, 10),
  },
  infosMovie: {
    color: "white",
    marginLeft: 17,
  },
  imageFilm: {
    width: 120,
    height: 160,
  },
  movie: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    marginLeft: 17,
    marginTop: 30,
  },

  synopsis: {
    color: "white",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    lineHeight: 20,
  },
  synopsisAndPress: {
    flexDirection: "column",
    justifyContent: "space-around",
    marginLeft: 15,
  },
  press: {
    backgroundColor: "#3d85c6",
    borderRadius: 2,
    width: 260,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 40,
  },
});
