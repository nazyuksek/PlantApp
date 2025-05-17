import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface PlantState {
  query: string;
}

const initialState: PlantState = {
  query: '',
};

const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    clearQuery(state) {
      state.query = '';
    },
  },
});

export const {setQuery, clearQuery} = plantsSlice.actions;

export default plantsSlice.reducer;
