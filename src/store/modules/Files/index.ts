import {Alert} from 'react-native';
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
      try {
        state.push(action.payload.file);
        Alert.alert('Info', 'Arquivo salvo');
      } catch (error) {
        Alert.alert('Erro', 'Erro ao salvar arquivo');
      }
    },
    cleanFiles(state) {
      state.splice(0, state.length);
    },
  },
});

export const {addFile, cleanFiles} = files.actions;

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
