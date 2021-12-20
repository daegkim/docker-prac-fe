import { createSlice } from '@reduxjs/toolkit'

export const memoSlice = createSlice({
  name: 'memo',
  initialState: {
    newMemo: '',
    memos: []
  },
  reducers: {
    setNewMemo: (state, action) => {
      state.newMemo = action.payload;
    },
    setMemos: (state, action) => {
      state.memos = action.payload;
    },
    addNewMemo: (state) => {
      if(state.newMemo) {
        state.memos = [...state.memos, state.newMemo];
      }
    }
  }
})

export const { setNewMemo, addNewMemo, setMemos } = memoSlice.actions

export const memoReducer = memoSlice.reducer