import { useState } from 'react';
import CompleteTodos from './components/CompleteTodos';
import IncompleteTodos from './components/IncompleteTodos';
import InputTodo from './components/InputTodo';

export default function Todo() {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['TODOです1', 'TODOです2']);
  const [completeTodos, setCompleteTodos] = useState(['TODOでした1', 'TODOでした2']);

  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    const trimTodoText = todoText.trim();
    if (trimTodoText === '') return;
    setIncompleteTodos((prev) => [...prev, trimTodoText]);
    setTodoText('');
  };

  const onClickDelete = (index) =>
    setIncompleteTodos((prev) => prev.filter((_, idx) => idx !== index));

  const onClickComplete = (index) => {
    setIncompleteTodos((prev) => prev.filter((_, idx) => idx !== index));
    setCompleteTodos((prev) => [...prev, incompleteTodos[index]]);
  };

  const onClickBack = (index) => {
    setCompleteTodos((prev) => prev.filter((_, idx) => idx !== index));
    setIncompleteTodos((prev) => [...prev, completeTodos[index]]);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={isMaxLimitIncompleteTodos}
      />
      {isMaxLimitIncompleteTodos && (
        <p className="text-red-700 m-2 font-semibold">
          登録できるTODOは5個までだよ～、消化しろ～。
        </p>
      )}
      <IncompleteTodos
        todos={incompleteTodos}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodos todos={completeTodos} onClick={onClickBack} />
    </>
  );
}
