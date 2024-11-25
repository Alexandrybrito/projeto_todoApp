document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    // Carregar tarefas do localStorage
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        const completedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
        tasks.forEach(task => createTaskElement(task, false));
        completedTasks.forEach(task => createTaskElement(task, true));
    };

    // Salvar tarefas no localStorage
    const saveTasks = () => {
        const tasks = [];
        const completedTasks = [];
        document.querySelectorAll('#task-list li').forEach(taskElement => {
            tasks.push({
                id: taskElement.dataset.id,
                text: taskElement.querySelector('.task-text').innerText
            });
        });
        document.querySelectorAll('#completed-task-list li').forEach(taskElement => {
            completedTasks.push({
                id: taskElement.dataset.id,
                text: taskElement.querySelector('.task-text').innerText
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
    };

    // Criar elemento de tarefa
    const createTaskElement = (task, isCompleted) => {
        const taskElement = document.createElement('li');
        taskElement.dataset.id = task.id;
        taskElement.className = `flex justify-between items-center border p-2 rounded ${isCompleted ? 'completed' : ''}`;
        taskElement.innerHTML = `
            <span class="task-text ${isCompleted ? 'line-through' : ''}">${task.text}</span>
            <button class="bg-green-500 text-white p-1 rounded edit-task">Editar</button>
            <button class="bg-red-500 text-white p-1 rounded delete-task">Excluir</button>
        `;

        taskElement.querySelector('.edit-task').addEventListener('click', () => editTask(taskElement));
        taskElement.querySelector('.delete-task').addEventListener('click', () => deleteTask(taskElement));
        taskElement.querySelector('.task-text').addEventListener('dblclick', () => toggleCompleteTask(taskElement));

        if (isCompleted) {
            completedTaskList.appendChild(taskElement);
        } else {
            taskList.appendChild(taskElement);
        }
    };

    // Adicionar nova tarefa
    taskForm.addEventListener('submit', event => {
        event.preventDefault();
        const task = {
            id: Date.now().toString(),
            text: taskInput.value
        };
        createTaskElement(task, false);
        saveTasks();
        taskInput.value = '';
    });

    // Editar tarefa
    const editTask = (taskElement) => {
        const newText = prompt('Editar tarefa', taskElement.querySelector('.task-text').innerText);
        if (newText !== null && newText.trim() !== '') {
            taskElement.querySelector('.task-text').innerText = newText;
            saveTasks();
        }
    };

    // Excluir tarefa
    const deleteTask = (taskElement) => {
        taskElement.remove();
        saveTasks();
    };

    // Marcar tarefa como concluída
    const toggleCompleteTask = (taskElement) => {
        if (taskElement.classList.contains('completed')) {
            taskElement.classList.remove('completed');
            taskElement.querySelector('.task-text').classList.remove('line-through');
            taskList.appendChild(taskElement);
        } else {
            taskElement.classList.add('completed');
            taskElement.querySelector('.task-text').classList.add('line-through');
            completedTaskList.appendChild(taskElement);
        }
        saveTasks();
    };

    // Carregar tarefas ao abrir a aplicação
    loadTasks();
});
