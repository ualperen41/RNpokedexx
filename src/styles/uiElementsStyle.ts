import { StyleSheet } from 'react-native';
import AppColors from '../theme/colors';

const buttonStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,

    paddingVertical: 20,
  },
  filledContainer: {
    backgroundColor: AppColors.Azul,
    borderRadius: 100,
  },
  outlineContainer: {},
  title: {  fontSize: 18, fontWeight: '600' },
  filledTitle: { color: AppColors.White },
  outlineTitle: { color: AppColors.Azul},
});

export { buttonStyle };
