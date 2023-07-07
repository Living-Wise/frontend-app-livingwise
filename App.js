import { StyleSheet, Text, View } from 'react-native';
import LoginScreenComponent from './src/components/LoginScreen/LoginScreenComponent';
import colors from "./src/styles/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreenComponent />
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
