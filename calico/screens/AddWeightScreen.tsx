import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { WeightForm } from '../components/WeightForm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AddWeightScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <WeightForm />
        </SafeAreaView>
    );
}
export { AddWeightScreen }