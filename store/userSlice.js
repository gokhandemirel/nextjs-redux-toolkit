import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('user/getUser', async () => {
    return axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8').then((response) => {
        return response.data;
    });
});

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: []
    },
    extraReducers: {
        [getUser.fulfilled]: (state, action) => {
            state.user = action.payload;
        }
    },
});

export default userSlice.reducer;