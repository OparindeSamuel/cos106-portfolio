// ======================================
// Academic Planner JavaScript
// ======================================

// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Store tasks
let tasks = [];

// Function to display tasks
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {

        // Create list item
        const li = document.createElement("li");

        // Create task text
        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        // Mark task as completed
        span.addEventListener("click", function () {

            task.completed = !task.completed;
            displayTasks();

        });

        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {

            tasks.splice(index, 1);
            displayTasks();

        });

        // Add elements to list item
        li.appendChild(span);
        li.appendChild(deleteButton);

        // Add list item to task list
        taskList.appendChild(li);

    });

}

// Function to add task
function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {

        alert("Please enter a task.");

        return;

    }

    // Create task object
    const task = {

        text: taskText,
        completed: false

    };

    tasks.push(task);

    // Clear input
    taskInput.value = "";

    // Refresh list
    displayTasks();

}

// Add task when button is clicked
addTaskBtn.addEventListener("click", addTask);

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {

        addTask();

    }

});

// Display tasks when page loads
displayTasks();