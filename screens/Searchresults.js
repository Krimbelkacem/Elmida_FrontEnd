import React, { useState } from "react";
import axios from "axios";

import {
  EvilIcons,
  Feather,
  FontAwesome5,
  AntDesign,
} from "react-native-vector-icons";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import { API_URL } from "../utils/config";
const Searchkey = ({ navigation }) => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  containerFlate: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "lightblue",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  buttonStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: "100%",
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
  },

  card: {
    flex: 1,

    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: 350,
    height: 200,
    borderRadius: 10,
    margin: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: "white",
    marginRight: 100,
  },
  input: {
    flex: 1,
    height: 50,

    paddingLeft: 10,

    backgroundColor: "white",
  },
  icon: {
    marginRight: 10,
  },
});

export default Searchkey;
