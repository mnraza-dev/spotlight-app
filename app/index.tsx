import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/auth.styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <TouchableOpacity style={styles.button} onPress={() => alert("clicked")}>
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>

      <Pressable style={styles.button} onPress={() => alert("clicked")}>
        <Text style={styles.buttonText}>Click me</Text>
      </Pressable>
    </View>
  );
}
