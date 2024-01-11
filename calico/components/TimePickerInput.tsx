import * as React from 'react';
import { TextInput as RNTextInput, View, ViewProps } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';

type TimeInputState = {
    hours: number;
    minutes: number;
}

type TimeInputProps = ViewProps & {
    onChangeTime: (time: TimeInputState) => void
    label: string
}

const formatTime = (time: TimeInputState | undefined) => {
    if (time && time.hours && time.minutes) {
        const locale = 'en-US';
        const options = { minimumIntegerDigits: 2, useGrouping: false };
        return `${time?.hours.toLocaleString(locale, options)}:${time?.minutes.toLocaleString(locale, options)}`
    } else {
        return "";
    }
}

const TimePickerInput = (props: TimeInputProps) => {
    const timeTextInputRef = React.useRef<RNTextInput>(null);
    const [time, setTime] = React.useState<TimeInputState | undefined>(undefined);
    const [visible, setVisible] = React.useState(false);
    const onDismiss = React.useCallback(() => {
        timeTextInputRef.current?.blur()
        setVisible(false)
    }, [setVisible])
    const onConfirm = React.useCallback(
        (params: any) => {
            timeTextInputRef.current?.blur()
            setVisible(false);
            let newtime = { hours: params.hours, minutes: params.minutes }
            setTime(newtime)
            props.onChangeTime(newtime);
        },
        [setVisible]
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

export { TimePickerInput };