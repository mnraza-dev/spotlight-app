const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 64,
      color: "red",
      fontWeight: "thin",
    },
    button: {
      backgroundColor: "blue",
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 15,
      marginTop: 20,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
