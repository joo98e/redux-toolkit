import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToDo, IToDoSliceInitialState } from "./ISliceInterface";

const initialState: IToDoSliceInitialState = {
  todos: [],
};

const { reducer, actions } = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<IToDo>) {
      state.todos.push(action.payload);
    },
  },
});

export { reducer as todosReducer, actions as todosActions };
