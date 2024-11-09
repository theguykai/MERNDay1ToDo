const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Item = require("./models/Items");
const methodOverride = require("method-override");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("DB connected");
});

app.use(cors());
app.use(express.json());
app.use(methodOverride("_method"));

app.get("/", async (req, res, next) => {
  try {
    console.log("test");
  } catch {
    (err) => {
      next(console.log(err));
    };
  }
});

// const newTask = new Item({
//   title: "test",
//   difficulty: 3,
// });

app.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Item.find({});
    res.json(tasks);
  } catch {
    (err) => {
      next(console.log(err));
    };
  }
});

app.post("/tasks", async (req, res, next) => {
  try {
    const task = new Item({
      title: req.body.title,
      difficulty: req.body.difficulty,
    });
    await task.save();
    res.json(task);
  } catch {
    (err) => {
      next(console.log(err));
    };
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
