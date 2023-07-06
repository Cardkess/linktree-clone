import { configureStore } from '@reduxjs/toolkit';
import toggleButtonReducer from './toggleButtonSlice';

import userReducer from './userSlice';

export default configureStore({
  reducer: {
    toggleButton:toggleButtonReducer,
    user:userReducer,
  },
})