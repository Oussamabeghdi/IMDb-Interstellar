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
import anne from "./assets/anne.jpg";
import jessica from "./assets/jessica.jpg";
import mackenzie from "./assets/mackenzie.jpg";
import matthew from "./assets/matthew.jpg";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView
          style={{
            marginTop:
              Platform.OS === "android" ? Constants.statusBarHeight : 0,
          }}
        >
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          {/* titre du film */}
          <View style={styles.titleContainer}>
            <Text style={styles.title}> Interstellar</Text>
            <Text style={styles.infosMovie}>
              2014 PG-13 2h49min Adventure, Drama, Sci-Fi
            </Text>
            {/* Pochette du film */}
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
            {/* Icons */}
            <View style={styles.icons}>
              {/* <View style={styles.iconsText}> */}
              <View>
                <Ionicons name="star" size={28} color="gold" />
                <Text style={{ color: "white", textAlign: "center" }}>
                  8.6/10{"\n"}1.1M
                </Text>
              </View>
              <View>
                <Ionicons name="star-outline" size={28} color="white" />
                <Text style={{ color: "white" }}>RATE THIS</Text>
              </View>
              <View>
                <Ionicons name="square" size={30} color="#6ef008" />
                <Text style={{ color: "white" }}>
                  Metascore{"\n"}46 critic reviews
                </Text>
              </View>
              {/* </View> */}
            </View>
          </View>
          <View style={styles.topBilledCast}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={styles.textCast}>Top Billed Cast</Text>
              <Text
                style={{
                  color: "#3d85c6",
                  margin: (20, 20),
                }}
              >
                SEE ALL
              </Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.actors}>
                <View>
                  <Image
                    source={jessica}
                    style={{ width: 120, height: 170 }}
                  ></Image>
                  <Text style={{ color: "white" }}>
                    Jessica Chastain{"\n"} Murph
                  </Text>
                </View>

                <View>
                  <Image
                    source={anne}
                    style={{ width: 120, height: 170 }}
                  ></Image>
                  <Text style={{ color: "white" }}>
                    Anne Hathaway {"\n"} Brand{" "}
                  </Text>
                </View>

                <View>
                  <Image
                    source={mackenzie}
                    style={{ width: 120, height: 170 }}
                  ></Image>
                  <Text style={{ color: "white" }}>
                    Mackenzie Foy {"\n"} Murphy
                  </Text>
                </View>

                <View>
                  <Image
                    source={matthew}
                    style={{ width: 120, height: 170 }}
                  ></Image>
                  <Text style={{ color: "white" }}>
                    Matthew McConaughey{"\n"} Cooper
                  </Text>
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#000000",
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
    height: 380,
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

  // iconsText: {
  //   color: "white",
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  // },
  topBilledCast: {
    marginTop: 20,
    backgroundColor: "#262626",
    height: 380,
  },
  actors: {
    flexDirection: "row",
    margin: (10, 10),
    border: "2",
  },
  textCast: {
    color: "white",
    fontSize: 30,
    margin: (10, 10),
  },
});
