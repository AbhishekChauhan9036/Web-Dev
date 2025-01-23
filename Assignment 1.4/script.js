const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodo");

function addTodo() {
  const todoText = newTodoInput.value;
  if (todoText === "") return;

  const li = document.createElement("li");
  li.textContent = todoText;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
  });

  li.prepend(checkbox);
  todoList.appendChild(li);

  newTodoInput.value = "";
}
