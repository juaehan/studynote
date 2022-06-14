import {configureStore} from '@reduxjs/toolkit';
import {createLogger} from 'redux-logger';

import CounterSlice from './slices/CounterSlice';
import DepartmentSlice from './slices/DepartmentSlice';

const logger = createLogger();

const store = configureStore({
    reducer: {
        // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
        counter: CounterSlice,
        department : DepartmentSlice
    },
    // 미들웨어(굳이 사용하지 않아도 됨)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}).concat(logger),
    // redux-devtools-extension을 사용하지 않을 경우 false 혹은 이 라인 명시 안함
    devTools: true
});

export default store;