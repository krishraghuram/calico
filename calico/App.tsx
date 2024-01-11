import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { CalicoFAB } from './components/CalicoFAB';
import { WorkoutForm } from './components/WorkoutForm';
import { TimeInput } from './components/TimeInput';
import { en, registerTranslation } from 'react-native-paper-dates'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

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
      <View style={{ flex: 1, flexDirection: 'column', padding: 10 }}>
        <View style={{ height: '50%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,0,255)' }}>
          <Text>Welcome to Calico!!!</Text>
        </View>
        {/* <CalicoFAB /> */}
        {/* <WorkoutForm /> */}
        <TimeInput
          label='Time'
          onChangeTime={(time) => { console.log(time) }}
        ></TimeInput>
      </View>
    </PaperProvider>
  );
}

