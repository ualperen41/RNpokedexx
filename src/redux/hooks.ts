import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

// Giris yapan kullanicinin favori id listesi
const EMPTY: string[] = [];
export const useCurrentFavorites = () =>
  useAppSelector(state => {
    const user = state.auth.currentUser;
    return user ? state.favorites.byUser[user.id] ?? EMPTY : EMPTY;
  });
