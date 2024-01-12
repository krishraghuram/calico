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


    const [showDropDown, setShowDropDown] = React.useState(false);
    const [gender, setGender] = React.useState("");
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] = React.useState(false);
    const [colors, setColors] = React.useState("");
    const genderList = [
        {
            label: "Male",
            value: "male",
        },
        {
            label: "Female",
            value: "female",
        },
        {
            label: "Others",
            value: "others",
        },
    ];
    const colorList = [
        {
            label: "White",
            value: "white",
        },
        {
            label: "Red",
            value: "red",
        },
        {
            label: "Blue",
            value: "blue",
        },
        {
            label: "Green",
            value: "green",
        },
        {
            label: "Orange",
            value: "orange",
        },
    ];

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
            <DropDown
                label={"Gender"}
                mode={"flat"}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={gender}
                setValue={setGender}
                list={genderList}
            />
            <DropDown
                label={"Colors"}
                mode={"flat"}
                visible={showMultiSelectDropDown}
                showDropDown={() => setShowMultiSelectDropDown(true)}
                onDismiss={() => setShowMultiSelectDropDown(false)}
                value={colors}
                setValue={setColors}
                list={colorList}
                multiSelect
            />
        </View>

    );
};

export { WorkoutForm };