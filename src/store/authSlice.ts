import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../services/AuthServices/RegistrationService';

export interface AuthState {
    user: null | { id: string; email: string};
    accessToken: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;
}

const initialState: AuthState = {
  user:JSON.parse(localStorage.getItem('user')) || null,
  accessToken: localStorage.getItem('token') || null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

// Register
export const register = createAsyncThunk(
  'auth/register',
  async ({firstName, lastName, email, address, phone, password}:{ firstName: string; lastName: string; email: string; address: string; phone: string; password: string }, thunkAPI) => {
    try {
      const response = await authService.register(firstName, lastName, email, address, phone, password);
      localStorage.setItem('user', JSON.stringify(response.user));
      localStorage.setItem('token', response.accessToken);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Registration failed');
    }

  }
)
// export const login = createAsyncThunk(
//     'auth/login',
//     async({email,password}: { email: string; password: string },thunkAPI) => {
//         try{

//         } catch (error:any) {

//     }

// )

// export const logout = createAsyncThunk(
//     await 'auth/logout',
// )

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{},
    extraReducers: (builder) => {    
      builder
        .addCase(register.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.accessToken = action.payload.accessToken;
        })
        .addCase(register.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload as string ?? 'Registration failed';
        });    
    }
})
export default authSlice.reducer