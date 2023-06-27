import {useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getAnswer,getLanguages } from '../app/actions';
import Select from 'react-select'



export default function MainPage() {
  const state = useSelector((store)=>store)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getLanguages())
  },[])

  const [text,setText] = useState("");
  const [sourceLang,setSourceLang] = useState(
    {value: 'en', label: 'English'}
  );
  const [targetLang,setTargetLang] = useState(
    {value: 'ku', label: 'Kurdish (Kurmanji)'}
  );
  const [answer,setAnswer] = useState('')

 
  const handleClick=()=>{
      if(!text){
        return alert("please fill the blank")
      }
      dispatch(getAnswer({text,sourceLang,targetLang}));
      setAnswer(state.answer)

      console.log("<>>TEXT",state);
  }
  const sign = "<-->"
  const changeLang =  () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(answer); /* we can use usRef also */
    setAnswer(text);
  }
  return (
    <>
      <h1>Translator</h1>
      <div className='container'>
        <div className='left'>
         <Select 
             className='select' 
             options={state.languages} 
             isLoading={state.isLoading}
             onChange={(e) => setSourceLang(e)}
             value={sourceLang}
             />
          <textarea 
                value={text}
                type="text" 
                onChange={(e)=> setText(e.target.value)}
                />
        </div>
        <button onClick={changeLang} className='change-btn'>{sign}</button>
        <div className='right'>
         <Select 
              className='select' 
              options={state.languages}
              isLoading={state.isLoading}
              onChange={(e) => setTargetLang(e)}
              value={targetLang}
              />
          <textarea className='disabled-area' disabled value={answer} type="text" />
        </div>
      </div>
      <button onClick={handleClick} >Translate</button>
    </>

  )
};
