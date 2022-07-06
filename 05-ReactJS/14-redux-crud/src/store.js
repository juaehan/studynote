import {configureStore} from '@reduxjs/toolkit';
import DepartmentSlice from './slices/DepartmentSlice.js';

const store = configureStore({
    reducer: {
        DepartmentSlice: DepartmentSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;