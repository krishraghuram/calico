import { useCallback, useState } from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { DatePickerInput as RNPDDatePickerInput } from 'react-native-paper-dates';

type DatePickerInputState = {
    year: number;
    month: number;
    date: number;
}

type DatePickerInputProps = ViewProps & {
    onChangeDate: (date: DatePickerInputState) => void
    label: string
}

const styles = StyleSheet.create({
    container: {
        height: 80
    }
});

const DatePickerInput = (props: DatePickerInputProps) => {
    const [date, setDate] = useState<Date | undefined>(undefined);

    const onChange = useCallback(
        (newdate: Date | undefined) => {
            setDate(newdate);
            if (newdate !== undefined) {
                props.onChangeDate({
                    year: newdate.getFullYear(),
                    month: newdate.getMonth(),
                    date: newdate.getDate()
                })
            }
        },
        [setDate, props.onChangeDate]
    );

    return (
        <View style={styles.container}>
            <RNPDDatePickerInput
                locale="en"
                label={props.label}
                value={date}
                onChange={onChange}
                inputMode="start"
            />
        </View>
    );
};

export { DatePickerInput, DatePickerInputProps, DatePickerInputState };