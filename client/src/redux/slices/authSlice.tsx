import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
  isAuth: boolean
}

const initialState = { isAuth: false } as CounterState

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state) => {
        state.isAuth = true
    },
    unauthUser: (state) => {
        state.isAuth = false
    }
  }
})

export const {authUser, unauthUser} = authSlice.actions
export default authSlice.reducer