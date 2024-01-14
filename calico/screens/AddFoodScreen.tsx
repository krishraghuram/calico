import { SafeAreaView } from 'react-native-safe-area-context';
import { CalicoFAB } from '../components/CalicoFAB';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { FoodForm } from '../components/FoodForm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AddFoodScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <FoodForm />
        </SafeAreaView>
    );
}
export { AddFoodScreen }