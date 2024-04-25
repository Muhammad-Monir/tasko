import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosCustom from "../../hooks/useAxiosCustom";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CommonButton from "../../components/CommonButton/CommonButton";
import taskIcon from "../../assets/images/task-icon.svg";

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

  const pending = "#E343E6";
  const progress = "#DD9221";
  const done = "#21D789";

  const currentColor =
    taskInfo?.status === "pending"
      ? pending
      : taskInfo?.status === "progress"
      ? progress
      : taskInfo?.status === "done"
      ? done
      : "";

  return (
    <div>
      {isLoading ? (
        <p>Data is loading</p>
      ) : (
        // Task Wrapper
        <div>
          {/* top part */}
          <div className="flex items-center justify-between pb-10 border-b-[1px] border-solid border-[#E1E1E1]">
            <SectionHeading>Task Details</SectionHeading>

            {/* buttons area */}
            <div className="flex items-center gap-8">
              {/* points */}
              <p
                style={{
                  color: currentColor,
                }}
                className="text-base font-semibold "
              >
                {" "}
                {taskInfo?.point} Points{" "}
              </p>
              <div className="w-fit" onClick={() => navigate(-1)}>
                <CommonButton text={"Back"}></CommonButton>
              </div>
            </div>
          </div>

          {/* hero section */}
          <div>
            {/* icon area */}
            <div>
              <img src={taskIcon} alt="" />
            </div>
            {/* text area */}
            <div>
              {/* title */}
              <h3> {taskInfo.title} </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleTask;
