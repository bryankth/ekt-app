import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './';
import { productSlice } from './';
import { modalSlice } from './modalSlice'


export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        product:  productSlice.reducer,
        modal:    modalSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})