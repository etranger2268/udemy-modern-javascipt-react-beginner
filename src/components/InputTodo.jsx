export default function InputTodo({ todoText, onChange, onClick}) {
  return (
    <div className="m-2 max-w-md rounded bg-green-200 p-2">
      <input
        type="text"
        value={todoText}
        onChange={onChange}
        placeholder="TODOを入力"
        className="m-2 rounded-xl bg-white px-4 py-1.5"
      />
      <button
        type="button"
        className="rounded-xl bg-gray-100 px-4 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-white"
        onClick={onClick}
      >
        追加
      </button>
    </div>
  );
}
