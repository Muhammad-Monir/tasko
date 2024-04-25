import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosCustom from "../../hooks/useAxiosCustom";

const SingleTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const axiosCustom = useAxiosCustom();

  // using query
  const { data: taskInfo, isLoading } = useQuery({
    queryKey: ["taskList"],

    queryFn: async () => {
      const res = await axiosCustom.get(`/task/${id}`);

      return res.data;
    },
  });

  return (
    <div>
      <h3>Welcome to your task</h3>

      <button onClick={() => navigate(-1)}>back button</button>

      {isLoading ? <p>data loading</p> : <p> {taskInfo.title} </p>}
    </div>
  );
};

export default SingleTask;
