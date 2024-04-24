import React from "react";
import Task from "./Task";

function TaskList() {
  const taskList = [
    {
      id: 1,
      title: "Art and Craft",
      description:
        "Select the role that you want to candidates for and upload your job description. Select the role that you want to candidates for and upload your job description. Select the role that you want to candidates for and upload your job description. Select the role that you want to candidates for and upload your job description.",
      date: "Friday, April 19 - 2024",
      status: "pending",
      collaborator: {
        profile_img: "url",
        profile_name: "Young",
      },
      point: 20,    
      category: "Family",
    },
  ];

  return (
    <div>
      {/* list wrapper */}
      <div className="grid grid-cols-3 gap-6">
        <Task></Task>
      </div>
    </div>
  );
}

export default TaskList;
