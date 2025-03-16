import hfObject from "./api";

const generate = async (queryEmail,toneEmail)=>{ 
  const response= await hfObject.inference.textGeneration({
    model: hfObject.model,
    data: "Convert the following natural language into email with the respective tone /n/n ${queryEmail /n toneEmail}.",
    parameters:{
      max_tokens: 100,
      temperature: 2,
    }
  });
  return response.data.choices[0].text;
};

export default generate;