const form = document.querySelector("form");
function todoStorage() {
  localStorage.listTodo = list.innerHTML;
}

function localList() {
  if (localStorage.listTodo) {
    list.innerHTML = localStorage.listTodo;
  } else {
    list.innerHTML = `<li>liste des choses à faire</li>`;
  }
}
window.addEventListener("load", localList);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  list.innerHTML += `<li>${items.value}</li>`;
  items.value = "";
  todoStorage();
});

list.addEventListener("click", function (e) {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
  }
  todoStorage();
});
