import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div id="AllTask" className="bg-[#1C1C1C] p-5 rounded mt-5 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 bg-red-600">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 bg-red-600">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 bg-red-600">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 bg-red-600">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 bg-red-600">Failed</h5>
      </div>

      <div className="">
        {userData.map(function (elem,idx) {
          return (
            <div key={idx} className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5 ">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskCount.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-white-600">
                {elem.taskCount.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">
                {elem.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
