import { configureStore } from '@reduxjs/toolkit';
import toggleButtonReducer from './toggleButtonSlice';
import toggleAddLinkModelReducer from './toggleAddModelSlice';

import userReducer from './userSlice';

export default configureStore({
  reducer: {
    toggleButton:toggleButtonReducer,
    user:userReducer,
    addLinkModel:toggleAddLinkModelReducer,
  },
})