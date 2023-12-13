document.addEventListener('DOMContentLoaded', () => {
    const toDo = document.querySelector('#toDo');
    const addButton = document.querySelector('#addButton');
    const toDoList = document.querySelector('#toDoList');

    addButton.addEventListener('click', (event) => {
        const item = document.createElement('div'); //div

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkBox');

        const text = document.createElement('span'); //내용
        text.textContent = toDo.value;

        const removeButton = document.createElement('button'); // 삭제
        removeButton.innerHTML =
            '<span class="material-symbols-outlined"> delete </span>';

        removeButton.addEventListener('click', (event) => {
            event.currentTarget.parentNode.parentNode.removeChild(
                event.currentTarget.parentNode
            );
        });
        item.appendChild(checkBox);
        item.appendChild(text);
        item.appendChild(removeButton);

        toDoList.appendChild(item);
        toDo.value = '';
    });
});
