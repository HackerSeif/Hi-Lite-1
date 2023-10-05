// Import configuration
import { Configuration, OpenAIApi } from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// Setup configuration and initial server settings
...
app.use(bodyParser.json());
app.use(cors());
