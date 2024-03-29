import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { ScreenNames } from './screens/ScreenNames';
import { AddWorkoutScreen } from './screens/AddWorkoutScreen';
import { AddWeightScreen } from './screens/AddWeightScreen';
import { AddFoodScreen } from './screens/AddFoodScreen';
import { CALICO_THEME } from './themes';

const Stack = createNativeStackNavigator();

export default function App() {
  // Refer https://web-ridge.github.io/react-native-paper-dates/docs/intro/#register-translation
  registerTranslation('en', en);
  return (
    <PaperProvider theme={CALICO_THEME}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={ScreenNames.Home} component={HomeScreen} />
          <Stack.Screen name={ScreenNames.AddWorkout} component={AddWorkoutScreen} />
          <Stack.Screen name={ScreenNames.AddWeight} component={AddWeightScreen} />
          <Stack.Screen name={ScreenNames.AddFood} component={AddFoodScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
