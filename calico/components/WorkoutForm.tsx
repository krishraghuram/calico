import * as React from 'react';
import { TextInput as RNTextInput, View, StyleSheet } from 'react-native';
import { TimePickerInput, TimePickerInputState } from './TimePickerInput';
import { DatePickerInput, DatePickerInputState } from './DatePickerInput';
import DropDown from "react-native-paper-dropdown";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '90%'
    }
});

const WorkoutForm = () => {
    const [date, setDate] = React.useState<DatePickerInputState | undefined>(undefined);
    const [time, setTime] = React.useState<TimePickerInputState | undefined>(undefined);

    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes));
    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes).toLocaleDateString("en-US", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));



    return (
        <View style={styles.container}>
            <DatePickerInput
                onChangeDate={(date) => { setDate(date) }}
                label='Date'
            />
            <TimePickerInput
                label='Time'
                onChangeTime={(time) => { setTime(time) }}
                style={{ marginBottom: 10 }}
            />
        </View>

    );
};

export { WorkoutForm };