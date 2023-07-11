import { StyleSheet, View } from 'react-native';
import LoginScreenComponent from './src/components/LoginScreenComponent';
import colors from "./src/styles/colors";
import metrics from './src/styles/metrics';

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
    paddingHorizontal: metrics.largestPadding,
    justifyContent: 'center',
  },

});
