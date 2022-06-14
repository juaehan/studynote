import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getTrafficList = createAsyncThunk("TrafficSlice/getTrafficList", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get('http://localhost:3001/traffic_acc', {
            params: {
                year: payload.year
            }
        });

        if(result.data.faultInfo !== undefined){
            const err = new Error();
            err.response = {status: 500, statusText: result.data.faultInfo.message};
            throw err;
        }
    } catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

const TrafficSlice = createSlice({
    name: 'traffic',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getTrafficList.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [getTrafficList.fulfilled] : (state, {payload}) => {
            return {
                data: payload?.data,
                loading:false,
                error:null
            }
        },
        [getTrafficList.rejected] : (state, {payload}) => {
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

export default TrafficSlice.reducer;