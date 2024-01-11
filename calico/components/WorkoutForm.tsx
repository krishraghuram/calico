import * as React from 'react';
import { TextInput as RNTextInput, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { DatePickerInput, DatePickerModal, TimePickerModal } from 'react-native-paper-dates';

type TimePickerState = {
    hours: string;
    minutes: string;
}

const WorkoutForm = () => {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [datePickerVisible, setDatePickerVisible] = React.useState(false);
    const onDismiss = React.useCallback(() => {
        setDatePickerVisible(false);
    }, [setDatePickerVisible]);
    const onConfirm = React.useCallback(
        (params: any) => {
            setDatePickerVisible(false);
            setDate(params.date);
        },
        [setDatePickerVisible, setDate]
    );
    const timeTextInputRef = React.useRef<RNTextInput>(null);
    const [time, setTime] = React.useState<TimePickerState | undefined>(undefined);
    const [timePickerVisible, setTimePickerVisible] = React.useState(false);
    const onTimePickerDismiss = React.useCallback(() => {
        timeTextInputRef.current?.blur()
        setTimePickerVisible(false)
    }, [setTimePickerVisible])
    const onTimePickerConfirm = React.useCallback(
        (params: any) => {
            timeTextInputRef.current?.blur()
            setTimePickerVisible(false);
            setTime({ hours: params.hours, minutes: params.minutes })
        },
        [setTimePickerVisible]
    );

    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            {/* <TextInput
                label="Date"
                value={date.toISOString()}
                onFocus={() => setDatePickerVisible(true)}
            />*/}
            {/* <Button
                onPress={() => setDatePickerVisible(true)}
                uppercase={false}
                mode="contained-tonal">
                Pick single date
            </Button> */}
            <DatePickerModal
                locale="en"
                mode="single"
                visible={datePickerVisible}
                onDismiss={onDismiss}
                date={date}
                onConfirm={onConfirm}
            />
            <DatePickerInput
                locale="en"
                label="Date"
                value={date}
                onChange={(d) => setDate(d)}
                inputMode="start"
            />
            <TextInput
                ref={timeTextInputRef}
                label="Time"
                value={(time && time.hours && time.minutes) ? `${time?.hours}:${time?.minutes}` : ""}
                onFocus={() => setTimePickerVisible(true)}
                caretHidden={true}
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