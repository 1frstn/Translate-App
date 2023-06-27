import {createSlice} from '@reduxjs/toolkit';
import { getAnswer,getLanguages } from './actions';

const initialState = {
    languages:[],
    answer:'',
    isError:false,
    isLoading:true,
}


export const translateSlice = createSlice({
    name:"translate",
    initialState,
    reducers:{},
    extraReducers:{
        [getLanguages.pending] : (state) => {
            state.isLoading = true;
        },
        [getLanguages.fulfilled] : (state,action) => {
            state.isLoading = false;
            state.languages = action.payload;
        },
        [getLanguages.rejected] : (state) => {
            state.isLoading = false;
            state.isError = true;
        },
        [getAnswer.pending]:(state) => {
            state.isLoading = true;
        },

        [getAnswer.fulfilled] : (state,action) => {
            state.isLoading =false;
            state.answer = action.payload;
        },

        [getAnswer.rejected] : (state) => {
           state.isLoading = false;
           state.isError = true;
        } 
    }
});

export const  {language} = translateSlice.actions;

export default translateSlice.reducer;