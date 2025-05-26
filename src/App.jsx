import { useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

function App() {
  const [todos, setTodos] = useState([]);
  const [work, setWork] = useState("");

  console.log(todos);

  const randomId = Math.trunc(Math.random() * 10);
  const handleAdd = () => {
    if (todos?.some((todo) => todo.id === randomId)) {
      toast.warning("bị trùng id rồi đó ba :))");
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: randomId,
          job: work,
        },
      ]);
      setWork("");
    }
  };

  const handleDeleteJob = (id) => {
    setTodos((prev) => prev.filter(item => item.id !== id))
    toast.success('đã xóa job thành công :))')
  }

  return (
    <>
      <h1 className="flex flex-col items-center justify-center h-screen gap-8">
        <div className="flex gap-8">
          <input
            type="text"
            value={work}
            className="outline-none border border-blue-500 w-[400px] px-4 py-2"
            onChange={(e) => setWork(e.target.value)}
          />
          <button
            className="cursor-pointer bg-blue-500 px-4 py-2 text-white rounded-md"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
        <ul>
          {todos?.map((item) => (
            <li key={item.id} className="flex gap-4 gap-y-3">
              <span className="min-w-[200px]">{item.job}</span>
              <button onClick={() => handleDeleteJob(item.id)} type="button" className="cursor-pointer px-4 border bg-red-600 text-white rounded-md">Delete</button>
            </li>
          ))}
        </ul>
      </h1>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
