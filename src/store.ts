import createStore from 'unistore';
import devtools from 'unistore/devtools';

export interface StoreState {
    count: number;
}

export interface ActionCreators {
    increment: Function;
}

const initialState: StoreState = { count: 0 };

export const actions: ActionCreators = {
    increment(state: StoreState): Partial<StoreState> {
        return { count: state.count + 1 };
    },
};

export const store =
    process.env.NODE_ENV === 'production'
        ? createStore(initialState)
        : devtools(createStore(initialState));
