import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import expensesApi from '../../api/expensesApi'




export interface CounterState {
  value: number,
  status: 'idle' | 'loading' | 'failed' | 'success' | 'pending' | 'fulfilled' | 'rejected' | 'aborted',
  error: string | null,
  postsList: any
}

const initialState: CounterState = {
  value: 0,
  postsList: [],
  status: "idle",
  error: '',
}

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await expensesApi.getExpenses()
    if (response.ok) {
      return response.data
    }
    return Promise.reject(response)
  }
)

export const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    successFetchPostData: (state,actions) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log('actions',actions.payload)
      state.status = "loading";
      state.postsList = actions.payload
      state.status = "success";
    },
    cleanPostData: (state, actions) => {
      state.postsList = [];
    },
    failedFetchPostData: (state, actions) => {
      state.status = "loading";
      state.postsList =  [];
      state.status = "failed";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "success";
        state.postsList = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }

})

// Action creators are generated for each case reducer function
export const {   successFetchPostData,  cleanPostData, failedFetchPostData } = expensesSlice.actions

export default expensesSlice.reducer