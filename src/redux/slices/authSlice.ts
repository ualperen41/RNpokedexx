import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/data/user';

interface AuthState {
  users: User[]; // Kayit olan tum kullanicilar
  currentUser: User | null; // Giris yapmis kullanici
  error: string | null;
}

const initialState: AuthState = {
  users: [],
  currentUser: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (
      state,
      action: PayloadAction<{ name: string; email: string; password: string }>,
    ) => {
      const name = action.payload.name.trim();
      const email = action.payload.email.trim().toLowerCase();
      const password = action.payload.password;

      if (!name || !email || !password) {
        state.error = 'Lütfen tüm alanları doldurun.';
        return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        state.error = 'Geçerli bir e-mail adresi girin.';
        return;
      }
      if (password.length < 6) {
        state.error = 'Şifre en az 6 karakter olmalı.';
        return;
      }
      if (state.users.some(u => u.email === email)) {
        state.error = 'Bu e-mail ile kayıtlı bir hesap zaten var.';
        return;
      }

      const newUser: User = { id: Date.now().toString(), name, email, password };
      state.users.push(newUser);
      // Kayit olduktan sonra otomatik giris yap
      state.currentUser = newUser;
      state.error = null;
    },
    login: (state, action: PayloadAction<{ email: string; password: string }>) => {
      const email = action.payload.email.trim().toLowerCase();
      const user = state.users.find(
        u => u.email === email && u.password === action.payload.password,
      );
      if (!user) {
        state.error = 'E-mail veya şifre hatalı.';
        return;
      }
      state.currentUser = user;
      state.error = null;
    },
    logout: state => {
      state.currentUser = null;
      state.error = null;
    },
    clearError: state => {
      state.error = null;
    },
  },
});

export const { register, login, logout, clearError } = authSlice.actions;
export default authSlice.reducer;
