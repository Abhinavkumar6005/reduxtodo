import { createSlice } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

let nextId = 1;

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: nextId++,
        text: action.payload as string,
        completed: false,
      });
    },
    toggleTodo(state, action) {
      const id = action.payload as number;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action) {
      const id = action.payload as number;
      state.todos = state.todos.filter((t) => t.id !== id);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;
export default todosSlice.reducer;
