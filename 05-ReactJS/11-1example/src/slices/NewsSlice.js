import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getNewsList = createAsyncThunk("NewsSlice/getNewsList", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get('http://localhost:3001/news');
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

const NewsSlice = createSlice({
    name: 'news',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getNewsList.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [getNewsList.fulfilled] : (state, {payload}) => {
            return {
                data: payload?.data,
                loading:false,
                error:null
            }
        },
        [getNewsList.rejected] : (state, {payload}) => {
            return {
                data: payload?.data,
                loading: false,
                error: {
                    code: payload.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    }
});

export default NewsSlice.reducer;