import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(({ colors, spacing, radius, typography }) => {
  return {
    container: {
      width: 340,
      height: 600,
      backgroundColor: colors.background,
      borderRadius: radius.xs,
      display: 'flex',
      overflow: 'hidden',
    },
    closeIconContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    closeIcon: {
      marginTop: spacing.md,
      marginRight: spacing.md,
    },
    upgradeTitleContainer: {
      backgroundColor: colors.secondary,
      height: 180,
      width: '100%',
      display: 'flex',
    },
    upgradeImage: {
      height: 271,
      width: '100%',
    },
    upgradeTitle: {
      ...typography({
        color: colors.grey4,
        fontWeight: '600',
      }).default,
      fontSize: 30,
      alignSelf: 'center',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 20,
    },
    upgradeMessageContainer: {
      height: 155,
      width: '100%',
      backgroundColor: colors.background,
    },
    upgradeMessage: {
      ...typography({
        color: colors.darkMintSecondary,
        isUnderline: false,
        lineHeight: 35,
        fontWeight: '600',
      }).default,
      fontSize: 30,
      alignSelf: 'center',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 37,
    },
  };
});

export default useStyles;
