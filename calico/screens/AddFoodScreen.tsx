import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
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