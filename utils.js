function RGBAToHSLA(rgba) {
    let sep = rgba.indexOf(",") > -1 ? "," : " ";
    rgba = rgba.substr(5).split(")")[0].split(sep);

    // Strip the slash if using space-separated syntax
    if (rgba.indexOf("/") > -1)
        rgba.splice(3, 1);

    for (let R in rgba) {
        let r = rgba[R];
        if (r.indexOf("%") > -1) {
            let p = r.substr(0, r.length - 1) / 100;

            if (R < 3) {
                rgba[R] = Math.round(p * 255);
            } else {
                rgba[R] = p;
            }
        }
    }

    // Make r, g, and b fractions of 1
    let r = rgba[0] / 255,
        g = rgba[1] / 255,
        b = rgba[2] / 255,
        a = rgba[3];

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    s = Math.round(s);
    l = Math.round(l);

    return "hsla(" + h + "," + s + "%," + l + "%," + a + ")";
}

const colorPalette = {
    primary100: 'rgba(255, 255, 255, 1)',
    primary99: 'rgba(255, 251, 254, 1)',
    primary95: 'rgba(246, 237, 255, 1)',
    primary90: 'rgba(234, 221, 255, 1)',
    primary80: 'rgba(208, 188, 255, 1)',
    primary70: 'rgba(182, 157, 248, 1)',
    primary60: 'rgba(154, 130, 219, 1)',
    primary50: 'rgba(127, 103, 190, 1)',
    primary40: 'rgba(103, 80, 164, 1)',
    primary30: 'rgba(79, 55, 139, 1)',
    primary20: 'rgba(56, 30, 114, 1)',
    primary10: 'rgba(33, 0, 93, 1)',
    primary0: 'rgba(0, 0, 0, 1)',
    secondary100: 'rgba(255, 255, 255, 1)',
    secondary99: 'rgba(255, 251, 254, 1)',
    secondary95: 'rgba(246, 237, 255, 1)',
    secondary90: 'rgba(232, 222, 248, 1)',
    secondary80: 'rgba(204, 194, 220, 1)',
    secondary70: 'rgba(176, 167, 192, 1)',
    secondary60: 'rgba(149, 141, 165, 1)',
    secondary50: 'rgba(122, 114, 137, 1)',
    secondary40: 'rgba(98, 91, 113, 1)',
    secondary30: 'rgba(74, 68, 88, 1)',
    secondary20: 'rgba(51, 45, 65, 1)',
    secondary10: 'rgba(29, 25, 43, 1)',
    secondary0: 'rgba(0, 0, 0, 1)',
    tertiary100: 'rgba(255, 255, 255, 1)',
    tertiary99: 'rgba(255, 251, 250, 1)',
    tertiary95: 'rgba(255, 236, 241, 1)',
    tertiary90: 'rgba(255, 216, 228, 1)',
    tertiary80: 'rgba(239, 184, 200, 1)',
    tertiary70: 'rgba(210, 157, 172, 1)',
    tertiary60: 'rgba(181, 131, 146, 1)',
    tertiary50: 'rgba(152, 105, 119, 1)',
    tertiary40: 'rgba(125, 82, 96, 1)',
    tertiary30: 'rgba(99, 59, 72, 1)',
    tertiary20: 'rgba(73, 37, 50, 1)',
    tertiary10: 'rgba(49, 17, 29, 1)',
    tertiary0: 'rgba(0, 0, 0, 1)',
    neutral100: 'rgba(255, 255, 255, 1)',
    neutral99: 'rgba(255, 251, 254, 1)',
    neutral95: 'rgba(244, 239, 244, 1)',
    neutral90: 'rgba(230, 225, 229, 1)',
    neutral80: 'rgba(201, 197, 202, 1)',
    neutral70: 'rgba(174, 170, 174, 1)',
    neutral60: 'rgba(147, 144, 148, 1)',
    neutral50: 'rgba(120, 117, 121, 1)',
    neutral40: 'rgba(96, 93, 98, 1)',
    neutral30: 'rgba(72, 70, 73, 1)',
    neutral20: 'rgba(49, 48, 51, 1)',
    neutral10: 'rgba(28, 27, 31, 1)',
    neutral0: 'rgba(0, 0, 0, 1)',
    neutralVariant100: 'rgba(255, 255, 255, 1)',
    neutralVariant99: 'rgba(255, 251, 254, 1)',
    neutralVariant95: 'rgba(245, 238, 250, 1)',
    neutralVariant90: 'rgba(231, 224, 236, 1)',
    neutralVariant80: 'rgba(202, 196, 208, 1)',
    neutralVariant70: 'rgba(174, 169, 180, 1)',
    neutralVariant60: 'rgba(147, 143, 153, 1)',
    neutralVariant50: 'rgba(121, 116, 126, 1)',
    neutralVariant40: 'rgba(96, 93, 102, 1)',
    neutralVariant30: 'rgba(73, 69, 79, 1)',
    neutralVariant20: 'rgba(50, 47, 55, 1)',
    neutralVariant10: 'rgba(29, 26, 34, 1)',
    neutralVariant0: 'rgba(0, 0, 0, 1)',
    error100: 'rgba(255, 255, 255, 1)',
    error99: 'rgba(255, 251, 249, 1)',
    error95: 'rgba(252, 238, 238, 1)',
    error90: 'rgba(249, 222, 220, 1)',
    error80: 'rgba(242, 184, 181, 1)',
    error70: 'rgba(236, 146, 142, 1)',
    error60: 'rgba(228, 105, 98, 1)',
    error50: 'rgba(220, 54, 46, 1)',
    error40: 'rgba(179, 38, 30, 1)',
    error30: 'rgba(140, 29, 24, 1)',
    error20: 'rgba(96, 20, 16, 1)',
    error10: 'rgba(65, 14, 11, 1)',
    error0: 'rgba(0, 0, 0, 1)',
};

const newColorPalette = {};
for (const key in colorPalette) {
    if (Object.hasOwnProperty.call(colorPalette, key)) {
        const element = colorPalette[key];
        newColorPalette[key] = { [element]: RGBAToHSLA(element) };
    }
}
console.log(JSON.stringify(newColorPalette));
