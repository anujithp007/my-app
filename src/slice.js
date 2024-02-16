import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const counterSlice = createSlice({
  name: 'datafetch',
  initialState,
  reducers: {
    
    fetchdata: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { fetchdata } = counterSlice.actions

export default counterSlice.reducer