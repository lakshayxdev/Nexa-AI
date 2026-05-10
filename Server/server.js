const express=require('express');
const cors=require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const buildPrompt = require("./Utilities/promptBuilder");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");


const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


const genAI=new GoogleGenerativeAI(process.env.Gemini_API_Key);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash-lite",
});

app.get("/", (req,res) => {
  res.send("Nexa AI Backend is running");
})

app.post("/ask", async (req, res) => {
  try {

    const {
      prompt,
      mode,
      language,
    } = req.body;


    // ================= BUILD PROMPT =================

    const finalPrompt = buildPrompt(
      prompt,
      mode,
      language
    );


    // ================= GEMINI RESPONSE =================

    const result = await model.generateContent(
      finalPrompt
    );

    const response = result.response;

    let text = response.text();


    // ================= CLEAN RESPONSE =================

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();


    // ================= PARSE JSON =================

    let parsed;

    try {

      parsed = JSON.parse(text);

    } catch (error) {

      console.error("JSON Parse Error:", error);

      return res.status(500).json({
        message: "Failed to parse AI response",
      });
    }


    // ================= SEND RESPONSE =================

    res.json(parsed);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

const PORT=5000;
connectDB();
app.listen(PORT, ()=> {
  console.log(`Server is running on port : ${PORT}`);
})