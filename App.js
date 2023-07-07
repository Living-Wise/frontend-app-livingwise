import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import colors from "./src/styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
