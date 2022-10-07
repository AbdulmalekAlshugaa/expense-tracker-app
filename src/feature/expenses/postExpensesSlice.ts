import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import expensesApi from '../../api/expensesApi'
// First, create the thunk
const fetchUserById = createAsyncThunk(
  'posts/postExpenses',
  async (orderData: any, thunkAPI) => {
    const response = await expensesApi.addPost(orderData)
    return response.data
  }
)

interface UsersState {
  entities: []
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
}

const initialState = {
  entities: [],
  loading: 'idle',
} as UsersState

// Then, handle actions in your reducers:
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

// Later, dispatch the thunk as needed in the app
