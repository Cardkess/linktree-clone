import { configureStore } from '@reduxjs/toolkit';
import toggleButtonReducer from './toggleButtonSlice';
export default configureStore({
  reducer: {
    toggleButton:toggleButtonReducer,
  },
})