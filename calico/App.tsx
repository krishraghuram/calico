import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { CalicoFAB } from './components/CalicoFAB';
import { WorkoutForm } from './components/WorkoutForm';
import { en, registerTranslation } from 'react-native-paper-dates'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView as RNSafeAreaView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  // return (
  //   <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'rgba(255,255,0,255)', alignItems: 'center', justifyContent: 'center' }}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  // Refer https://web-ridge.github.io/react-native-paper-dates/docs/intro/#register-translation
  registerTranslation('en', en);
  console.log("Hello World");
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <WorkoutForm />
      </SafeAreaView>
    </PaperProvider>
  );
}



// <View style={{ flex: 1, flexDirection: 'column', padding: 10 }}>
// {/* <View style={{ height: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,0,255)' }}>
//   <Text>Welcome to Calico!!!</Text>
// </View> */}
// {/* <CalicoFAB /> */}
// <WorkoutForm />
// </View>