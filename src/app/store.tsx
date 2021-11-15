import { configureStore } from '@reduxjs/toolkit'

import authReducer from 'slices/AuthSlice';
import errorReducer from 'slices/ErrorSlice';


export default configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
  }
});
