import { SafeAreaView } from 'react-native-safe-area-context';
import { CalicoFAB } from '../components/CalicoFAB';
import { StyleSheet, View } from 'react-native';
import { Portal } from 'react-native-paper';
import JSONTree from 'react-native-json-tree'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#002b36',
    },
    jsonContainer: {
        flex: 1,
        marginTop: 20,
        width: '90%',
    }
});

const HomeScreen = () => {
    return (
        <Portal.Host>
            <SafeAreaView style={styles.container}>
                <View style={styles.jsonContainer}>
                    <JSONTree data={{ hello: 1, world: 2 }} />
                </View>
                <CalicoFAB />
            </SafeAreaView>
        </Portal.Host>
    );
}
export { HomeScreen }