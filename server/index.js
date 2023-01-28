const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI || "";
const authRoutes = require("./routers/auth");
const blogRoutes = require("./routers/blog");
const path = require("path");
const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(blogRoutes);

//Vercel

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: __dirname + "/.env" });
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend", "build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
}

// CONNECT

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Listening on: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
