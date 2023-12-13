class ToDoApp {
    constructor() {
        this.toDo = document.querySelector('#toDo');
        this.addButton = document.querySelector('#addButton');
        this.toDoList = document.querySelector('#toDoList');

        this.addButton.addEventListener('click', this.addItem.bind(this));

        // 할 일 목록 초기화
        this.loadTodos();
    }

    addItem(event) {
        const item = document.createElement('div');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkBox');

        const text = document.createElement('span');
        text.textContent = this.toDo.value;

        const removeButton = document.createElement('button');
        removeButton.innerHTML =
            '<span class="material-symbols-outlined"> delete </span>';

        removeButton.addEventListener('click', this.removeItem.bind(this));

        item.appendChild(checkBox);
        item.appendChild(text);
        item.appendChild(removeButton);

        this.toDoList.appendChild(item);
        this.toDo.value = '';

        // 할 일 목록 저장
        this.saveTodos();
    }

    removeItem(event) {
        event.currentTarget.parentNode.parentNode.removeChild(
            event.currentTarget.parentNode
        );

        // 할 일 목록 저장
        this.saveTodos();
    }

    saveTodos() {
        const todos = Array.from(this.toDoList.children).map((item) => ({
            text: item.querySelector('span').textContent,
            completed: item.querySelector('input').checked,
        }));

        localStorage.setItem('todos', JSON.stringify(todos));
    }

    loadTodos() {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            const todos = JSON.parse(storedTodos);

            todos.forEach((todo) => {
                const item = document.createElement('div');
                const checkBox = document.createElement('input');
                checkBox.setAttribute('type', 'checkBox');
                checkBox.checked = todo.completed;

                const text = document.createElement('span');
                text.textContent = todo.text;

                const removeButton = document.createElement('button');
                removeButton.innerHTML =
                    '<span class="material-symbols-outlined"> delete </span>';
                removeButton.addEventListener(
                    'click',
                    this.removeItem.bind(this)
                );

                item.appendChild(checkBox);
                item.appendChild(text);
                item.appendChild(removeButton);

                this.toDoList.appendChild(item);
            });
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const todoApp = new ToDoApp();
});
