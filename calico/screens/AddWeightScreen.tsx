import { SafeAreaView } from 'react-native-safe-area-context';
import { CalicoFAB } from '../components/CalicoFAB';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
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