import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { FoodForm } from '../components/FoodForm';
import { useTheme } from 'react-native-paper';

const AddFoodScreen = () => {
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
            <FoodForm />
        </SafeAreaView>
    );
}
export { AddFoodScreen }