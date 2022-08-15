import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface IFiles {
  id?: string;
  uri: string;
  title: string;
  size: number;
  stored: string;
}

type IStateReducer = IFiles[];

const files = createSlice({
  name: 'files',
  initialState: [] as IStateReducer,
  reducers: {
    addFile(state, action: PayloadAction<{file: IFiles}>) {
      state.push(action.payload.file);
    },
  },
});

export const {addFile} = files.actions;

export default files.reducer;

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
*/
