import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { Card } from "react-native-elements";
import { Avatar } from "react-native-paper";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { Button, ButtonGroup, withTheme } from "@rneui/themed";
//deleteprofil
import { API_URL } from "../../utils/config";
import FadeIn from "../../screens/day001/components/FadeIn";
import Icon from "react-native-vector-icons/FontAwesome";
import Header from "./DrawerHeader";
import Animated, { FadeInRight, FadeInLeft } from "react-native-reanimated";
import { FadeInDown } from "react-native-reanimated";
import moment from "moment";

export default function DrawerReservation({ route }) {
  reservations = route.params?.reservations;

  const cancelReservation = async (id) => {
    try {
      const response = await axios.put(
        `${API_URL}/canceleReservation?id=${id}`
      );
      if (response) {
        alert("Reservation annulée");
        //handleSendNotification2(response.data.user);
        // getRestoProfile(idR);
      }
    } catch (error) {
      throw error;
    }
  };

  const getStatusTranslation = (status) => {
    switch (status) {
      case "pending":
        return { text: "En cours", color: "orange" };
      case "accepted":
        return { text: "Accepté", color: "green" };
      case "rejected":
        return { text: "Rejeté", color: "red" };
      case "canceled":
        return { text: "Annulé", color: "red" };
      default:
        return { text: "", color: "black" };
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header title="Mes Reservations" />
      {reservations?.length > 0 ? (
        <View>
          <FlatList
            data={reservations}
            style={{ marginBottom: 120 }}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              const reservationDate = new Date(item.date);
              const formattedDate = reservationDate.toLocaleDateString();
              const statusTranslation = getStatusTranslation(item?.state);

              return (
                <View
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    padding: 10,
                    margin: 10,
                    marginBottom: 10,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.22,
                    shadowRadius: 2.22,
                    elevation: 3,
                  }}
                >
                  <View style={styles.container}>
                    <Avatar.Image
                      size={40}
                      source={{
                        uri: `${API_URL}/${item?.Resto?.avatar}`,
                      }}
                    />
                    <Text style={styles.restaurantName}>
                      {item?.Resto?.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 12,
                      paddingHorizontal: 16,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 5,
                      }}
                    >
                      faite le: {moment(item?.datepost).format("YYYY-MM-DD")} à
                      {"  "}
                      {moment(item?.datepost).format("h:mm a")}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 5,
                      }}
                    >
                      Date Reservation: {formattedDate}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 5,
                      }}
                    >
                      Heure Reservation: {item?.time}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        marginBottom: 5,
                      }}
                    >
                      Nombres de places: {item?.guests}
                    </Text>

                    <Text
                      style={{
                        color: statusTranslation.color,
                        fontWeight: "bold",
                      }}
                    >
                      Status: {statusTranslation.text}
                    </Text>
                  </View>
                  {/* Cancel Button */}
                  {item?.state === "pending" && (
                    <TouchableOpacity
                      style={{
                        backgroundColor: "black",
                        padding: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 5,
                        marginTop: 10,
                      }}
                      onPress={() => cancelReservation(item._id)}
                    >
                      <Text style={{ color: "white" }}>
                        Annuler la réservation
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
        </View>
      ) : (
        // Render alternative content if reservations is empty
        <Text>Aucune réservation à afficher</Text>
      )}
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  restaurantName: {
    marginLeft: 8,
    fontSize: 16,
  },
};
