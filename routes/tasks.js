const express = require("express");

const router = express.Router();

const {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} = require("../controller/taskController");

// Get all tasks
router.get("/", getTasks);

// Get a single task by id
router.get("/:id", getTaskById);

// Create a new task
router.post("/", createTask);

// Update a task by id
router.put("/:id", updateTask);

// Delete a task by id
router.delete("/:id", deleteTask);

module.exports = router;
