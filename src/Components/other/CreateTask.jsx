import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const CreateTask = () => {

   const [userData,setUserData] = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTasks, setNewTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTasks({
      title,
      description,
      date,
      category,
      active: false,
      newTask: false,
      completed: true,
      failed: false,
    });

    const data = userData


   
  if (Array.isArray(data)) {
    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(newTasks);
        elem.taskCount.newTask = (elem.taskCount.newTask || 0) + 1;
      }
    });
  } else {
    console.error("Data is not available or not an array.");
  }
    setUserData(data)

    console.log(data);

    // localStorage.setItem('employees', JSON.stringify(data))
    setTitle('')
    setCategory('')
    setAsignTo('')
    setDate('')
    setDescription('')
  };

  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex w-full flex-wrap item-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI Design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="Date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign To</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design dev etc"
            />
          </div>
        </div>
        <div className="w-1/2">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>

          <button className="w-4/5 bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
