import { createAsyncThunk } from '@reduxjs/toolkit'
import * as api from '../../service/API/AuthUserAPI'
import { toast } from 'react-toastify'

export const googleLogIn = createAsyncThunk('auth/google-signin', async (credentials, thunkAPI) => {
  try {
    const data = await api.googleLogIn(credentials)
    setTimeout(() => {
      toast.success(`Wellcome back ${data.displayName ? data.displayName : '!'}`)
    }, 1000)
    return data
  } catch (error) {
    toast.error(`Ooops something went wrong, please try again latter`)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const emailLogIn = createAsyncThunk('auth/email-signin', async (credentials, thunkAPI) => {
  try {
    const data = await api.emailLogIn(credentials)
    setTimeout(() => {
      toast.success(`Wellcome back ${data.displayName ? data.displayName : '!'}`)
    }, 1000)
    return data
  } catch (error) {
    const errorMessage = error.message
    const invalidCredentials = errorMessage.includes('INVALID_LOGIN_CREDENTIALS')

    if (invalidCredentials) {
      toast.error(`Wrong user name or password`)
      return thunkAPI.rejectWithValue(errorMessage)
    }
    toast.error(`Invalid data`)
    return thunkAPI.rejectWithValue(errorMessage)
  }
})

export const emailSignUp = createAsyncThunk('auth/email-signup', async (credentials, thunkAPI) => {
  try {
    const data = await api.emailSignUp(credentials)
    setTimeout(() => {
      toast.success('Welcome aboard!')
    }, 1000)
    return data
  } catch (error) {
    const errorMessage = error.message
    const emailInUse = errorMessage.includes('The email address is already in use by another account')

    if (emailInUse) {
      toast.error(`The email address is already in use by another account`)
      return thunkAPI.rejectWithValue(errorMessage)
    }
    toast.error(`Invalid data`)
    return thunkAPI.rejectWithValue(errorMessage)
  }
})

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    await api.logOut()
    setTimeout(() => {
      toast.success(`You was succefully logged out`)
    }, 1000)
  } catch (error) {
    toast.error(`Ooops something went wrong, please try again latter`)
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const updateUserData = createAsyncThunk('auth/update', async (credentials, thunkAPI) => {
  try {
    const data = await api.updateUserData(credentials)
    toast.success(`User data was successfully updated`)
    return data
  } catch (error) {
    toast.error(`Ooops something went wrong, please try again latter`)
    return thunkAPI.rejectWithValue(error.message)
  }
})
