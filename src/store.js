import { configureStore } from '@reduxjs/toolkit';
import store from './store.js';
import cartReducer from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store
