import { useState } from "react";
import useAxiosCustom from "../../../hooks/useAxiosCustom";
import Task from "./Task";
import { useQuery } from "@tanstack/react-query";
import NoTask from "./NoTask";

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
    <div>
      {isLoading && <p>data is loading</p>}
      {/* list wrapper */}

      {data &&
        (taskList.length ? (
          <div className="grid grid-cols-3 gap-6 ">
            {taskList.map((singleTask, index) => (
              <Task key={index} taskInfo={singleTask}></Task>
            ))}
          </div>
        ) : (
          <NoTask></NoTask>
        ))}
    </div>
  );
}
      
export default TaskList;
