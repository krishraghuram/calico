import { SafeAreaView } from 'react-native-safe-area-context';
import { CalicoFAB } from '../components/CalicoFAB';
import { WorkoutForm } from '../components/WorkoutForm';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <CalicoFAB />
            <WorkoutForm />
        </SafeAreaView>
    );
}
export { HomeScreen }