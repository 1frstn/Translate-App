import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { options } from './constThunks';


export const getAnswer = createAsyncThunk(
    "translate/getAnswer",
    async(param)=>{
    console.log(param.text);
    const encodedParams = new URLSearchParams();
    encodedParams.set('source_language', param.sourceLang.value);
    encodedParams.set('target_language', param.targetLang.value);
    encodedParams.set('text', param.text);

        const options = {
        method: 'POST',
        url: 'https://text-translator2.p.rapidapi.com/translate',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '2fb1dc7c84msh2d969393e50b817p1f6691jsnc3907e9949c4',
            'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
        },
        data: encodedParams,
    };
    const res = await axios.request(options)
    console.log(">>DAta",res.data.data.translatedText);
    return res.data.data.translatedText;
});

export const getLanguages = createAsyncThunk(
    "translate/getLanguages", 
    async () => {
         
        const res = await axios.request(options)
        const languages = res.data.data.languages;
        const newLanguages = languages.map((lang) =>({
            value: lang.code , label: lang.name}));
        return newLanguages;
})