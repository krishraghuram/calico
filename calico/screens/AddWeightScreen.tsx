import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { WeightForm } from '../components/WeightForm';
import { useTheme } from 'react-native-paper';

const AddWeightScreen = () => {
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
            <WeightForm />
        </SafeAreaView>
    );
}
export { AddWeightScreen }