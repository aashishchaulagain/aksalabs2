import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/aksalabs")
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));

app.listen(3000, () => console.log("Server running on port 3000"));





