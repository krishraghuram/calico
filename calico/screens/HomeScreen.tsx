import { SafeAreaView } from 'react-native-safe-area-context';
import { CalicoFAB } from '../components/CalicoFAB';
import { StyleSheet, View } from 'react-native';
import { Portal } from 'react-native-paper';
import JSONTree from 'react-native-json-tree'
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { PALETTE } from '../themes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: PALETTE.backgroundColor,
    },
    jsonContainer: {
        flex: 1,
        marginTop: 20,
        width: '90%',
    }
});

const HomeScreen = () => {
    const [json, setJson] = useState<object>({});
    useFocusEffect(
        useCallback(
            () => {
                async function loadData() {
                    // await AsyncStorage.clear();
                    setJson({});
                    const keys = await AsyncStorage.getAllKeys();
                    const result = await AsyncStorage.multiGet(keys);
                    let entries = [];
                    for (const i of result) {
                        if (i[1] !== null) {
                            entries.push([i[0], JSON.parse(i[1])]);
                        }
                    }
                    if (!ignore) {
                        setJson(Object.fromEntries(entries));
                    }
                }
                let ignore = false;
                loadData();
                return () => {
                    ignore = true;
                }
            }, []
        )
    );

    return (
        <Portal.Host>
            <SafeAreaView style={styles.container}>
                <View style={styles.jsonContainer}>
                    <JSONTree data={{ ...json }} />
                </View>
                <CalicoFAB />
            </SafeAreaView>
        </Portal.Host>
    );
}
export { HomeScreen }