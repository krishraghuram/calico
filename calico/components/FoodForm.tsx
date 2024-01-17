import { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { TimePickerInput, TimePickerInputState } from './TimePickerInput';
import { DatePickerInput, DatePickerInputState } from './DatePickerInput';
import { Text, TextInput, Button } from 'react-native-paper';
import { AsyncStorageNamespace, getAsyncStorageKey } from '../utils';
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

type Food = {
    date: DatePickerInputState;
    time: TimePickerInputState;
    name: string;
    from: string;
    quantity: number;
    unit: string;
    servings: number;
    comments: string;
}

const addFood = async (food: Food) => {
    try {
        const key = getAsyncStorageKey(
            AsyncStorageNamespace.Food,
            food.date,
            food.time
        );
        await AsyncStorage.setItem(key, JSON.stringify(food));
    } catch (e) {
        // TODO: Error Snackbar
        console.log("Failed to save weight!");
    }
}

const FoodForm = () => {
    const navigation = useNavigation();

    const [date, setDate] = useState<DatePickerInputState | undefined>(undefined);
    const [time, setTime] = useState<TimePickerInputState | undefined>(undefined);

    const [comments, setComments] = useState<string>("");

    const [name, setName] = useState<string>("");
    const [from, setFrom] = useState<string>("");
    const [quantity, setQuantity] = useState<string>("");
    const [unit, setUnit] = useState<string>("");
    const [servings, setServings] = useState<string>("");

    return (
        <KeyboardAvoidingView style={styles.container}>
            <Text variant="titleLarge" style={styles.item}>
                Add Food
            </Text>
            <ScrollView>
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.item}
                />
                <TextInput
                    label="From"
                    value={from}
                    onChangeText={text => setFrom(text)}
                    style={styles.item}
                />
                <TextInput
                    label="Quantity"
                    value={quantity}
                    onChangeText={text => setQuantity(text)}
                    inputMode='numeric'
                    style={styles.item}
                />
                <TextInput
                    label="Unit"
                    value={unit}
                    onChangeText={text => setUnit(text)}
                    style={styles.item}
                />
                <TextInput
                    label="Servings"
                    value={servings}
                    onChangeText={text => setServings(text)}
                    inputMode='numeric'
                />
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
                            await addFood({
                                date: date,
                                time: time,
                                name: name,
                                from: from,
                                quantity: Number(quantity),
                                unit: unit,
                                servings: Number(servings),
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

export { FoodForm };