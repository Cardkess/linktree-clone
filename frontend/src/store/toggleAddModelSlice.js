import { createSlice } from '@reduxjs/toolkit'

export const toggleAddModelSlice = createSlice({
  name: 'toggleAddLinkModel',
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
export const { toggle } = toggleAddModelSlice.actions

export default toggleAddModelSlice.reducer