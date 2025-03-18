import express from "express"
import cors from "cors"
import generate from "./generate.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3005;

app.get("/", (req,res) =>{
  res.send("Server successfully created")
});

app.post("/generate", async (req,res) =>{
    const queryEmail = req.body.queryEmail;
    const toneEmail = req.body.toneEmail;
    try{
      const generatedEmail = await generate(queryEmail,toneEmail);
      res.json ({
        response: generatedEmail
      });
    } catch(err){
      console.error(err);
      res.status(500).send("Internal Server Error")
    }
});


app.listen(port, ()=>{
  console.log(`Listening on port ${port}`)
});