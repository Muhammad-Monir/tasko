import { useState } from "react";
import useAxiosCustom from "../../../hooks/useAxiosCustom";
import Task from "./Task";
import { useQuery } from "@tanstack/react-query";
import NoTask from "./NoTask";
import Loader from "../../Loader/Loader";

function TaskList() {
  const [taskList, setTaskList] = useState([]);

  const axiosCustom = useAxiosCustom();

  // using query
  const { isLoading, isFetching } = useQuery({
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
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        <div>
          {taskList?.length > 0 ? (
            // Use cached data if available
            <div className="grid grid-cols-3 gap-6">
              {taskList.map((singleTask, index) => (
                <Task taskInfo={singleTask} key={index} />
              ))}
            </div>
          ) : (
            <NoTask /> // Show "No Task" if data is truly empty
          )}
        </div>
      )}
    </div>
  );
}

export default TaskList;
