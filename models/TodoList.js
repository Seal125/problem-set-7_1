class TodoList {
    constructor() {
        this.tasks = {};
    }

    addTask(task) {
        this.tasks[task.id] = task;
        this.counter++
    }

    updateTask(id, newTitle, newDueDate) {
        this.tasks[id].title = newTitle;
        this.tasks[id].dueDate = newDueDate;
    }

    completeTask(id) {
        this.tasks[id].isComplete = true;
    }

    incompleteTask(id) {
        this.tasks[id].isComplete = false;
    }

    deleteTask(id) {
        delete this.tasks[id];
        this.counter--
    }
}

module.exports = TodoList;