import { DatePickerInputState } from "../components/DatePickerInput";
import { TimePickerInputState } from "../components/TimePickerInput";

export enum AsyncStorageNamespace {
    Workout = "WORKOUT",
    Weight = "WEIGHT",
    Food = "FOOD",
}

export const getAsyncStorageKey = (n: AsyncStorageNamespace, d: DatePickerInputState, t: TimePickerInputState) => {
    const dateString = new Date(d.year, d.month, d.date, t.hours, t.minutes).toISOString();
    const key = `${n}/${dateString}`;
    return key;
}