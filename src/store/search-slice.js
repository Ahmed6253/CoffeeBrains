import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState: { isSearching: false, searchValue: '' },
  reducers: {
    setSearch(state, action) {
      state.isSearching = !state.isSearching;
      state.searchValue = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice;
