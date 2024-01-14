import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScreenNames } from './ScreenNames';

type RootStackParamList = {
    [ScreenNames.Home]: undefined;
    [ScreenNames.AddWorkout]: undefined;
    [ScreenNames.AddWeight]: undefined;
    [ScreenNames.AddFood]: undefined;
};

namespace ScreenProps {
    export type HomeScreen = NativeStackScreenProps<RootStackParamList, ScreenNames.Home>;
    export type AddWorkoutScreen = NativeStackScreenProps<RootStackParamList, ScreenNames.AddWorkout>;
    export type AddWeightScreen = NativeStackScreenProps<RootStackParamList, ScreenNames.AddWeight>;
    export type AddFoodScreen = NativeStackScreenProps<RootStackParamList, ScreenNames.AddFood>;
}

export { RootStackParamList, ScreenProps }