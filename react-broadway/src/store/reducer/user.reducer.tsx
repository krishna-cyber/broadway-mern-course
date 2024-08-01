import { ActionReducerMapBuilder,createAsyncThunk, createSlice } from '@reduxjs/toolkit'



const getLoggedInUserForRedux = createAsyncThunk(
  'User/getLoggedInUserForRedux',
  async (userId: number, thunkAPI) => {
    try {
      const response = await userAPI.fetchById(userId)
      return response.data
    } catch (error) {
      console.log(error)
      
    }
  },
)

const initialState = {
  loggedInUser: null,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setLoggedInUserForRedux: (state, action) => {
      state.loggedInUser = action.payload;
    }
  },
  extraReducers:(builder:ActionReducerMapBuilder<any>)=>{

  }
})

// Action creators are generated for each case reducer function
export const { setLoggedInUserForRedux } = userSlice.actions

export default userSlice.reducer