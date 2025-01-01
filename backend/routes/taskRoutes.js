const express = require("express");
const router = express.Router();
const Tasks = require("../models/Items");

router.get("/tasks", async (req, res, next) => {
    try {
        const tasks = await Tasks.find({});
        res.json(tasks);
    } catch {
        (err) => {
        next(console.log(err));
        };
    }
    });

router.post("/tasks", async (req, res, next) => {
    try {
        const task = new Tasks({
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

router.delete("/tasks/:id", async (req, res, next) => {
  try {
    await Tasks.findByIdAndDelete(req.params.id);
    res.send("Task deleted");
    res.status(200).json({ message: "Task deleted" });
  } catch {
    (err) => {
      next(console.log(err));
    };
  }
});

    module.exports = router;