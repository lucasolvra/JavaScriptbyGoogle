const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '28-09-1992'
}, {
  name: 'watch youtube',
  dueDate: '28-09-1992'
}];

renderTodoList()

localStorage.getItem('todoListHTML');

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
        saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML += html;

  }
  
  
  document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
  
  localStorage.setItem('todoListHTML', todoListHTML);
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  const name = inputElement.value;
  const dueDate = dateInputElement.value;

  todoList.push({ //SHORTHAND PROPERTY
    name,
    dueDate
});

  inputElement.value = '';

  renderTodoList();

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}