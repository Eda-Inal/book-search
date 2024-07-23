import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchData = createAsyncThunk(
    'books/fetchData',
    async (bookname) => {
        const res = await axios('https://www.googleapis.com/books/v1/volumes?q=${bookname}+inauthor`')
        const data = await res.data
        return data.items
    }
)


export const booksSlice = createSlice({
    name:'books',
    initialState:{
       bookname:"",
       contents: [],
  isLoading: false,
  error: null,
    },
    reducers:{
searchInput:(state,action)  => {
state.bookname = action.payload
}
    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
          state.isLoading = true;
        });
        builder.addCase(fetchData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.contents = action.payload;
        });
        builder.addCase(fetchData.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        });
      },
  

})
 export const {searchInput} = booksSlice.actions
export default booksSlice.reducer;