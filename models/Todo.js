class Task {
    constructor(title, dueDate) {
        this.id = ++Task.counter;
        this.title = title;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
  }
  
Task.counter = 0;
  
module.exports = Task;