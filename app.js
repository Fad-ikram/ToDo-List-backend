const router = require("./routes/tasks");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const cors = require("cors");
const app = express();
const { logger, isAuthenticated } = require("./midlleware/midllewares");

// to use env variables
require('dotenv').config();

app.use(express.json());
const corsOptions = {
  origin: ['http://localhost:5173', 'https://brainerx-todo-master.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'], 
  credentials: true 
};


app.use(cors(corsOptions));

app.use(logger);

app.get("/", (_req, res) => {
  res.send("Hello World! 🌍");
});




app.use("/users", userRouter);
app.use("/tasks", isAuthenticated, router);

mongoose
  .connect(`mongodb+srv://${process.env.username}:${process.env.db_password}@cluster0.jcdyb7l.mongodb.net/`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB:", err));


app.listen(3000, () => {
  console.log("Server running on port 3000");
});


