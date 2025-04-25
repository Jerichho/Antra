export const View = (() => {
    const todolistEl = document.querySelector(".todo__list");
    const inputEl = document.querySelector(".todo__input");
    const addBtnEl = document.querySelector(".todo__btn--add");
  
    const renderTodos = (todos) => {
      todolistEl.innerHTML = ""; // Clear previous list
  
      todos.forEach((todo) => {
        const li = document.createElement("li");
        li.dataset.id = todo.id;
  
        const span = document.createElement("span");
        span.textContent = todo.content;
  
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.classList.add("todo__btn--delete");
        deleteBtn.dataset.id = todo.id;
  
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todolistEl.appendChild(li);
      });
    };
  
    const getInputValue = () => inputEl.value;
  
    const clearInput = () => {
      inputEl.value = "";
    };
  
    return {
      renderTodos,
      getInputValue,
      clearInput,
      addBtnEl,
      todoListEl: todolistEl, // Expose for event delegation
    };
  })();