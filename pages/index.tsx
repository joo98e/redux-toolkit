import { IToDo } from "@store/slices/ISliceInterface";
import { todosActions } from "@store/slices/toDosSlice";
import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";

const Home: NextPage = () => {
  const { todos } = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleClickAddToDo = () => {
    dispatch(
      todosActions.addTodo({
        id: new Date().getTime(),
        subject: "123",
        content: "123123",
      })
    );
  };

  return (
    <div className="max-w-[480px] m-auto">
      <button onClick={handleClickAddToDo}>클릭</button>
    </div>
  );
};

export default Home;
