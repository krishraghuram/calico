import { StatusBar } from 'expo-status-bar';
import { MD3LightTheme as DefaultTheme, PaperProvider, useTheme } from 'react-native-paper';
import { en, registerTranslation } from 'react-native-paper-dates'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    // primary: 'tomato',
    // secondary: 'yellow',
  },
};

const Stack = createNativeStackNavigator();

export default function App() {
  // Refer https://web-ridge.github.io/react-native-paper-dates/docs/intro/#register-translation
  registerTranslation('en', en);
  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
