import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { CalicoFAB } from './components/CalicoFAB';
import { en, registerTranslation } from 'react-native-paper-dates'
import { DatePickerInput } from 'react-native-paper-dates';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default function App() {
  // Refer https://web-ridge.github.io/react-native-paper-dates/docs/intro/#register-translation
  registerTranslation('en', en);

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  const [date, setDate] = React.useState(undefined);

  return (
    <PaperProvider theme={theme}>
      <StatusBar style="auto" />
      <View style={{ flexDirection: 'column', padding: 10 }}>
        <View style={{ height: '40%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(255,255,0,255)' }}>
          <Text>Welcome to Calico!!!</Text>
        </View>
        <CalicoFAB />
      </View>
    </PaperProvider>
  );
}



// import React from "react";
// import { View, Text } from "react-native";
// import { Button } from 'react-native-paper';
// import { DatePickerModal } from 'react-native-paper-dates';
// import { SafeAreaProvider } from "react-native-safe-area-context";

// export default function App() {
  
//   const [date, setDate] = React.useState(undefined);
//   const [open, setOpen] = React.useState(false);

//   const onDismiss = React.useCallback(() => {
//     setOpen(false);
//   }, [setOpen]);

//   const onConfirm = React.useCallback(
//     (params) => {
//       setOpen(false);
//       setDate(params.date);
//     },
//     [setOpen, setDate]
//   );

//   return (
//     <SafeAreaProvider>
//       <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
//         <Button onPress={() => setOpen(true)} uppercase={false} mode="outlined">
//           Pick single date
//         </Button>
//         <DatePickerModal
//           locale="en"
//           mode="single"
//           visible={open}
//           onDismiss={onDismiss}
//           date={date}
//           onConfirm={onConfirm}
//         />
//       </View>
//     </SafeAreaProvider>
//   )
// }