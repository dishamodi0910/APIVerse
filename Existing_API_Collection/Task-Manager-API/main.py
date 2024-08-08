from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='static')
CORS(app)

# Sample data: list of tasks
tasks = [
    {"id": 1, "title": "Task 1", "description": "Description of Task 1", "done": False},
    {"id": 2, "title": "Task 2", "description": "Description of Task 2", "done": False}
]

# Serve the index.html
@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

# Get all tasks
@app.route('/tasks', methods=['GET'])
def get_tasks():
    return jsonify(tasks)

# Get a specific task by ID
@app.route('/tasks/<int:task_id>', methods=['GET'])
def get_task(task_id):
    task = next((task for task in tasks if task["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404
    return jsonify(task)

# Create a new task
@app.route('/tasks', methods=['POST'])
def create_task():
    if request.is_json:
        new_task = request.get_json()
        new_task["id"] = len(tasks) + 1
        tasks.append(new_task)
        return jsonify(new_task), 201
    else:
        return jsonify({"error": "Request must be JSON"}), 400

# Update an existing task by ID
@app.route('/tasks/<int:task_id>', methods=['PUT'])
def update_task(task_id):
    task = next((task for task in tasks if task["id"] == task_id), None)
    if task is None:
        return jsonify({"error": "Task not found"}), 404

    if request.is_json:
        updates = request.get_json()
        task.update(updates)
        return jsonify(task)
    else:
        return jsonify({"error": "Request must be JSON"}), 400

# Delete a task by ID
@app.route('/tasks/<int:task_id>', methods=['DELETE'])
def delete_task(task_id):
    global tasks
    tasks = [task for task in tasks if task["id"] != task_id]
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
