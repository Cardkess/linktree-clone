import { configureStore } from '@reduxjs/toolkit';
import toggleButtonReducer from './toggleButtonSlice';
import settingsReducer from './settingsSlice';

import userReducer from './userSlice';

export default configureStore({
  reducer: {
    toggleButton:toggleButtonReducer,
    user:userReducer,
    settings:settingsReducer,
  },
})