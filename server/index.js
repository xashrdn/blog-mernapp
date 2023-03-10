const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 7000;
const MONGO_URI = process.env.MONGO_URI || '';
const authRoutes = require('./routers/auth');
const blogRoutes = require('./routers/blog');

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(blogRoutes);

// CONNECT
const serverStart = async () => {
    await mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            app.listen(PORT, () => console.log(`Server Listening on: ${PORT}`));
        })
        .catch((error) => console.log(`${error} did not connect`));
};

serverStart();

module.exports = app;
