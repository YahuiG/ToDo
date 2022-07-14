const deleteActivity = (taskBlockId) => {
  const taskBlock = document.getElementById(taskBlockId);
  taskBlock.remove();
  return taskBlock;
};

const createCheckBox = (checkboxState) => {
  const checkbox = document.createElement('input');
  checkbox.classList.add('cb');
  checkbox.type = 'checkbox';
  checkbox.classList.add('check_box');
  checkbox.checked = checkboxState;
  return checkbox;
};

const createEllipsis = () => {
  const ellipsis = document.createElement('i');
  ellipsis.classList.add('fa-solid', 'fa-ellipsis-vertical');
  ellipsis.addEventListener('click', (e) => {
    e.target.classList.add('hidden');
    e.target.nextElementSibling.classList.remove('hidden');
  });
  return ellipsis;
};

const createIcon = () => {
  const groupDiv = document.createElement('div');
  const ellipsis = createEllipsis();

  const trash = document.createElement('i');
  trash.classList.add('fa-solid', 'fa-trash');
  trash.classList.add('hidden');

  groupDiv.append(ellipsis);
  groupDiv.appendChild(trash);

  return groupDiv;
};

const textField = (description) => {
  const textInput = document.createElement('input');
  textInput.setAttribute('type', 'text');
  textInput.setAttribute('id', 'description');
  textInput.setAttribute('readonly', 'readonly');
  textInput.classList.add('uneditable');
  textInput.value = description;

  textInput.addEventListener('dblclick', (e) => {
    e.target.removeAttribute('readonly');
    e.target.classList.remove('uneditable');
  });

  return textInput;
};

const addActivity = (TodoListElement, task) => {
  const taskBlock = document.createElement('div');
  taskBlock.classList.add('task_block');
  taskBlock.setAttribute('id', task.isbn);
  // more icon holder dive
  const dots = createIcon();
  dots.classList.add('more');

  // div to group checkbox & description
  const itemGroup = document.createElement('div');
  itemGroup.classList.add('cb_desc', 'flex-row');

  const textInput = textField(task.description);
  const checkBox = createCheckBox(task.completed);

  itemGroup.appendChild(checkBox);
  itemGroup.appendChild(textInput);

  taskBlock.appendChild(itemGroup);
  taskBlock.appendChild(dots);

  TodoListElement.appendChild(taskBlock);
  return null;
};

export {
  addActivity,
  deleteActivity,
};