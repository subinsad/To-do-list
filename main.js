let inputBox = document.getElementById('inputField');
let addToDo = document.getElementById('addToDo');
let toDoList = document.getElementById('toDoList');

addToDo.addEventListener('click', () => {
    var list = document.createElement('li');
    if (!inputBox.value) alert('내용을입력');
    else {
        list.innerText = inputBox.value;
        toDoList.appendChild(list);
        inputBox.value = '';
    }
});
