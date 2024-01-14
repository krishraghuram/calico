import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FAB, Portal } from 'react-native-paper';
import { ScreenNames } from '../screens/ScreenNames';
import { RootStackParamList } from '../screens/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const CalicoFAB = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [open, setOpen] = React.useState(false);
    const onStateChange = (state: any) => setOpen(state.open);
    return (
        <Portal>
            <FAB.Group
                open={open}
                visible={true}
                icon={open ? 'close' : 'plus'}
                actions={[
                    {
                        icon: 'dumbbell',
                        label: 'Workout',
                        onPress: () => navigation.navigate(ScreenNames.AddWorkout)
                    },
                    {
                        icon: 'scale-bathroom',
                        label: 'Weight',
                        onPress: () => navigation.navigate(ScreenNames.AddWeight)
                    },
                    {
                        icon: 'food-apple',
                        label: 'Food',
                        onPress: () => navigation.navigate(ScreenNames.AddFood)
                    },
                ]}
                onStateChange={onStateChange}
            />
        </Portal>
    );
};

export { CalicoFAB };