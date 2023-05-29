// Get references to HTML elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const taskList = document.getElementById("task-list");
const completedTasks = document.getElementById("completed-tasks");

// Function to add a new task
function addTask(event) {
    event.preventDefault(); // Prevent form submission

    const taskText = input.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", markTaskAsCompleted);

        const taskTextSpan = document.createElement("span");
        taskTextSpan.innerText = taskText;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskTextSpan);
        taskList.appendChild(taskItem);
        input.value = ""; // Clear the input field
    }
}

// Function to mark a task as completed
function markTaskAsCompleted(event) {
    const checkbox = event.target;
    const taskItem = checkbox.parentNode;

    if (checkbox.checked) {
        taskList.removeChild(taskItem);
        completedTasks.appendChild(taskItem);
    } else {
        completedTasks.removeChild(taskItem);
        taskList.appendChild(taskItem);
    }
}

// Event listener for form submission
form.addEventListener("submit", addTask);