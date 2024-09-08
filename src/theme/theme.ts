import { extendTheme, ThemeOverride } from "@chakra-ui/react";




const ThemeCustom: ThemeOverride = {
    colors: {
        green: '#04A51E',
        white: '#FFFFFF',
        grey: '#909090'
    },
    background: {
        gray: '#1D1D1D',
        card: '#262626'
    },
    buttons: {
        before: '#005E0E',
        after: '#04A51E'
    },

    border: {
        gray: '#3F3F3F'
    }
}

export const theme = extendTheme(ThemeCustom satisfies ThemeOverride)