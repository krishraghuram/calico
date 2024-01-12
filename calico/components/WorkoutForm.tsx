import * as React from 'react';
import { TextInput as RNTextInput, View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TimePickerInput, TimePickerInputState } from './TimePickerInput';
import { DatePickerInput, DatePickerInputState } from './DatePickerInput';
import { Text, TextInput, HelperText, SegmentedButtons, useTheme } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '90%',
        paddingVertical: 20
    }
});

import DropDownPicker from 'react-native-dropdown-picker';


const WORKOUT_TYPES = [
    "Gym",
    "Bike Ride",
]
const WORKOUT_INTENSITY = [
    "High",
    "Medium",
    "Low",
]

const WorkoutForm = () => {
    const [date, setDate] = React.useState<DatePickerInputState | undefined>(undefined);
    const [time, setTime] = React.useState<TimePickerInputState | undefined>(undefined);

    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes));
    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes).toLocaleDateString("en-US", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));

    const [type, setType] = React.useState<string>(WORKOUT_TYPES[0]);
    const [intensity, setIntensity] = React.useState<string>(WORKOUT_INTENSITY[0]);
    const [duration, setDuration] = React.useState<string>("");
    const durationInvalid = () => isNaN(Number(duration));
    const [calories, setCalories] = React.useState<string>("");
    const caloriesInvalid = () => isNaN(Number(calories));

    const theme = useTheme();

    const [showMoreFields, setShowMoreFields] = React.useState<boolean>(false);

    const [hrMax, setHrMax] = React.useState<string>("");
    const [hrAvg, setHrAvg] = React.useState<string>("");
    const [fatBurnPercent, setFatBurnPercent] = React.useState<string>("");
    const [comments, setComments] = React.useState<string>("");

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView>
                <SegmentedButtons
                    value={type}
                    onValueChange={setType}
                    buttons={WORKOUT_TYPES.map((i) => ({ value: i, label: i }))}
                    style={{ marginBottom: 10 }}
                />
                <SegmentedButtons
                    value={intensity}
                    onValueChange={setIntensity}
                    buttons={WORKOUT_INTENSITY.map((i) => ({ value: i, label: i }))}
                    style={{ marginBottom: 10 }}
                />
                <TextInput
                    label="Duration (mins)"
                    value={duration}
                    onChangeText={text => setDuration(text)}
                    inputMode='numeric'
                    style={{ marginBottom: 10 }}
                />
                {
                    durationInvalid() && <HelperText type="error" visible={true}>
                        Duration must be a number!
                    </HelperText>
                }
                <TextInput
                    label="Calories"
                    value={calories}
                    onChangeText={text => setCalories(text)}
                    inputMode='numeric'
                />
                {
                    caloriesInvalid() && <HelperText type="error" visible={true}>
                        Calories must be a number!
                    </HelperText>
                }
                <DatePickerInput
                    onChangeDate={(date) => { setDate(date) }}
                    label='Date'
                />
                <TimePickerInput
                    label='Time'
                    onChangeTime={(time) => { setTime(time) }}
                    style={{ marginBottom: 10 }}
                />
                {
                    !showMoreFields &&
                    <Text
                        variant="labelLarge"
                        style={{ color: theme.colors.primary }}
                        onPress={() => { setShowMoreFields(true) }}>
                        More fields
                    </Text>

                }
                {
                    showMoreFields &&
                    <>
                        <TextInput
                            label="Heart Rate (max)"
                            value={hrMax}
                            onChangeText={text => setHrMax(text)}
                            inputMode='numeric'
                        />
                        <TextInput
                            label="Heart Rate (avg)"
                            value={hrAvg}
                            onChangeText={text => setHrAvg(text)}
                            inputMode='numeric'
                        />
                        <TextInput
                            label="Fat Burn %"
                            value={fatBurnPercent}
                            onChangeText={text => setFatBurnPercent(text)}
                            inputMode='numeric'
                        />
                        <TextInput
                            label="Comments/Notes"
                            value={comments}
                            onChangeText={text => setComments(text)}
                            multiline
                        />
                    </>
                }
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export { WorkoutForm };