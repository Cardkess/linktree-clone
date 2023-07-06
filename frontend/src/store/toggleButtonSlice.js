import { createSlice } from '@reduxjs/toolkit'

export const toggleButtonSlice = createSlice({
  name: 'toggleButton',
  initialState: {
    value: 0,
  },
  reducers: {
    toggle: (state) => {
      
      if (state.value) {
        state.value = 0
      } else {
        state.value = 1
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle } = toggleButtonSlice.actions

export default toggleButtonSlice.reducer