import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getCovid19Data = createAsyncThunk("Covid19Slice/getCovid19Data", async (payload, {rejectWithValue}) => {
    const params = {};
    
    if(payload.startDate){
        params.date_gte = payload.startDate;
    }
    if(payload.endDate){
        params.date_lte = payload.endDate;
    }

    let result = null;
    try{
        result = await axios.get('http://localhost:3001/covid19',{params : params});

        if(result.data.faultInfo !== undefined) {
            const err = new Error();
            err.response = {status: 500, statusText: result.data.faultInfo.message};
            throw err;
        }
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

const Covid19Slice = createSlice({
    name: 'Covid19Slice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getCovid19Data.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [getCovid19Data.fulfilled] : (state, {payload}) => {
            return {
                data: payload?.data,
                loading:false,
                error:null
            }
        },
        [getCovid19Data.rejected] : (state, {payload}) => {
            return {
                data: payload?.data,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error'
                }
            }
        }
    }
});

export default Covid19Slice.reducer;