import { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { TimePickerInput, TimePickerInputState } from './TimePickerInput';
import { DatePickerInput, DatePickerInputState } from './DatePickerInput';
import { Text, TextInput, HelperText, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageNamespace, getAsyncStorageKey } from '../utils';
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

type Weight = {
    weight: number;
    date: DatePickerInputState;
    time: TimePickerInputState;
    comments?: string;
}

const addWeight = async (weight: Weight) => {
    try {
        const key = getAsyncStorageKey(
            AsyncStorageNamespace.Weight,
            weight.date,
            weight.time
        );
        await AsyncStorage.setItem(key, JSON.stringify(weight));
    } catch (e) {
        // TODO: Error Snackbar
        console.log("Failed to save weight!");
    }
}

const WeightForm = () => {
    const navigation = useNavigation();
    const [weight, setWeight] = useState<string>("");

    const [date, setDate] = useState<DatePickerInputState | undefined>(undefined);
    const [time, setTime] = useState<TimePickerInputState | undefined>(undefined);

    const [comments, setComments] = useState<string>("");

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text variant="titleLarge" style={styles.item}>
                Add a Weight
            </Text>
            <ScrollView>
                <TextInput
                    label="Weight (lb)"
                    value={weight}
                    onChangeText={text => setWeight(text)}
                    inputMode='numeric'
                />
                {
                    isNaN(Number(weight)) && <HelperText type="error" visible={true}>
                        Weight must be a number!
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
                <TextInput
                    label="Comments/Notes"
                    value={comments}
                    onChangeText={text => setComments(text)}
                    style={styles.item}
                    multiline
                />
                <Button
                    mode="contained"
                    onPress={async () => {
                        if (date && time) {
                            await addWeight({
                                weight: Number(weight),
                                date: date,
                                time: time,
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
        </KeyboardAvoidingView>

    );
};

export { WeightForm };