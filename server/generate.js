import hfObject from "./api.js";

const generate = async (queryEmail, toneEmail) => { 
  const response = await hfObject.hf.textGeneration({
    model: hfObject.model,
    inputs: `As a recipient, please generate a reply to the following email from sender. Do not paraphrase the original query; instead, respond appropriately based on the given tone.
    /n/n
    Email Query: ${queryEmail}  
    /n
    Tone: ${toneEmail}  
    /n/n
    Your response should be relevant, clear, and align with the specified tone.
    `,
  });

  return response.generated_text;  // The API response structure has `generated_text`, not `.data.choices[0].text`
};

export default generate;
