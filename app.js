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
    origin: "https://nuuserochatbot.netlify.app",
    methods: ["GET,POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/chat", chatBotRouter);
app.use("/shopify", shopifyRouter);

app.listen(port, () => {
  console.log(`Nuusero Chat Bot Running on port ${port}`);
});
