import { useState } from "react";
import BackButton from "../../components/BackButton.jsx/BackButton";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import "./AddTask.css";

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
  const smallTextStyle =
    "text-base text-headingColor leading-5 font-semibold pb-3";
  const commonInputStyle =
    "px-[22px] py-3 rounded border border-solid border-[#E1E1E1] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12)] placeholder:text-[#667085] text-base text-headingColor focus:outline-none w-full";

  const [dateValue, setDateValue] = useState(new Date());

  console.log(dateValue);

  return (
    <section>
      {/* top part */}
      <div className="flex items-center justify-between">
        <SectionHeading>Add Your New Task</SectionHeading>
        <BackButton />
      </div>

      {/* main content part */}
      <form className="pt-12">
        <div className="flex items-start gap-[22px]">
          {/* left side */}
          <div className="w-full">
            {/* single input */}
            <div>
              <p className={smallTextStyle}>Task Name</p>
              <input
                className={commonInputStyle}
                type="text"
                placeholder="Enter Your Task Name"
              />
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
      </form>
    </section>
  );
};

export default AddTask;
