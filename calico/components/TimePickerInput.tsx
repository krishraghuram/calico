import * as React from 'react';
import { TextInput as RNTextInput, View, ViewProps } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

type TimePickerInputState = {
    hours: number;
    minutes: number;
}

type TimePickerInputProps = ViewProps & {
    onChangeTime: (time: TimePickerInputState) => void
    label: string
}

const formatTime = (time: TimePickerInputState | undefined) => {
    if (time !== undefined) {
        const locale = 'en-US';
        const options = { minimumIntegerDigits: 2, useGrouping: false };
        return `${time.hours.toLocaleString(locale, options)}:${time.minutes.toLocaleString(locale, options)}`
    } else {
        return "";
    }
}

const TimePickerInput = (props: TimePickerInputProps) => {
    const timeTextInputRef = React.useRef<RNTextInput>(null);
    const [time, setTime] = React.useState<TimePickerInputState | undefined>(undefined);
    const [visible, setVisible] = React.useState(false);
    const onDismiss = React.useCallback(() => {
        timeTextInputRef.current?.blur()
        setVisible(false)
    }, [timeTextInputRef, setVisible])
    const onConfirm = React.useCallback(
        (params: any) => {
            timeTextInputRef.current?.blur()
            setVisible(false);
            let newtime = { hours: params.hours, minutes: params.minutes }
            setTime(newtime)
            props.onChangeTime(newtime);
        },
        [timeTextInputRef, setVisible, setTime, props.onChangeTime]
    );
    return (
        <View>
            <TextInput
                ref={timeTextInputRef}
                label={props.label}
                value={formatTime(time)}
                onFocus={() => setVisible(true)}
                caretHidden={true}
                style={props.style}
                right={<TextInput.Icon icon="clock-time-four" />}
            />
            <TimePickerModal
                visible={visible}
                onDismiss={onDismiss}
                onConfirm={onConfirm}
                hours={time?.hours}
                minutes={time?.minutes}
            />
        </View>
    );
};

export { TimePickerInput, TimePickerInputProps, TimePickerInputState };