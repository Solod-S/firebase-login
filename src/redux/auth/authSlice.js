import { createSlice } from '@reduxjs/toolkit'
import * as authOperation from '../auth/authOperation'

const initialState = {
  user: {},
  isloggedIn: false,
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(authOperation.googleLogIn.fulfilled, (state, action) => {
        const { payload } = action
        state.user = payload

        state.isloggedIn = true
      })
      .addCase(authOperation.emailLogIn.fulfilled, (state, action) => {
        const { payload } = action
        state.user = payload
        state.isloggedIn = true
      })
      .addCase(authOperation.emailSignUp.fulfilled, (state, action) => {
        const { payload } = action
        state.user = payload
        state.isloggedIn = true
      })
      .addCase(authOperation.logOut.fulfilled, (state, _) => {
        state.user = {}
        state.isloggedIn = false
      })
      .addCase(authOperation.updateUserData.fulfilled, (state, action) => {
        const { payload } = action
        state.user = payload
        state.isloggedIn = true
      })
      .addCase(authOperation.googleLogIn.rejected, (state, _) => {
        state.user = {}
        state.isloggedIn = false
      })
      .addCase(authOperation.emailLogIn.rejected, (state, _) => {
        state.user = {}
        state.isloggedIn = false
      })
      .addCase(authOperation.emailSignUp.rejected, (state, _) => {
        state.user = {}
        state.isloggedIn = false
      })
      .addCase(authOperation.logOut.rejected, (state, _) => {
        state.user = {}
        state.isloggedIn = false
      })
      .addCase(authOperation.updateUserData.rejected, (state, _) => {
        state.user = {}
        state.isloggedIn = false
      })
  },
})

export default AuthSlice.reducer
