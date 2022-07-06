import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/department';

export const getList = createAsyncThunk("DepartmentSlice/getList", async (payload, {rejectWithValue}) => {
    let result = null;

    const params = {};

    if(payload?.dname){
        params.dname = payload.dname;
    }

    try{
        result = await axios.get(API_URL, {
            params: params
        });
    }catch (err){
        console.error(err);
        result = rejectWithValue(err.response);
    }
    return result;
});

export const getItem = createAsyncThunk("DepartmentSlice/getItem", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.get(`${API_URL}/${payload.id}`);
    }catch(err){
        result = rejectWithValue(err.response);
    }
    return result;
});

export const postItem = createAsyncThunk("DepartmentSlice/postItem", async (payload, {rejectWithValue}) => {
    let result = null;
    
    try{
        result = await axios.post(API_URL, {
            dname: payload.dname,
            loc: payload.log
        });
    }catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

export const putItem = createAsyncThunk("DepartmentSlice/putItem", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.put(`${API_URL}/${payload.id}`, {
            dname: payload.dname,
            loc: payload.log
        });
    }catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

export const deleteItem = createAsyncThunk("DepartmentSlice/deleteItem", async (payload, {rejectWithValue}) => {
    let result = null;

    try{
        result = await axios.delete(`${API_URL}/${payload.id}`);
    }catch (err){
        result = rejectWithValue(err.response);
    }
    return result;
});

const DepartmentSlice = createSlice({
    name: 'DepartmentSlice',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getList.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [getList.fulfilled] : (state, {payload}) => {
            return{
                data: payload.data,
                loading:false,
                error:null
            }
        },
        [getList.rejected] : (state, {payload}) => {
            return{
                ...state,
                loading: false,
                error: {
                    conde: payload?.status ? payload.status:500,
                    message: payload?.statusText ? payload.statusText: 'Server Error'
                }
            }
        },

        [getItem.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [getItem.fulfilled] : (state, {payload}) => {
            return{
                data: payload.data,
                loading:false,
                error:null
            }
        },
        [getItem.rejected] : (state, {payload}) => {
            return{
                ...state,
                loading: false,
                error: {
                    conde: payload?.status ? payload.status:500,
                    message: payload?.statusText ? payload.statusText: 'Server Error'
                }
            }
        },

        [postItem.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [postItem.fulfilled] : (state, {meta, payload}) => {
            let data = null;

            if(Array.isArray(state.data)){
                data = [...state.data];
                data.push(payload.data);
            }else{
                data = payload.data;
            }

            return{
                data: data,
                loading:false,
                error:null
            }
        },
        [postItem.rejected] : (state, {payload}) => {
            return{
                ...state,
                loading: false,
                error: {
                    conde: payload?.status ? payload.status:500,
                    message: payload?.statusText ? payload.statusText: 'Server Error'
                }
            }
        },

        [putItem.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [putItem.fulfilled] : (state, {meta, payload}) => {
            let data = null;

            if (Array.isArray(state.data)){
                data = [...state.data];

                const index = data.findIndex(element => element.id === parseInt(meta.arg.id));

                if(index !== undefined){
                    data.splice(index, 1, payload.data);
                }
            } else {
                data = payload.data;
            }

            return {
                data: data,
                loading: false,
                error: null
            }
        },
        [putItem.rejected] : (state, {payload}) => {
            return{
                ...state,
                loading: false,
                error: {
                    conde: payload?.status ? payload.status:500,
                    message: payload?.statusText ? payload.statusText: 'Server Error'
                }
            }
        },

        [deleteItem.pending] : (state, {payload}) => {
            return {...state, loading: true}
        },
        [deleteItem.fulfilled] : (state, {meta, payload}) => {
            let data = null;

            if (Array.isArray(state.data)){
                data = [...state.data];

                const index = data.findIndex(element => element.id === parseInt(meta.arg.id));
                console.log('index=' + index);

                if(index !== undefined){
                    data.splice(index, 1);
                }
            }
        },
        [deleteItem.rejected]: (state, {payload}) => {
            return {
                ...state,
                loading: false,
                error: {
                    conde: payload?.status ? payload.status:500,
                    message: payload?.statusText ? payload.statusText: 'Server Error'
                }
            }
        }
    }
});

export default DepartmentSlice.reducer;