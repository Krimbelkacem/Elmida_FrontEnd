import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { API_URL } from "../utils/config";
import Animated, { FadeInDown } from "react-native-reanimated";

const Message = ({ route, navigation }) => {
  const [content, setContent] = useState("");
  const idU = route.params.idU;
  const userData = route.params.userData;
  const handleSendMessage = async () => {
    if (!content || !idU) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      const sender = idU; // Replace with the actual sender ID
      const message = content;
      // Send the message to the server
      await axios.post(`${API_URL}/addmessage?idU=${sender}`, message);

      // Reset the content field
      setContent("");

      // Display a success message or navigate to a different screen
      // based on your application logic
      console.log("Message sent successfully");
    } catch (error) {
      console.error("Failed to send message:", error);
      // Handle error
    }
  };

  return (
    <Animated.View
      style={{ flex: 1, margin: 20, marginVertical: 100 }}
      entering={FadeInDown.delay(300).duration(300)}
    >
      <View style={[styles.inputContainer, { marginBottom: 20 }]}>
        <Text style={styles.label}>Pseudo</Text>
        <TextInput
          style={[styles.input, styles.blackText]}
          placeholder={userData?.email}
          value={userData?.username}
        />
      </View>

      <View style={[styles.inputContainer, { marginBottom: 20 }]}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={[styles.input, styles.blackText]}
          placeholder={userData?.email}
          value={userData?.email}
        />
      </View>

      <View style={[styles.inputContainer, { marginBottom: 20 }]}>
        <Text style={styles.label}>Sujet</Text>
        <TextInput
          style={[styles.input, styles.blackText]}
          placeholder="Sujet"
        />
      </View>

      <View style={[styles.inputContainer, { marginBottom: 20 }]}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.input, styles.multilineInput, styles.blackText]}
          placeholder="Ecrire un message"
          value={content}
          onChangeText={(content) => setContent(content)}
          multiline={true}
        />
      </View>

      <View style={{ flex: 1 }} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setIsLoading(true);
        }}
      >
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingVertical: 5,
    marginBottom: 10,
  },
  label: {
    fontFamily: "Poppins-Bold",
    fontSize: 10,
    color: "black",
  },
  input: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "black",
  },
  multilineInput: {
    height: 100,
  },
  button: {
    padding: 5,
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Poppins-Medium",
    fontSize: 18,
    color: "white",
  },
  blackText: {
    color: "black",
  },
});

export default Message;
