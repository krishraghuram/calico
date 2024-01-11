import * as React from 'react';
import { FAB, Portal } from 'react-native-paper';

const CalicoFAB = () => {
    const [open, setOpen] = React.useState(false);

    const onStateChange = (state: any) => setOpen(state.open);

    return (
        <Portal>
            <FAB.Group
                open={open}
                visible={true}
                icon={open ? 'food-apple' : 'plus'}
                actions={[
                    {
                        icon: 'dumbbell',
                        label: 'Workout',
                        onPress: () => console.log('Added Workout')
                    },
                    {
                        icon: 'scale-bathroom',
                        label: 'Weight',
                        onPress: () => console.log('Added Weight')
                    },
                ]}
                onStateChange={onStateChange}
                onPress={() => {
                    if (open) {
                        console.log('Added Food');
                    } else {
                        console.log('Opened...');
                    }
                }}
            />
        </Portal>
    );
};

export { CalicoFAB };