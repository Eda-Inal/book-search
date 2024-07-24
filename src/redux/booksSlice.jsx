import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchData = createAsyncThunk(
    'books/fetchData',
    async (query) => {
      const res = await axios(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = res.data;
      return data.items;
    }
  );



export const booksSlice = createSlice({
    name:'books',
    initialState:{
       bookname:"",
       contents: [],
  isLoading: false,
  error: null,
  toast:false
    },
    reducers:{
searchInput:(state,action)  => {
state.bookname = action.payload
},setToast:(state,action) =>{
  state.toast= action.payload
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
 export const {searchInput,setToast} = booksSlice.actions
export default booksSlice.reducer;