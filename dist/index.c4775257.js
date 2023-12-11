let inputBox = document.getElementById("inputField");
let addToDo = document.getElementById("addToDo");
let toDoList = document.getElementById("toDoList");
addToDo.addEventListener("click", ()=>{
    var list = document.createElement("li");
    if (!inputBox.value) alert("\uB0B4\uC6A9\uC744\uC785\uB825");
    else {
        list.innerText = inputBox.value;
        toDoList.appendChild(list);
        inputBox.value = "";
    }
});

//# sourceMappingURL=index.c4775257.js.map
