/**
 * @description todo
 */
export interface IToDo {
  id: number | Date;
  subject: string;
  content: string;
}

/**
 * @description todo's initial value Interface
 */
export interface IToDoSliceInitialState {
  todos: IToDo[];
}
