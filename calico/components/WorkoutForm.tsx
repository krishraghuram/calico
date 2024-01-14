import { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { TimePickerInput, TimePickerInputState } from './TimePickerInput';
import { DatePickerInput, DatePickerInputState } from './DatePickerInput';
import { Text, TextInput, HelperText, SegmentedButtons, useTheme, Button } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '90%',
        paddingVertical: 20
    },
    item: {
        marginBottom: 10
    },
    button: {
        width: '50%'
    }
});

const WORKOUTS = [
    "Gym - Cardio - Low Intensity",
    "Gym - Cardio - Medium Intensity",
    "Gym - Cardio - High Intensity",
    "Gym - Upper",
    "Gym - Lower",
    "Gym - Functional",
    "Gym - Session with Will",
    "Bike Ride",
]

const WorkoutForm = () => {
    const theme = useTheme();

    const [workout, setWorkout] = useState<string>(WORKOUTS[0]);
    const [showWorkoutDropdown, setShowWorkoutDropdown] = useState<boolean>(false);
    const [duration, setDuration] = useState<string>("");
    const [calories, setCalories] = useState<string>("");

    const [date, setDate] = useState<DatePickerInputState | undefined>(undefined);
    const [time, setTime] = useState<TimePickerInputState | undefined>(undefined);
    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes));
    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes).toLocaleDateString("en-US", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));

    const [showMoreFields, setShowMoreFields] = useState<boolean>(false);
    const [hrMax, setHrMax] = useState<string>("");
    const [hrAvg, setHrAvg] = useState<string>("");
    const [fatBurnPercent, setFatBurnPercent] = useState<string>("");
    const [comments, setComments] = useState<string>("");

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text variant="titleLarge" style={styles.item}>
                Add a Workout
            </Text>
            <ScrollView>
                <View style={styles.item}>
                    <DropDown
                        label='Workout'
                        mode='flat'
                        visible={showWorkoutDropdown}
                        showDropDown={() => setShowWorkoutDropdown(true)}
                        onDismiss={() => setShowWorkoutDropdown(false)}
                        value={workout}
                        setValue={setWorkout}
                        list={WORKOUTS.map((i) => ({ value: i, label: i }))}
                    />
                </View>
                <TextInput
                    label="Duration (mins)"
                    value={duration}
                    onChangeText={text => setDuration(text)}
                    inputMode='numeric'
                    style={styles.item}
                />
                {
                    isNaN(Number(duration)) && <HelperText type="error" visible={true}>
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
                    isNaN(Number(calories)) && <HelperText type="error" visible={true}>
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
                    style={styles.item}
                />
                <Text
                    variant="labelLarge"
                    style={[styles.item, { color: theme.colors.primary }]}
                    onPress={() => { setShowMoreFields(!showMoreFields) }}>
                    {!showMoreFields ? 'More Fields' : 'Less Fields'}
                </Text>
                {
                    showMoreFields &&
                    <>
                        <TextInput
                            label="Heart Rate (max)"
                            value={hrMax}
                            onChangeText={text => setHrMax(text)}
                            inputMode='numeric'
                            style={styles.item}
                        />
                        <TextInput
                            label="Heart Rate (avg)"
                            value={hrAvg}
                            onChangeText={text => setHrAvg(text)}
                            inputMode='numeric'
                            style={styles.item}
                        />
                        <TextInput
                            label="Fat Burn %"
                            value={fatBurnPercent}
                            onChangeText={text => setFatBurnPercent(text)}
                            inputMode='numeric'
                            style={styles.item}
                        />
                        <TextInput
                            label="Comments/Notes"
                            value={comments}
                            onChangeText={text => setComments(text)}
                            style={styles.item}
                            multiline
                        />
                    </>
                }
                <Button
                    mode="contained"
                    onPress={() => console.log('Pressed')}
                    style={styles.button}
                >
                    Submit
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export { WorkoutForm };