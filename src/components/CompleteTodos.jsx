export default function CompleteTodos({ todos, onClick }) {
  return (
    <div className="m-2 min-h-52 max-w-md rounded-xl border border-green-500 bg-green-100 p-2">
      <p className="mt-0 mb-3 text-center font-black">完了のTODO</p>
      <ul className="ml-6 list-disc">
        {todos.map((todo, index) => (
          <li key={todo}>
            <div className="flex items-center space-x-1">
              <p class="m-1.5">{todo}</p>
              <button
                type="button"
                onClick={() => onClick(index)}
                className="rounded-xl bg-gray-100 px-4 py-1 hover:cursor-pointer hover:bg-gray-200 hover:text-white"
              >
                戻す
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
