let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

let app = document.querySelector("#app");
let h1 = document.createElement("h1");
let ul = document.createElement("ul");

h1.innerText = "Todo List";

app.appendChild(h1);
app.appendChild(ul);

function renderTodoApp() {
  //loop through todos
  let toDoList = "";
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed == true) {
      toDoList += `<li><input type="checkbox" checked>${todos[i].description}</input></li>`;
    } else {
    toDoList += `<li><input type="checkbox">${todos[i].description}</input></li>`;
    }
  }
  ul.innerHTML = toDoList;
}
let textInput = document.querySelector("#newTodoItem");
let form = document.querySelector("#form");

form.onsubmit = (e) => {
  e.preventDefault();

  let newItem = {
    completed: false,
    description: textInput.value,
  };

  todos.push(newItem);
  textInput.value = "";
  renderTodoApp();
};

renderTodoApp();
