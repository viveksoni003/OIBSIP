// Store tasks in an array
let tasks = [];

// Add a new task to the pending tasks list
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    const task = {
      name: taskName,
      addedAt: new Date(),
      completed: false
    };
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

// Mark a task as completed
function completeTask(index) {
  tasks[index].completed = true;
  renderTasks();
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Render the tasks on the page
function renderTasks() {
  const pendingTasks = document.getElementById('pendingTasks');
  const completedTasks = document.getElementById('completedTasks');
  pendingTasks.innerHTML = '';
  completedTasks.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerText = task.name;

    if (task.completed) {
      li.classList.add('completed');
      completedTasks.appendChild(li);
    } else {
      const completeButton = document.createElement('button');
      completeButton.innerText = 'Complete';
      completeButton.onclick = () => completeTask(index);
      li.appendChild(completeButton);
      pendingTasks.appendChild(li);
    }

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = () => deleteTask(index);
    li.appendChild(deleteButton);
  });
}
