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

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  let ul = document.createElement("ul");

  h1.innerText = "Todo List";

  app.appendChild(h1);
  app.appendChild(ul);
  //loop through todos
  for (let i = 0; i < todos.length; i++) {
    let li = `<li><input type="checkbox">${todos[i].description}</input></li>`;
    ul.innerHTML += li;
  }

}

renderTodoApp();
