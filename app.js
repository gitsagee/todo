const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");

const port = 3000 || process.env.PORT;
require("./db/conn.js");
app.set("view engine", "ejs");
const staticpath = path.join(__dirname, "public");
app.use(express.static(staticpath));
const Todo = require("./db/modal.js"); // Renamed to uppercase as it's a model

app.use(bodyParser.urlencoded({ extended: true }));

let taskList = []; // Array to store tasks

app.get("/", async (req, res) => {
    try {
        const tasks = await Todo.find();
        taskList = tasks.map(task => task.task);
        res.render("index", { listItems: taskList });
    } catch (error) {
        console.error(`Error retrieving tasks: ${error.message}`);
        res.status(500).send("Internal Server Error");
    }
});

app.post("/addTask", async (req, res) => {
    const { task } = req.body;

    try {
        const todoTask = await new Todo({ task }).save();
        console.log(`Task added: ${todoTask.task}`);

        res.redirect("/"); // Redirect to the home page after adding a task
    } catch (error) {
        console.error(`Error adding task: ${error.message}`);
        res.status(500).send("Internal Server Error");
    }
});
app.post("/deleteTask", async (req, res) => {
    const { task } = req.body;
    try {
        const delTask = await Todo.find({ task }).deleteOne();
        console.log(`Task deleted :${task}`);
        res.redirect("/");

    } catch (error) {
        console.error(`Error deleting task: ${error.message}`);
        res.status(500).send("Internal Server Error");
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
