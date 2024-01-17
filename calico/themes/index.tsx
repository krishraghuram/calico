import color from 'color';
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const palette = {
    // 37, 100%, 40%
    // 60, 100%, 40%
    // 70, 100%, 40% to 87, 100%, 40%
    // 93, 100%, 40% to 140, 100%, 40%
    // 188, 100%, 40%
    // 211, 100%, 40%
    // 276, 100%, 40%


    // primary: (l: number) => `hsla(23, 93%, ${l}%, 1)`,
    // secondary: (l: number) => `hsla(31, 94%, ${l}%, 1)`,

    // 102, 65%, 80%
    // primary: (l: number) => `hsla(102, 65%, ${l}%, 1)`,
    // 191, 50%, 44%
    primary: (l: number) => `hsla(191, 50%, ${l}%, 1)`,
    // 102, 65%, 40%
    // primary: (l: number) => `hsla(102, 65%, ${l}%, 1)`,
    // 53, 98%, 65%
    // primary: (l: number) => `hsla(53, 98%, ${l + 25}%, 1)`,
    // 208, 79%, 79%
    // primary: (l: number) => `hsla(208, 79%, ${l}%, 1)`,
    // primary: (l: number) => `hsla(208, 79%, ${l + 39}%, 1)`,

    // 184, 10%, 33%
    secondary: (l: number) => `hsla(184, 10%, ${l}%, 1)`,

    // 53, 98%, 65%
    tertiary: (l: number) => `hsla(184, 10%, ${l}%, 1)`,

    neutral: (l: number) => `hsla(276, 3%, ${l}%, 1)`,

    // 184, 10%, 33%
    neutralVariant: (l: number) => `hsla(184, 10%, ${l}%, 1)`,
    // 75, 58%, 36%
    // neutralVariant: (l: number) => `hsla(75, 58%, ${l}%, 1)`,
    // 53, 98%, 65%
    // 53, 98%, 40%
    // neutralVariant: (l: number) => `hsla(53, 98%, ${l}%, 1)`,

    // 354, 65%, 59%
    // 4, 71%, 62%

    error: (l: number) => `hsla(3, 71%, ${l}%, 1)`,
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
        primary: palette.primary(40),
        primaryContainer: palette.primary(90),
        secondary: palette.secondary(40),
        secondaryContainer: palette.secondary(90),
        tertiary: palette.tertiary(40),
        tertiaryContainer: palette.tertiary(90),
        surface: palette.neutral(99),
        surfaceVariant: palette.neutralVariant(90),
        surfaceDisabled: color(palette.neutral(10))
            .alpha(opacity.level2)
            .rgb()
            .string(),
        background: palette.neutral(99),
        error: palette.error(40),
        errorContainer: palette.error(90),
        onPrimary: palette.primary(100),
        onPrimaryContainer: palette.primary(10),
        onSecondary: palette.secondary(100),
        onSecondaryContainer: palette.secondary(10),
        onTertiary: palette.tertiary(100),
        onTertiaryContainer: palette.tertiary(10),
        onSurface: palette.neutral(10),
        onSurfaceVariant: palette.neutralVariant(30),
        onSurfaceDisabled: color(palette.neutral(10))
            .alpha(opacity.level4)
            .rgb()
            .string(),
        onError: palette.error(100),
        onErrorContainer: palette.error(10),
        onBackground: palette.neutral(10),
        outline: palette.neutralVariant(50),
        outlineVariant: palette.neutralVariant(80),
        inverseSurface: palette.neutral(20),
        inverseOnSurface: palette.neutral(95),
        inversePrimary: palette.primary(80),
        shadow: palette.neutral(0),
        scrim: palette.neutral(0),
        backdrop: color(palette.neutralVariant(20)).alpha(0.4).rgb().string(),
        elevation: {
            level0: 'transparent',
            // Note: Color values with transparency cause RN to transfer shadows to children nodes
            // instead of View component in Surface. Providing solid background fixes the issue.
            // Opaque color values generated with `palette.primary99` used as background
            // Ref:
            // https://borderleft.com/toolbox/rgba/
            // https://tdekoning.github.io/rgba-converter/
            // http://marcodiiga.github.io/rgba-to-rgb-conversion
            // https://colorffy.com/color-converter/hex-to-hsl
            level1: 'hsl(189, 33%, 96%)', // palette.primary40, alpha 0.05
            level2: 'hsl(192, 33%, 94%)', // palette.primary40, alpha 0.08
            level3: 'hsl(194, 33%, 92%)', // palette.primary40, alpha 0.11
            level4: 'hsl(193, 33%, 92%)', // palette.primary40, alpha 0.12
            level5: 'hsl(191, 33%, 91%)', // palette.primary40, alpha 0.14
        },
    },
};