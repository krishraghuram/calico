import { useEffect, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { TimePickerInput, TimePickerInputState } from './TimePickerInput';
import { DatePickerInput, DatePickerInputState } from './DatePickerInput';
import { Text, TextInput, HelperText, useTheme, Button } from 'react-native-paper';
import DropDown from "react-native-paper-dropdown";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

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

const WORKOUT_TYPES = [
    "Gym - Cardio - Low Intensity",
    "Gym - Cardio - Medium Intensity",
    "Gym - Cardio - High Intensity",
    "Gym - Upper",
    "Gym - Lower",
    "Gym - Functional",
    "Gym - Session with Will",
    "Bike Ride",
] as const

type WorkoutType = typeof WORKOUT_TYPES[number];
type Workout = {
    type: WorkoutType;
    duration: number;
    calories: number;
    date: DatePickerInputState;
    time: TimePickerInputState;
    hrMax?: number;
    hrAvg?: number;
    fatBurnPercent?: number;
    comments?: string;
}

const addWorkout = async (workout: Workout) => {
    try {
        const d = workout.date;
        const t = workout.time;
        const date = new Date(d.year, d.month, d.date, t.hours, t.minutes)
        const dateString = date.toISOString();
        const key = `workout/${dateString}`
        await AsyncStorage.setItem(key, JSON.stringify(workout));
    } catch (e) {
        // TODO: Error Snackbar
        console.log("Failed to save workout!");
    }
}

const WorkoutForm = () => {
    const theme = useTheme();
    const navigation = useNavigation();
    const [workoutType, setWorkoutType] = useState<WorkoutType>(WORKOUT_TYPES[0]);
    const [showWorkoutDropdown, setShowWorkoutDropdown] = useState<boolean>(false);
    const [duration, setDuration] = useState<string>("");
    const [calories, setCalories] = useState<string>("");

    const [date, setDate] = useState<DatePickerInputState | undefined>(undefined);
    const [time, setTime] = useState<TimePickerInputState | undefined>(undefined);

    const [showMoreFields, setShowMoreFields] = useState<boolean>(false);
    const [hrMax, setHrMax] = useState<string>("");
    const [hrAvg, setHrAvg] = useState<string>("");
    const [fatBurnPercent, setFatBurnPercent] = useState<string>("");
    const [comments, setComments] = useState<string>("");

    console.log(time);

    useEffect(() => {
        async function fetchMyAPI() {
            const d = date;
            const t = time;
            const key = `workout/${d?.year}-${d?.month}-${d?.date}/${t?.hours}:${t?.minutes}`
            const value = await AsyncStorage.getItem(key);
            console.log("---");
            console.log(JSON.stringify(value));
            console.log("---");
        }
        fetchMyAPI()
    }, []);

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
                        value={workoutType}
                        setValue={setWorkoutType}
                        list={WORKOUT_TYPES.map((i) => ({ value: i, label: i }))}
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
                    onPress={async () => {
                        if (date && time) {
                            await addWorkout({
                                type: workoutType,
                                duration: Number(duration),
                                calories: Number(calories),
                                date: date,
                                time: time,
                                hrMax: Number(hrMax),
                                hrAvg: Number(hrAvg),
                                fatBurnPercent: Number(fatBurnPercent),
                                comments: comments,
                            });
                            navigation.goBack();
                        } else {
                            console.log("TODO");
                        }
                    }}
                    style={styles.button}
                >
                    Submit
                </Button>
            </ScrollView>
        </KeyboardAvoidingView >

    );
};

export { WorkoutForm };