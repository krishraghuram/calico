import * as React from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { DatePickerInput, DatePickerModal, TimePickerModal } from 'react-native-paper-dates';

const WorkoutForm = () => {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    // const [datePickerVisible, setDatePickerVisible] = React.useState(false);
    // const onDismiss = React.useCallback(() => {
    //     setDatePickerVisible(false);
    // }, [setDatePickerVisible]);
    // const onConfirm = React.useCallback(
    //     (params: any) => {
    //         setDatePickerVisible(false);
    //         setDate(params.date);
    //     },
    //     [setDatePickerVisible, setDate]
    // );
    const [time, setTime] = React.useState(undefined);
    const [timePickerVisible, setTimePickerVisible] = React.useState(false);
    const onTimePickerDismiss = React.useCallback(() => {
        setTimePickerVisible(false)
    }, [setTimePickerVisible])

    const onTimePickerConfirm = React.useCallback(
        (params: any) => {
            setTimePickerVisible(false);
            console.log(params.hours, params.minutes);
        },
        [setTimePickerVisible]
    );

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* <TextInput
                label="Date"
                value={date.toISOString()}
                onFocus={() => setDatePickerVisible(true)}
            />
            <DatePickerModal
                locale="en"
                mode="single"
                visible={datePickerVisible}
                onDismiss={onDismiss}
                date={date}
                onConfirm={onConfirm}
            /> */}
            <DatePickerInput
                locale="en"
                label="Date"
                value={date}
                onChange={(d) => setDate(d)}
                inputMode="start"
            />
            <TextInput
                label="Time"
                value={time}
                onFocus={() => setTimePickerVisible(true)}
            />
            <TimePickerModal
                visible={timePickerVisible}
                onDismiss={onTimePickerDismiss}
                onConfirm={onTimePickerConfirm}
                hours={12}
                minutes={14}
            />
        </View>
    );
};

export { WorkoutForm };