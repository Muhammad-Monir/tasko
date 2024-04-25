import { useState } from "react";
import useAxiosCustom from "../../../hooks/useAxiosCustom";
import Task from "./Task";
import { useQuery } from "@tanstack/react-query";

function TaskList() {
  const [taskList, setTaskList] = useState([]);

  const axiosCustom = useAxiosCustom();

  // using query
  const { data, isLoading } = useQuery({
    queryKey: ["taskList"],
    queryFn: async () => {
      const res = await axiosCustom.get("/all-tasks");

      // saving the data in the state
      setTaskList(res.data);

      return res.data;
    },
  });

  return (
    <div className="overflow-y-scroll max-h-[55vh] mt-14 pr-2 pb-4 ">
      {/* list wrapper */}
      <div className="grid grid-cols-3 gap-6 ">
        {isLoading && <p>data is loading</p>}

        {data &&
          taskList.map((singleTask, index) => (
            <Task key={index} taskInfo={singleTask}></Task>
          ))}
      </div>
    </div>
  );
}

export default TaskList;
