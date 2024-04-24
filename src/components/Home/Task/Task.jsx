import PropTypes from "prop-types";

import taskIcon from "../../../assets/images/task-icon.svg";

const Task = ({ taskInfo }) => {
  const pending = "#E343E6";
  const progress = "#DD9221";
  const done = "#21D789";

  const currentColor =
    taskInfo.status === "pending"
      ? pending
      : taskInfo.status === "progress"
      ? progress
      : taskInfo.status === "done"
      ? done
      : "";

  return (
    <div className="rounded-lg bg-[#fff] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12)] p-5 border-[1px] border-solid border-[#E1E1E1]">
      {/* top part */}
      <div className="flex items-start gap-3 w-full">
        {/* icon */}
        <div className="w-[45px] h-[45px]">
          <img
            className="w-full h-full object-contain"
            src={taskIcon}
            alt="taskIcon"
          />
        </div>

        {/* text details */}
        <div className="w-full">
          {/* title part */}
          <div className="flex items-center justify-between w-full">
            <h3 className="text-headingColor text-2xl font-semibold">
              {taskInfo.title}
            </h3>

            {/* delete button */}
            <div className="w-5 h-5 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="w-full h-full"
              >
                <path
                  d="M17.5 4.98335C14.725 4.70835 11.9333 4.56668 9.15 4.56668C7.5 4.56668 5.85 4.65001 4.2 4.81668L2.5 4.98335"
                  stroke="#FF4C24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.08594 4.14166L7.26927 3.04999C7.4026 2.25832 7.5026 1.66666 8.91094 1.66666H11.0943C12.5026 1.66666 12.6109 2.29166 12.7359 3.05832L12.9193 4.14166"
                  stroke="#FF4C24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.7057 7.61667L15.1641 16.0083C15.0724 17.3167 14.9974 18.3333 12.6724 18.3333H7.3224C4.9974 18.3333 4.9224 17.3167 4.83073 16.0083L4.28906 7.61667"
                  stroke="#FF4C24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.60938 13.75H11.3844"
                  stroke="#FF4C24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.91406 10.4167H12.0807"
                  stroke="#FF4C24"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* description */}
          <p className="pt-1.5 text-base text-paraLight ">
            {taskInfo.description.split("").slice(0, 80)}
          </p>
        </div>
      </div>

      {/* date & status */}
      <div className="flex items-center w-full justify-between pt-7">
        {/* date */}
        <div className="flex items-center gap-3">
          {/* icon */}
          <div className="w-6 h-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="w-full h-full"
            >
              <path
                d="M8 2V5"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V5"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 9.09H20.5"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.211 15.77L15.671 19.31C15.531 19.45 15.401 19.71 15.371 19.9L15.181 21.25C15.111 21.74 15.451 22.08 15.941 22.01L17.291 21.82C17.481 21.79 17.751 21.66 17.881 21.52L21.421 17.98C22.031 17.37 22.321 16.66 21.421 15.76C20.531 14.87 19.821 15.16 19.211 15.77Z"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7031 16.28C19.0031 17.36 19.8431 18.2 20.9231 18.5"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V12"
                stroke="#1F1F1F"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9945 13.7H12.0035"
                stroke="#1F1F1F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.29138 13.7H8.30036"
                stroke="#1F1F1F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.29138 16.7H8.30036"
                stroke="#1F1F1F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* value */}
          <p className="text-sm text-headingColor">{taskInfo.date}</p>
        </div>

        {/* status */}
        <div className="flex items-center gap-2  ">
          <p
            style={{
              backgroundColor: currentColor,
            }}
            className="w-1.5 h-1.5 rounded-full"
          ></p>
          <p
            style={{
              color: currentColor,
            }}
            className={`text-sm font-medium`}
          >
            {" "}
            {taskInfo.status === "pending"
              ? "Pending"
              : taskInfo.status === "progress"
              ? "InProgress"
              : taskInfo.status === "done"
              ? "Done"
              : ""}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;

Task.propTypes = {
  taskInfo: PropTypes.object,
};