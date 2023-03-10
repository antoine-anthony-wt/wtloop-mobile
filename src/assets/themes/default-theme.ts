import { createTheme } from '@rneui/themed';
import { colors, radius, spacing, typography } from './constants';

const defaultTheme = createTheme({
  lightColors: {
    primary: colors.mint,
    secondary: colors.darkMint,
    darkMintSecondary: colors.darkMintSecondary,
    white: colors.white,
    black: colors.black,
    grey0: colors.grey,
    grey1: colors.lightGrey,
    grey2: colors.extraLightGrey,
    grey3: colors.darkGrey,
    grey4: colors.lightGreySecondary,
    divider: colors.lightGrey,
    background: colors.white,
    placeholder: colors.grey,
    shadow: colors.grey,
  },
  spacing,
  radius,
  typography,
  mode: 'light',
});

export default defaultTheme;
