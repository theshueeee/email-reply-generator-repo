import {HfInference} from "@huggingface/inference";
import dotenv from "dotenv";

dotenv.config();

const HF_ACCESS_TOKEN = process.env.HUGGINGFACE_TOKEN;
const inference = new HfInference(HF_ACCESS_TOKEN);
const model = "deepseek-ai/DeepSeek-R1";


if (!HF_ACCESS_TOKEN){
  console.log("API key not set up")
  process.exit(1)
}

const hfObject = {
  inference,
  model
};

export default hfObject;





