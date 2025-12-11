import { useState } from 'react';

export default function Todo() {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['TODOです1', 'TODOです2']);
  const [completeTodos, setCompleteTodos] = useState(['TODOでした1', 'TODOでした2']);

  const onChangeTodoText = e => setTodoText(e.target.value);

  const onClickAdd = () => {
    const trimTodoText = todoText.trim();
    if (trimTodoText === '') return;
    setIncompleteTodos(prev => [...prev, trimTodoText])
    setTodoText('');
  }

  return (
    <>
      <div className="m-2 max-w-md rounded bg-green-200 p-2">
        <input
          type="text"
          value={todoText}
          onChange={onChangeTodoText}
          placeholder="TODOを入力"
          className="m-2 rounded-xl bg-white px-4 py-1.5"
        />
        <button
          type="button"
          className="rounded-xl bg-gray-100 px-4 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-white"

          onClick={onClickAdd}
        >
          追加
        </button>
      </div>
      <div className="m-2 min-h-52 max-w-md rounded-xl border border-green-500 p-2">
        <p className="mt-0 mb-3 text-center font-black">未完了のTODO</p>
        <ul className="ml-6 list-disc">
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="flex items-center space-x-1">
                <p class="m-1.5">{todo}</p>
                <button
                  type="button"
                  className="rounded-xl bg-gray-100 px-4 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-white"
                >
                  完了
                </button>
                <button
                  type="button"
                  className="rounded-xl bg-gray-100 px-4 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-white"
                >
                  削除
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="m-2 min-h-52 max-w-md rounded-xl border border-green-500 bg-green-100 p-2">
        <p className="mt-0 mb-3 text-center font-black">完了のTODO</p>
        <ul className="ml-6 list-disc">
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="flex items-center space-x-1">
                <p class="m-1.5">{todo}</p>
                <button
                  type="button"
                  className="rounded-xl bg-gray-100 px-4 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-white"
                >
                  戻す
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
