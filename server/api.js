import { InferenceClient } from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HUGGINGFACE_TOKEN;
const hf = new InferenceClient(HF_ACCESS_TOKEN);
const model = "mistralai/Mistral-7B-Instruct-v0.2";


if (!HF_ACCESS_TOKEN){
  console.log("API key not set up")
  process.exit(1)
}

const hfObject = {
  hf,
  model
};

export default hfObject;





