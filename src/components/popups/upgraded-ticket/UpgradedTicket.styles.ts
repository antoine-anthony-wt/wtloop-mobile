import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles(({ colors, radius, typography }) => {
  return {
    container: {
      width: 340,
      height: 600,
      backgroundColor: colors.background,
      borderRadius: radius.xs,
      display: 'flex',
    },
    closeIconContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    closeIcon: {
      marginTop: 10,
      marginLeft: 299,
      marginRight: 10,
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
        isUnderline: false,
        lineHeight: 35,
        fontWeight: '600',
      }).default,
      fontSize: 30,
      alignSelf: 'center',
      marginBottom: 10,
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
      marginBottom: 10,
    },
  };
});

export default useStyles;
