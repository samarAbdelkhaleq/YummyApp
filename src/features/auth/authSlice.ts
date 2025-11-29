import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../../Types';
import { loginService } from '../../services/authServices';
import { setToken } from '../../services/utils/helperToken';

export const login = createAsyncThunk(
  'auth/login',
  async ({ userName, password }: { userName: string; password: string }, thunkAPI) => {
    const response = await loginService(userName, password);
    console.log('Login response:', response);
    if (response) {
      await setToken(response.accessToken);
    }
    return response;
  },
);

const initialState: AuthState = {
  userInfo: null,
  isLoading: false,
  error: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isLoading = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message || 'Something went wrong';
    });
  },
});

export const { logoutUser } = authSlice.actions;

export default authSlice.reducer;
