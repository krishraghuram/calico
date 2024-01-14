import { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { TimePickerInput, TimePickerInputState } from './TimePickerInput';
import { DatePickerInput, DatePickerInputState } from './DatePickerInput';
import { Text, TextInput, HelperText, Button } from 'react-native-paper';

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

const WeightForm = () => {

    const [weight, setWeight] = useState<string>("");

    const [date, setDate] = useState<DatePickerInputState | undefined>(undefined);
    const [time, setTime] = useState<TimePickerInputState | undefined>(undefined);
    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes));
    // console.log(new Date(date?.year, date?.month, date?.date, time?.hours, time?.minutes).toLocaleDateString("en-US", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }));

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
                    onPress={() => console.log('Pressed')}
                    style={styles.button}
                >
                    Submit
                </Button>
            </ScrollView>
        </KeyboardAvoidingView>

    );
};

export { WeightForm };