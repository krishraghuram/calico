import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { WorkoutForm } from '../components/WorkoutForm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AddWorkoutScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <WorkoutForm />
        </SafeAreaView>
    );
}
export { AddWorkoutScreen }