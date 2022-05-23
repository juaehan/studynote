import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getList = createAsyncThunk('news', async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get('http://localhost:3001/news');
    }catch(err){
        result = rejectWithValue(err.response);
    }
    return result;
})
const NewsSlice = createSlice({
    name: 'news',
    initialState: {
        data: null,
        loading:false,
        error: null
    },

    reducers: {},
    extraReducers: {
        [getList.pending]: (state, {payload}) => {
            return {...state, loading: true}
        },
        [getList.fulfilled] : (state, {payload}) => {
            return{
                data: payload?.data,
                loading: false,
                error: null
            }
        },
        [getList.rejected] : (state, {payload}) => {
            return {
                data: payload?.data,
                loading: false,
                error:{
                    code:payload?.status ? payload.status:500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    }
});
export default NewsSlice.reducer;