import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    language:'',
    
}


export const translateSlice = createSlice({
    name:"translate",
    initialState,
    reducers:{},
    extraReducers:{
       
     }
});

export const  {language} = translateSlice.actions;

export default translateSlice.reducer;