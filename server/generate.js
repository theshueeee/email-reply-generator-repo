import hfObject from "./api.js";

const generate = async (queryEmail, toneEmail) => { 
  const response = await hfObject.hf.textGeneration({
    model: hfObject.model,
    inputs: `As a recipient, please generate a reply to the following email from the sender. Do not paraphrase the original query; instead, respond appropriately based on the given tone.

    Email Query: ${queryEmail}
    Tone: ${toneEmail}
    
    Your response should be formatted as an email and must include:
    - A subject line (e.g., "Subject: [Your Subject Here]")
    - A greeting (e.g., "Dear [Sender's Name],")
    - A well-structured message body with clear paragraphs
    - A closing (e.g., "Best regards," or "Sincerely,")
    - A signature line with your name and any relevant contact information
    
    Ensure the final reply is relevant, clear, and aligns with the specified tone.
    `,
  });



  return response.generated_text;  // The API response structure has `generated_text`, not `.data.choices[0].text`
};

export default generate;
