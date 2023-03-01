import { createTheme } from '@rneui/themed';
import { colors } from './constants/colors';

const defaultTheme = createTheme({
  lightColors: {
    primary: colors.mint,
    white: colors.white,
    black: colors.black,
    grey0: colors.grey,
    grey1: colors.lightGrey,
    grey2: colors.extraLightGrey,
    grey3: colors.darkGrey,
    divider: colors.lightGrey,
    background: colors.white,
  },
  mode: 'light',
});

export default defaultTheme;
