import { createAsyncThunk, createSlice, Slice } from '@reduxjs/toolkit'
import httpService from '../../services/http.service';


export const getLoggedInUserForRedux :any = createAsyncThunk(
  'User/getLoggedInUserForRedux',
  async () => {
    try {
      const response: any = await httpService.getRequest("/auth/me", {
        auth: true,
      });
      return response.result
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
)

const initialState = {
  loggedInUser: null,
}

export const userSlice :Slice= createSlice({
  name: 'User',
  initialState,
  reducers: {
    setLoggedInUserForRedux: (state, action) => {
      console.log("Action payload: ", action.payload);
      state.loggedInUser = action.payload;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(getLoggedInUserForRedux.fulfilled, (state, action) => {
      // Add user to the state array
      state.loggedInUser = action.payload
    })
    builder.addCase(getLoggedInUserForRedux.rejected, (state) => {
      // Add user to the state array
      state.loggedInUser = null
    })
  }

  
})

// Action creators are generated for each case reducer function
export const { setLoggedInUserForRedux } = userSlice.actions

export default userSlice.reducer