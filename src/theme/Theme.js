import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import Fonts from "../fonts";

const fontFamilyRoboto = {
    fontFamily: [
        "Roboto",
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(",")
};

const fontFamilyMetropolis = {
    fontFamily: [
        "Metropolis",
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(","),
    letterSpacing: "0.015rem"
};

const fontFamilyMetropolisExtra = {
    fontFamily: [
        "Metropolis",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji"
    ].join(","),
    letterSpacing: "0.015rem"
};

const lightMuiTheme = createMuiTheme({
    type: "light",
    palette: {
        primary: {
            main: "#03a9f4",
            light: "#4FC3F7",
            contrastText: "#fff",
            dark: "#039BE5"
        },
        error: {
            main: "#f44336",
            light: "#E57373",
            contrastText: "#fff",
            dark: "#D32F2F"
        },
        background: {
            default: "#fff"
        }
    },
    typography: {
        ...fontFamilyMetropolisExtra,
        overline: {
            fontWeight: 400,
            fontSize: "0.87rem"
        }
    },
    shape: {
        borderRadius: "0.5rem"
    },
    overrides: {
        MuiCssBaseline: {
            "@global": {
                "@font-face": [
                    Fonts.MetropolisRegular,
                    Fonts.MetropolisBold,
                    Fonts.RobotoRegular,
                    Fonts.RobotoMedium,
                    Fonts.RobotoBold
                ]
            }
        },
        MuiListItemText: {
            primary: {
                ...fontFamilyMetropolisExtra,
                fontWeight: 400,
                fontSize: "0.87rem"
            }
        }
    },
    custom: {
        fontFamily: {
            roboto: fontFamilyRoboto,
            metropolis: fontFamilyMetropolis
        }
    }
});
export const Light = responsiveFontSizes(lightMuiTheme);