import { ScrollView, StyleSheet, View, StatusBar } from 'react-native';
import LoginScreenComponent from './src/components/LoginScreenComponent';
import colors from "./src/styles/colors";
import metrics from './src/styles/metrics';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.secondary} barStyle='white'/>
      <ScrollView style={styles.scrollContainer}>
        <LoginScreenComponent />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 0,
    justifyContent: 'center',
  },

  scrollContainer: {
    width: '100%',
    paddingHorizontal: metrics.largestPadding
  }

});
