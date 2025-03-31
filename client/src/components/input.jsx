import { useState } from "react";



export const Input = ()=>{
const [inputEmail, setInputEmail]=useState("");
const [inputTone,setInputTone]=useState("");
const [emailGenerated, setEmailGenerated]=useState("");
const [isLoading, setIsLoading]=useState(false);
const [outputGenerated, setOutputGenerated]=useState(false);

const onSubmitForm = async (e)=>{
  if (inputTone==="" || inputEmail===""){
    alert("Please enter email or select tone")
  }else{
  setIsLoading(true);
  setEmailGenerated(await generateResponse());
  setIsLoading(false);
  setOutputGenerated(true);
  };
}

const generateResponse = async () => {
  const response = await fetch("http://localhost:3005/generate",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      queryEmail: inputEmail,
      toneEmail: inputTone,
    }),
  });
  const data = await response.json();
  return data.response;
};

const backButton = ()=>{

}

const cleanEmailResponse = (response) => {
  // Find the index where "Subject:" appears
  const startIndex = response.indexOf("Subject: Re:" || "Subject: ");
  // If "Subject:" is found, return only that part; otherwise, return the full response
  return startIndex !== -1 ? response.substring(startIndex) : response;
};

const toneOptions = ["Select Tone","Professional", "Friendly", "Funny", "Formal", "Informal"];

return (
  <div className="flex flex-col items-center justify-center mt-10 px-4">
    {/* Title */}
    <p className="text-3xl text-lime-600 font-mono font-extrabold mb-6 text-center">
      Enter Email to Generate Reply
    </p>

    {/* Email Input */}
    <textarea
      className="border-2 rounded-lg border-lime-600 w-full max-w-[400px] h-32 font-mono text-lime-600 p-3 focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-300"
      placeholder="Enter Email"
      onChange={(e) => setInputEmail(e.target.value)}
    />

    {/* Tone Selection */}
    <select
      value={inputTone}
      onChange={(e) =>
        e.target.value === toneOptions[0]
          ? alert("Please select a tone")
          : setInputTone(e.target.value)
      }
      className="ring-1 rounded-lg ring-lime-600 mt-4 w-full max-w-[250px] h-10 p-2 font-mono font-semibold text-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 transition duration-300"
    >
      {toneOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>

    {/* Submit Button */}
    <button
      className={`ring-1 rounded-lg ring-lime-600 mt-4 w-full max-w-[250px] h-10 p-2 font-mono font-semibold text-lime-600 hover:bg-lime-600 hover:text-white transition duration-300 ${
        isLoading ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onSubmitForm}
      disabled={isLoading}
    >
      {isLoading ? "Generating..." : "Submit"}
    </button>

    {/* Loading Spinner */}
    {isLoading && (
      <div className="mt-4 flex flex-col items-center">
        <div className="w-10 h-10 border-4 border-lime-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-lime-600 font-mono">Generating response...</p>
      </div>
    )}

    {/* Styled Response Container */}
    {outputGenerated && (
      <div className="flex flex-col items-center justify-center mt-6">
        <p
          className="w-full max-w-[400px] border-2 border-lime-600 rounded-lg p-4 bg-lime-100 text-lime-800 font-mono shadow-md"
          dangerouslySetInnerHTML={{
            __html: cleanEmailResponse(emailGenerated).replace(/\n/g, "<br/>"),
          }}
        />
      </div>
    )}
  </div>
);

}