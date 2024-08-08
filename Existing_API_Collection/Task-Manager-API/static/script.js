const apiBaseURL = 'http://127.0.0.1:5000';

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function loadTasks() {
    fetch(`${apiBaseURL}/tasks`)
        .then(response => {
            console.log('Load Tasks Response:', response);
            return response.json();
        })
        .then(tasks => {
            const tasksDiv = document.getElementById('tasks');
            tasksDiv.innerHTML = '';
            tasks.forEach(task => {
                const taskElement = document.createElement('div');
                taskElement.className = 'task';
                taskElement.innerHTML = `
                    <div>
                        <strong>${task.title}</strong>
                        <p>${task.description}</p>
                    </div>
                    <div>
                        <button onclick="editTask(${task.id})">Edit</button>
                        <button onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                `;
                tasksDiv.appendChild(taskElement);
            });
        })
        .catch(error => console.error('Error loading tasks:', error));
}

function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    fetch(`${apiBaseURL}/tasks`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, done: false })
    })
    .then(response => {
        console.log('Add Task Response:', response);
        return response.json();
    })
    .then(newTask => {
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';

        const newTaskDiv = document.getElementById('new-task');
        newTaskDiv.innerHTML = `
            <div class="task">
                <div>
                    <strong>${newTask.title}</strong>
                    <p>${newTask.description}</p>
                </div>
                <div>
                    <button onclick="removeNewTask()">Close</button>
                </div>
            </div>
        `;

        loadTasks();
    })
    .catch(error => console.error('Error adding task:', error));
}

function removeNewTask() {
    document.getElementById('new-task').innerHTML = '';
}

function editTask(taskId) {
    const newTitle = prompt('Enter new title:');
    const newDescription = prompt('Enter new description:');

    if (newTitle && newDescription) {
        fetch(`${apiBaseURL}/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: newTitle, description: newDescription })
        })
        .then(response => {
            console.log('Edit Task Response:', response);
            return response.json();
        })
        .then(() => {
            loadTasks();
        })
        .catch(error => console.error('Error editing task:', error));
    }
}

function deleteTask(taskId) {
    fetch(`${apiBaseURL}/tasks/${taskId}`, {
        method: 'DELETE'
    })
    .then(response => {
        console.log('Delete Task Response:', response);
        loadTasks();
    })
    .catch(error => console.error('Error deleting task:', error));
}
