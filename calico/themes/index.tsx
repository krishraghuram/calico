import Color from 'color';
import color from 'color';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const PALETTE = {
    primary: (l: number) => `hsla(236, 21%, ${l - 18}%, 1)`,
    secondary: (l: number) => `hsla(69, 76%, ${l + 55}%, 1)`,
    tertiary: (l: number) => `hsla(184, 10%, ${l}%, 1)`,
    neutral: (l: number) => `hsla(276, 3%, ${l}%, 1)`,
    neutralVariant: (l: number) => `hsla(267, 17%, ${l}%, 1)`,
    error: (l: number) => `hsla(3, 71%, ${l}%, 1)`,
    backgroundColor: '#002b36',
}

// Ref: https://www.npmjs.com/package/rgba-to-rgb
const rgbaToRgb = (background: Color, color: Color, cAlpha: number) => {
    const bRed = background.red();
    const bGreen = background.green();
    const bBlue = background.blue();
    const cRed = color.red();
    const cGreen = color.green();
    const cBlue = color.blue();

    const red = (1 - +cAlpha) * +bRed + +cAlpha * +cRed
    const green = (1 - +cAlpha) * +bGreen + +cAlpha * +cGreen
    const blue = (1 - +cAlpha) * +bBlue + +cAlpha * +cBlue

    return `rgb(${Math.round(red)}, ${Math.round(green)}, ${Math.round(blue)})`
}

const opacity = {
    level1: 0.08,
    level2: 0.12,
    level3: 0.16,
    level4: 0.38,
};

export const CALICO_THEME = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: PALETTE.primary(40),
        primaryContainer: PALETTE.primary(90),
        secondary: PALETTE.secondary(40),
        secondaryContainer: PALETTE.secondary(90),
        tertiary: PALETTE.tertiary(40),
        tertiaryContainer: PALETTE.tertiary(90),
        surface: PALETTE.neutral(99),
        surfaceVariant: PALETTE.neutralVariant(90),
        surfaceDisabled: color(PALETTE.neutral(10))
            .alpha(opacity.level2)
            .rgb()
            .string(),
        background: PALETTE.neutral(99),
        error: PALETTE.error(40),
        errorContainer: PALETTE.error(90),
        onPrimary: PALETTE.primary(100),
        onPrimaryContainer: PALETTE.primary(10),
        onSecondary: PALETTE.secondary(100),
        onSecondaryContainer: PALETTE.secondary(10),
        onTertiary: PALETTE.tertiary(100),
        onTertiaryContainer: PALETTE.tertiary(10),
        onSurface: PALETTE.neutral(10),
        onSurfaceVariant: PALETTE.neutralVariant(30),
        onSurfaceDisabled: color(PALETTE.neutral(10))
            .alpha(opacity.level4)
            .rgb()
            .string(),
        onError: PALETTE.error(100),
        onErrorContainer: PALETTE.error(10),
        onBackground: PALETTE.neutral(10),
        outline: PALETTE.neutralVariant(50),
        outlineVariant: PALETTE.neutralVariant(80),
        inverseSurface: PALETTE.neutral(20),
        inverseOnSurface: PALETTE.neutral(95),
        inversePrimary: PALETTE.primary(80),
        shadow: PALETTE.neutral(0),
        scrim: PALETTE.neutral(0),
        backdrop: color(PALETTE.neutralVariant(20)).alpha(0.4).rgb().string(),
        elevation: {
            level0: 'transparent',
            level1: rgbaToRgb(Color(PALETTE.primary(99)).rgb(), Color(PALETTE.primary(40)).rgb(), 0.05),
            level2: rgbaToRgb(Color(PALETTE.primary(99)).rgb(), Color(PALETTE.primary(40)).rgb(), 0.08),
            level3: rgbaToRgb(Color(PALETTE.primary(99)).rgb(), Color(PALETTE.primary(40)).rgb(), 0.11),
            level4: rgbaToRgb(Color(PALETTE.primary(99)).rgb(), Color(PALETTE.primary(40)).rgb(), 0.12),
            level5: rgbaToRgb(Color(PALETTE.primary(99)).rgb(), Color(PALETTE.primary(40)).rgb(), 0.14),
        },
    },
};