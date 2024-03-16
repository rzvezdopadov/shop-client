import { $api } from '@/shared/api/api';
import { configureStore } from '@reduxjs/toolkit';
import { ThunkExtraArg } from './StateSchema';

export const makeStore = () => {
    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: {},
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
