import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
/***
 * Try to persist data using persist
 */
import storage from 'redux-persist/es/storage'
import {
    persistReducer, PersistConfig, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';

//set persist configs 
//and also encrypt the data using the secret key 123456
const persistConfig: PersistConfig<ReturnType<typeof baseReducers>> = {
    key: 'root',
    version: 1,
    storage,
    transforms: [
        encryptTransform({
            secretKey: import.meta.env.VITE_SECRET_KEY,
            onError: (error) => {
                console.error('Encryption error:', error); // Log the error for debugging
            },
        }),
    ],
}
//combine the reducers
const baseReducers = combineReducers({
    user: userSlice
})
//define persisted reducers 
const persistedReducers = persistReducer(persistConfig, baseReducers)
const store = configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export default store