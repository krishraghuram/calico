import { useNavigation } from '@react-navigation/native';
import { FAB, Portal } from 'react-native-paper';
import { ScreenNames } from '../screens/ScreenNames';
import { RootStackParamList } from '../screens/RootStackParamList';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';

const CalicoFAB = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [open, setOpen] = useState(false);
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