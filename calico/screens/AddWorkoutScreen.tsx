import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { WorkoutForm } from '../components/WorkoutForm';
import { useTheme } from 'react-native-paper';

const AddWorkoutScreen = () => {
    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.secondary,
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    return (
        <SafeAreaView style={styles.container}>
            <WorkoutForm />
        </SafeAreaView>
    );
}
export { AddWorkoutScreen }