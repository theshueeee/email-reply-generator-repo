import express from "express"
import cors from "cors"

const app = express();
app.use(cors(
));

const port = process.env.PORT || 3005;

app.get("/", (req,res) =>{
  res.send("Server successfully created")
});

app.post("/generate", (req,res) =>{
    const queryEmail = req.body.queryEmail;
    const toneEmail = req.body.toneEmail;
    console.log("Input:",queryEmail,toneEmail);
    res.json({response:"You sent this: ${queryEmail} and ${toneEmail}"});
});


app.listen(port, ()=>{
  console.log("Listening on port ${port}")
});