import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  // Her kullanicinin favori pokemon id'leri: { [userId]: ['001', '004'] }
  byUser: Record<string, string[]>;
}

const initialState: FavoritesState = {
  byUser: {},
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (
      state,
      action: PayloadAction<{ userId: string; pokemonId: string }>,
    ) => {
      const { userId, pokemonId } = action.payload;
      const list = state.byUser[userId] ?? [];
      state.byUser[userId] = list.includes(pokemonId)
        ? list.filter(id => id !== pokemonId)
        : [...list, pokemonId];
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
