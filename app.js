const cors = require("cors");
const express = require("express");
const chatBotRouter = require("./routes/chatbot.js");
const shopifyRouter = require("./routes/shopify.js");

const app = express();
//const port = 3000;

const port = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: ["https://aicb-client.onrender.com", "http://localhost:5173"],
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
  })
);

app.use("/chat", chatBotRouter);
app.use("/shopify", shopifyRouter);

app.listen(port, () => {
  console.log(`Nuusero Chat Bot Running on port ${port}`);
});
