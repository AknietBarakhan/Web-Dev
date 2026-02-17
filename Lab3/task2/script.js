"use strict";
const todoForm = document.getElementById("todoform");
const taskInput = document.getElementById("taskinput");
const todoList = document.getElementById("todolist");
function createTodoItem(text) {
  const li = document.createElement("li");
  li.classList.add("item");

  const left = document.createElement("div");
  left.classList.add("item-left");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  const span = document.createElement("span");
  span.classList.add("text");
  span.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.setAttribute("aria-label", "Delete task");
  deleteBtn.textContent = "🗑";

  left.appendChild(checkbox);
  left.appendChild(span);

  li.appendChild(left);
  li.appendChild(deleteBtn);

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done", checkbox.checked);
  });

  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(li); 
  });
    return li;
}

function addTaskFromInput() {
  const value = taskInput.value.trim();
  if (!value) return;

  const newItem = createTodoItem(value);
  todoList.appendChild(newItem); 

  taskInput.value = "";
  taskInput.focus();
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTaskFromInput();
});
