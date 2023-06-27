import React, { useState, useEffect } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { Card, Avatar } from "react-native-paper";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import axios from "axios";
import { API_URL } from "../utils/config";
import {
  SimpleLineIcons,
  EvilIcons,
  AntDesign,
  Octicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Feather,
  Ionicons,
} from "react-native-vector-icons";

const { width } = Dimensions.get("window");

export default function MyMap({ navigation }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [restos, setRestos] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    fetchRestos();
  }, [navigation]);

  const fetchRestos = async () => {
    try {
      const response = await axios.get(`${API_URL}/admin_resto`);

      setRestos(response.data);

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 36.69620746716127, // Use the restaurant's latitude
          longitude: 4.055869169533253, // Use the restaurant's longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {restos?.map((restaurant, idx) => (
          <Marker
            key={restaurant._id}
            coordinate={{
              latitude: restaurant.latitude ?? 0, // Utilize the latitude of the restaurant
              longitude: restaurant.longitude ?? 0, // Utilize the longitude of the restaurant
            }}
            title={restaurant.name}
            style={styles.marker}
            onPress={() => setIndex(idx)}
          >
            <Ionicons name="ios-restaurant" size={15} color="white" />
          </Marker>
        ))}
      </MapView>

      {index > -1 && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Resto", {
              idR: restos[index]?._id,
            })
          }
          style={{
            backgroundColor: "#FFF",
            borderRadius: 10,
            padding: 12,
            flexDirection: "row",
            position: "absolute",
            bottom: 20,
            width: 300,
            left: width / 2 - 150,
          }}
        >
          <Image
            source={{
              uri: `${API_URL}/${restos[index]?.avatar.replace("public", "")}`,
            }}
            style={{ width: 100, height: 100, borderRadius: 10 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#666666",
                fontSize: 15,
              }}
            >
              {restos[index]?.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginLeft: -2,
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Regular",
                  color: "#666666",
                  fontSize: 10,
                  textAlign: "left",
                  marginLeft: 2,
                }}
              >
                {restos[index]?.address}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "Poppins-Regular",
                color: "#666666",
                fontSize: 10,
                textAlign: "left",
                maxWidth: 150,
                marginLeft: 2,
              }}
            >
              Prix Moyen : {restos[index]?.price_average} DZD
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    // Custom marker style
    backgroundColor: "black",
    borderRadius: 5,
    padding: 5,
  },
});
