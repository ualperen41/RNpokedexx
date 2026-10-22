import { StyleSheet } from 'react-native';
import AppColors from '../theme/colors';

const defaultScreenStyle = StyleSheet.create({
  safeAreaView: {
    backgroundColor: AppColors.White,
    flex: 1,
  },
  container: {
    flex: 3,
    backgroundColor: AppColors.White,
    padding: 15,
  },
});

export default defaultScreenStyle;
