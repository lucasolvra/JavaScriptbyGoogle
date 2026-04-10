const todoList = [{
  name: 'watch youtube',
  dueDate: '04-08-2026'
 }, {
  name: 'wash dishes',
  dueDate: '04-08-2026'
}];

displayList();

function displayList() {
  
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todoListHTML += html;
  });
  
  document.querySelector('.js-display-list')
  .innerHTML = todoListHTML;

  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addTodo()
  });
  
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => { //loop thru array (many buttons/same class)
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        displayList();
      })
    });
}



function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  displayList();
}