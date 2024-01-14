import { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { TimePickerInput, TimePickerInputState } from './TimePickerInput';
import { DatePickerInput, DatePickerInputState } from './DatePickerInput';
import { Text, TextInput, Button } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
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

const FoodForm = () => {
    const [date, setDate] = useState<DatePickerInputState | undefined>(undefined);
    const [time, setTime] = useState<TimePickerInputState | undefined>(undefined);
    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes));
    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes).toLocaleDateString("en-US", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));

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
                    onPress={() => console.log('Pressed')}
                    style={styles.button}
                >
                    Submit
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export { FoodForm };