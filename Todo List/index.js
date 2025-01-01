const taskInput = document.querySelector(".task-input input"),
filters = document.querySelector(".filter span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".task-box");

let editId,
isEditTask = false,
todos = JSON.parse(localStorage.getItem("todo-list"));

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector("span.active").classList.remove("active");
        btn.classList.add("active");
        showTodo(btn.id);
    });
});

function showTodo(filter) {
    let liTag = "";
    if (todos){
        todos.forEach((todo, id) => {
            let completed = todos.status === "completed" ? "checked" : "";

            if(filter == todo.status || filter == "all")  {
                liTag += `<li class="task" >
                <label for = "${id}">
                <input onclick= "updateStatus(this)"
                type="checkbox" id="${id}" ${completed}>
                <p class="${completed}">${todo.name}</p>

                </label>
                <div class="settings">
                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                <ul class="task-menu">
                <li onclick="editTask(${id},"${todo.name}" )'> <i class="uil-pen">,</li>
               `
            }  
        }
    )}
}