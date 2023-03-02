import { ScreenWidth } from '@rneui/base';
import { makeStyles } from '@rneui/themed';

const useStyles = makeStyles((theme) => ({
  container: {
    width: ScreenWidth,
    backgroundColor: theme.colors.background,
    borderTopStartRadius: 22,
    borderTopEndRadius: 22,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topSeparator: {
    height: 5,
    backgroundColor: theme.colors.primary,
  },
  bottomSeparator: {
    height: 0.5,
    backgroundColor: theme.colors.divider,
  },
  itineraryContainer: {
    flexDirection: 'row',
  },
  originDestination: {
    color: theme.colors.black,
    fontSize: 20,
    fontWeight: '600',
  },
  travelTime: {
    color: theme.colors.grey0,
    fontWeight: '500',
  },
  travelTimeTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: 4,
  },
  travelTimeTitle: {
    color: theme.colors.secondary,
    fontSize: 12,
    fontWeight: '700',
  },
  arrivalContainer: {
    flex: -1,
    alignItems: 'flex-end',
  },
  arrivalTitle: {
    color: theme.colors.grey3,
    fontWeight: '600',
  },
  arrivalTime: {
    color: theme.colors.primary,
    fontWeight: '800',
  },
  qrCodeButton: {
    borderWidth: 1,
    borderColor: theme.colors.black,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'center',
    marginRight: 12,
  },
}));

export default useStyles;
