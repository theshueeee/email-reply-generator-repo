import { useState } from "react";


export const Input = ()=>{
const [inputEmail, setInputEmail]=useState("");
const [inputTone,setInputTone]=useState("");

const onSubmitForm = (e)=>{
  if (inputTone===""){
    alert("Please pick a tone!")
  }else{
  e.preventDefault();
  console.log(inputEmail, inputTone);
  };
}

const toneOptions = ["Select Tone","Professional", "Friendly", "Funny", "Angry"];
  return(
    <div>
      <input placeholder="Enter Email" type="text" name="email-description" onChange={(e)=> setInputEmail(e.target.value)}/>
      <select
      value={inputTone}
      onChange={(e) => e.target.value===toneOptions[0]? alert("Please select a tone"):setInputTone(e.target.value)}
      >
      {toneOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
      ))}
      </select>
      <button onClick={onSubmitForm}>Submit</button>
    </div>
  );
}