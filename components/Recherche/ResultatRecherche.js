import React, { useState, useEffect, useContext } from "react";
import { Pressable, Dimensions } from "react-native";
import { API_URL } from "../../utils/config";
import axios from "axios";
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function ResultatRecherche({ Data }) {
  return (
    <ScrollView style={{ height: 250 }}>
      <TouchableOpacity style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/01.jpg")} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>kkkkkkkkkkkkkkkk</Text>
          <Text style={styles.subtitle}>kkkkkkkkkkkkkkkk</Text>
          <Text style={styles.subtitle}>kkkkkkkkkkkkkkkkkkk</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: windowWidth - 10,
    borderRadius: 10,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 5,
  },
  imageContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontWeight: "800",
    fontSize: 18,
    color: "#131313",
  },
  subtitle: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#131313",
  },
});
