import { APIs } from "./api.js";
import { Model } from "./Model.js";
import { View } from "./View.js";

const Controller = ((model, view, api) => {
  const state = new model.State();

  const addTodoHandler = (e) => {
    e.preventDefault();
    const content = view.getInputValue();
    console.log("add", content);

    api.createTodo({ content }).then((newTodo) => {
      view.clearInput();
      state.addTodo(newTodo);
      console.log(state.todos);
    });
  };

  const init = () => {
    state.subscribe(() => {
      view.renderTodos(state.todos);
    });

    api.getTodos().then((todos) => {
      state.todos = todos;
      console.log(todos);
    });

    view.addBtnEl.addEventListener("click", addTodoHandler);

    view.todoListEl.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON" && e.target.dataset.id) {
          const id = e.target.dataset.id;
      
          api.deleteTodo(id).then(() => {
            // Remove from state
            state.todos = state.todos.filter(todo => todo.id != id);
          });
        }
      });

  };

  return { init };
})(Model, View, APIs);

Controller.init();