import { configureStore } from '@reduxjs/toolkit';
import toggleButtonReducer from './components/toggleButtonSlice';

export default configureStore({
  reducer: {
    toggleButton:toggleButtonReducer,
  },
})