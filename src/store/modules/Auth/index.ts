import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//import {AppDispatch, AppThunk} from '../..';

export type IUser = {
  name: string;
  email: string;
  logged?: boolean;
};

const stock = createSlice({
  name: 'auth',
  initialState: {
    name: '',
    email: '',
    logged: false,
  } as IUser,
  reducers: {
    signIn(state, action: PayloadAction<IUser>) {
      state.logged = true;
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    signOut(state) {
      state.logged = false;
      state.email = '';
      state.name = '';
    },
  },
});

export const {signIn, signOut} = stock.actions;

export default stock.reducer;

// action async
/*
function sleep() {
  return new Promise(resolve => setTimeout(resolve, 3000));
}

export function asyncDecrement(): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep();
    dispatch(decrement());
  };
}

export function asyncIncrement(): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep();
    dispatch(increment());
  };
}

export function asyncIncrementCounter(
  action: PayloadAction<{counter: number}>,
): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep();
    dispatch(incrementCounter({counter: action.payload.counter}));
  };
}

export function asyncDecrementCounter(
  action: PayloadAction<{counter: number}>,
): AppThunk {
  return async function (dispatch: AppDispatch) {
    await sleep();
    dispatch(decrementCounter({counter: action.payload.counter}));
  };
}
*/
