// Import configuration
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Setup configuration and initial server settings
...
app.use(bodyParser.json());
app.use(cors());
app.post("/", async (req, res) => { 
    ...
    res.json({
        completion: completion.data.choices[0]
    })
});
app.listen(port, ...
    const configuration = new Configuration({
        ...
    }) 
    const openai = new OpenAIApi(configuration);
    const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
console.log(messages)
const { messages } = req.body;
