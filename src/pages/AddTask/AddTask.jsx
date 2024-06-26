import { useEffect, useState } from "react";
import BackButton from "../../components/BackButton.jsx/BackButton";
import CommonButton from "../../components/CommonButton/CommonButton";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import ArrowRight from "../../assets/images/arrow-right.svg";

import "./AddTask.css";
import { useForm } from "react-hook-form";
import moment from "moment";
import useAuthContext from "../../hooks/useAuthContext";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import CongratsPopUp from "../../components/PopUp/CongratsPopUp";
import defaultProfile from "../../assets/images/default-profile.png";

const CalendarPrevNextIcon = () => {
  return (
    <div className="w-[30px] h-[30px] p-[6px] rounded-full border-solid border border-primaryColor flex items-center justify-center duration-300 ease-in-out hover:bg-primaryColor">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="14"
        viewBox="0 0 8 14"
        fill="none"
      >
        <path
          d="M1.375 12.25L6.625 7L1.375 1.75"
          stroke="#1F1F1F"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const AddTask = () => {
  const axiosSecure = useAxiosSecure();

  const [isCongratsActive, setIsCongratsActive] = useState(false);

  const smallTextStyle =
    "text-base text-headingColor leading-5 font-semibold pb-3";
  const commonInputStyle =
    "px-[22px] py-3 rounded border border-solid border-[#E1E1E1] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12)] placeholder:text-[#667085] text-base text-headingColor focus:outline-none w-full";

  // fetching task category
  const { data: taskCats } = useQuery({
    queryKey: ["taskCats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/category");

      return res.data;
    },
  });

  const [isTaskCatActive, setIsTaskCatActive] = useState(false);
  const [isAssignTaskActive, setIsAssignTaskActive] = useState(false);

  const [taskCatSelected, setTaskCatSelected] = useState("");
  // eslint-disable-next-line
  const [taskAssignSelected, setTaskAssignSelected] = useState(null);

  const taskCatInput = document.querySelector(".add--task--input");
  const taskAssignInput = document.querySelector(".assign--task--input");

  const { user } = useAuthContext();

  //  closing the dropdown functionality
  // for task category
  useEffect(() => {
    if (taskCatInput) {
      document.addEventListener("click", (event) => {
        if (!taskCatInput.contains(event.target)) {
          setIsTaskCatActive(false);
        }
      });
    }
  }, [taskCatInput]);

  // for task assign
  useEffect(() => {
    if (taskAssignInput) {
      document.addEventListener("click", (event) => {
        if (!taskAssignInput.contains(event.target)) {
          setIsAssignTaskActive(false);
        }
      });
    }
  }, [taskAssignInput]);

  const [dateValue, setDateValue] = useState(new Date());

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    setValue,
    reset,
  } = useForm();

  //handle the category select
  const handleCategorySelect = (value) => {
    setValue("category", value);
  };
  //handle the assign select
  const handleCollaboratorSelect = (value) => {
    setValue("collaborator", value.friendName);
  };

  const onSubmit = (data) => {
    const formattedDate = moment(dateValue).format("YYYY-MM-DD");
    // const raw = moment("2024-05-17").format("dddd, MMMM D-YYYY");

    // console.log(raw);

    const taskInfo = {
      category: data.category,
      date: formattedDate,
      description: data.description,
      title: data.title,
      userId: user.userId,
      collaboratorsId: taskAssignSelected ? [taskAssignSelected.friendId] : [],
    };

    // adding task to the database
    axiosSecure
      .post("/tasks", taskInfo)
      .then((res) => {
        if (res.status === 200) {
          reset();
          setTaskCatSelected(null);
          handleCategorySelect(null);
          setDateValue(new Date());
          setIsCongratsActive(true);
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  // getting the friend list on the collaborators

  const { data: collaborators, isLoading: isCollaboratorLoading } = useQuery({
    queryKey: ["collaborators"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/friend/getlist?userId=${user.userId}`
      );

      return res.data;
    },
  });

  return (
    <section className="h-full flex flex-col">
      {/* top part */}
      <div className="flex items-center justify-between">
        <SectionHeading>Add Your New Task</SectionHeading>
        <BackButton />
      </div>

      {/* main content part */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-12 h-full  flex flex-col"
      >
        <div className="flex flex-grow items-start gap-[22px]">
          {/* left side */}
          <div className="w-full space-y-5">
            {/* single input */}
            <div>
              <p className={smallTextStyle}>Task Name</p>
              <input
                className={commonInputStyle}
                type="text"
                placeholder="Enter Your Task Name"
                {...register("title", {
                  required: {
                    value: true,
                    message: "Please Provide a Task Name",
                  },
                })}
              />
              {errors && (
                <p className="text-red-600  pt-2 font-medium">
                  {" "}
                  {errors.title?.message}{" "}
                </p>
              )}
            </div>
            {/* single input task category */}
            <div className="add-task-select">
              <p className={smallTextStyle}>Select Task Category</p>
              <div className="dropdown-selects relative">
                <input
                  onClick={() => setIsTaskCatActive(!isTaskCatActive)}
                  className={`${commonInputStyle} add--task--input`}
                  type="text"
                  placeholder="Select Category"
                  readOnly
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Please Select a Task Category",
                    },
                  })}
                />

                {errors.category && !touchedFields.category && (
                  <p className="text-red-600  pt-2 font-medium">
                    {" "}
                    {errors.category?.message}{" "}
                  </p>
                )}

                {/* lists */}
                <ul
                  className={`absolute bg-[#fff] top-[80px]  right-0 px-[14px] py-[6px] z-10 shadow-[25px_23px_68px_0px_rgba(10,48,61,0.06)] rounded-lg duration-300 ease-in-out max-h-[220px] overflow-y-auto ${
                    isTaskCatActive
                      ? "opacity-100 visible top-[60px]"
                      : "opacity-0 invisible top-[80px]"
                  } `}
                >
                  {taskCats &&
                    taskCats.length > 0 &&
                    taskCats.map((item, index) => (
                      <li
                        className={`px-3 py-2 cursor-pointer flex items-center gap-2 rounded ${
                          taskCatSelected === item.catName ? "bg-[#E7FBF3]" : ""
                        }`}
                        key={index}
                        onClick={() => {
                          setTaskCatSelected(item.catName);
                          handleCategorySelect(item.catName);
                          setIsTaskCatActive(false);
                        }}
                      >
                        {" "}
                        {taskCatSelected === item.catName ? (
                          <span className="w-[15px] h-[15px] border border-solid rounded border-primaryColor bg-primaryColor relative">
                            <span className="absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="8"
                                viewBox="0 0 10 8"
                                fill="none"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8.83263 1.17574C9.05579 1.41005 9.05579 1.78995 8.83263 2.02426L4.2612 6.82426C4.03805 7.05858 3.67624 7.05858 3.45308 6.82426L1.16737 4.42426C0.944211 4.18995 0.944211 3.81005 1.16737 3.57574C1.39052 3.34142 1.75233 3.34142 1.97549 3.57574L3.85714 5.55147L8.02451 1.17574C8.24767 0.941421 8.60948 0.941421 8.83263 1.17574Z"
                                  fill="#1F1F1F"
                                  stroke="black"
                                  strokeWidth="0.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          </span>
                        ) : (
                          <span className="w-[15px] h-[15px] border border-solid rounded border-[#7a8680]"></span>
                        )}
                        <p className="text-[rgba(6,17,10,0.50)] text-sm leading-5">
                          {item.catName}
                        </p>{" "}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            {/* single input assign people */}
            <div className="assign-task-select">
              <div className="flex items-center gap-1">
                <p className={smallTextStyle}>Assign To</p>{" "}
                <p className="text-xs text-[#5A5C5F] font-medium pb-3">
                  (Optional)
                </p>{" "}
              </div>
              {!isCollaboratorLoading && (
                <div className="dropdown-selects relative">
                  <input
                    onClick={() => {
                      setIsAssignTaskActive(!isAssignTaskActive);
                    }}
                    className={`${commonInputStyle} ${
                      collaborators.length > 0
                        ? ""
                        : "pointer-events-none opacity-50"
                    } capitalize assign--task--input`}
                    type="text"
                    placeholder="Select People"
                    readOnly
                    {...register("collaborator")}
                  />

                  {/* lists */}
                  <ul
                    className={`absolute bg-[#fff] top-[80px] h-[180px] overflow-y-auto right-0 px-[14px] py-[6px] z-10 shadow-[25px_23px_68px_0px_rgba(10,48,61,0.06)] rounded-lg duration-300 ease-in-out w-[220px]  space-y-2 ${
                      isAssignTaskActive
                        ? "opacity-100 visible top-[60px]"
                        : "opacity-0 invisible top-[80px]"
                    } `}
                  >
                    {collaborators && collaborators.length > 0 ? (
                      collaborators.map((singlePerson, index) => (
                        <li
                          className={`px-3 py-2 cursor-pointer flex items-center gap-2 rounded ${
                            taskAssignSelected?.friendName ===
                            singlePerson.friendName
                              ? "bg-[#E7FBF3]"
                              : ""
                          }`}
                          key={index}
                          onClick={() => {
                            handleCollaboratorSelect(singlePerson);
                            setTaskAssignSelected(singlePerson);
                            setIsAssignTaskActive(false);
                          }}
                        >
                          <img
                            className="w-6 h-6 rounded-full object-cover"
                            src={
                              singlePerson.img
                                ? `data:image/jpeg;base64,${singlePerson.img}`
                                : defaultProfile
                            }
                            alt=""
                          />
                          <p className="text-sm leading-4 capitalize text-[rgba(6,17,10,0.50)] ">
                            {singlePerson.friendName}
                          </p>
                        </li>
                      ))
                    ) : (
                      <li>No one to add</li>
                    )}
                  </ul>
                </div>
              )}
            </div>

            {/* text field */}
            <div>
              <p className={smallTextStyle}>Description</p>
              <textarea
                {...register("description")}
                className={`${commonInputStyle} resize-none h-[140px]`}
                placeholder="Enter your description here..."
              ></textarea>
            </div>
          </div>

          {/* right side */}
          <div className="min-w-[415px] max-w-[415px]">
            <p className={smallTextStyle}>Select Due Date</p>

            {/* calendar wrapper */}
            <div className="h-[345px]">
              <Calendar
                onChange={setDateValue}
                value={dateValue}
                prev2Label={null}
                next2Label={null}
                prevLabel={<CalendarPrevNextIcon />}
                nextLabel={<CalendarPrevNextIcon />}
                minDate={new Date()}
              />
            </div>
          </div>
        </div>

        {/* add task button */}
        <div className="w-[270px]">
          <CommonButton text={"Add New Task"} smallIcon={ArrowRight} />
        </div>

        {/* success pop up */}
        <CongratsPopUp
          isActive={isCongratsActive}
          setIsActive={setIsCongratsActive}
          mainText={"Successfully created new Task!"}
          subtext={"Your Task can be use it now Task list. Try it now"}
          hasButton={true}
        />
      </form>
    </section>
  );
};

export default AddTask;
