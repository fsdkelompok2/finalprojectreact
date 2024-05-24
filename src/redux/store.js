import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import cartReducer from './features/cartSlice'
import { authAPI } from './api/auth'

export const store = configureStore({
  reducer: {
    auth: userReducer,
    cart: cartReducer,
    [authAPI.reducerPath]: authAPI.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
    authAPI.middleware
  ]),
})