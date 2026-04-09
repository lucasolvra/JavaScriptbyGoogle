const todoList = JSON.parse(localStorage.getItem('todoDate')) || [{
  name: 'make dinner',
  dueDate: '28-09-1992'
}, {
  name: 'watch youtube',
  dueDate: '28-09-1992'
}];

renderTodoList()
//saveToStorage()

function renderTodoList() {

  let todoListHTML = '';

  // LOOP THRU AN ARRAY
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    // TAKE NAME AND DUEDATE OUT OF "TODOLIST" OBJECT
    const { name, dueDate } = todoObject; //DESTRUCTING
    // GENERATING HTML
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage()
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;

  }
  
  
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;

  //saveToStorage()
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({ //SHORTHAND PROPERTY
    name,
    dueDate
});

  inputElement.value = '';

  renderTodoList();

  saveToStorage()
}

function saveToStorage() {
  localStorage.setItem('todoDate', JSON.stringify(todoList));
}