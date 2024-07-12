require('dotenv').config();

const express = require('express');
const app = express();
const user = require("./routes/user")

app.use(express.json());

app.use("/" , user);

app.listen(process.env.port || 3000, () => {
    console.log(`http://localhost:${process.env.port || 3000}`);
});
