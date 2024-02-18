import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/userReducer';

const store = configureStore({
  reducer: rootReducer,
  // Diğer configureStore seçenekleri buraya eklenebilir
});

export default store;
