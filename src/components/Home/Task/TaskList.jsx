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
    {
      id: 2,
      title: "Marketing Campaign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet justo ac consequat vehicula.",
      date: "Monday, May 7 - 2024",
      status: "done",
      collaborator: {
        profile_img: "url",
        profile_name: "Smith",
      },
      point: 15,
      category: "Business",
    },
    {
      id: 3,
      title: "Cooking Competition",
      description:
        "Quisque euismod ante eget odio volutpat, at ullamcorper dolor dignissim. Vivamus quis enim id sem ullamcorper tincidunt.",
      date: "Wednesday, June 12 - 2024",
      status: "progress",
      collaborator: {
        profile_img: "url",
        profile_name: "Johnson",
      },
      point: 25,
      category: "Food",
    },
    {
      id: 4,
      title: "Fitness Challenge",
      description:
        "Fusce in purus lobortis, feugiat sapien eget, fermentum nunc. Donec consequat bibendum mi, nec volutpat neque.",
      date: "Saturday, July 3 - 2024",
      status: "pending",
      collaborator: {
        profile_img: "url",
        profile_name: "Williams",
      },
      point: 30,
      category: "Health",
    },
    {
      id: 5,
      title: "Book Club Discussion",
      description:
        "Nulla eget elit sed justo lobortis vehicula ut non arcu. Phasellus sit amet urna quis metus laoreet eleifend.",
      date: "Tuesday, August 22 - 2024",
      status: "done",
      collaborator: {
        profile_img: "url",
        profile_name: "Brown",
      },
      point: 10,
      category: "Education",
    },
    {
      id: 6,
      title: "Gardening Workshop",
      description:
        "Integer id arcu finibus, rhoncus justo non, consequat turpis. Donec vehicula enim auctor dolor lacinia, id dictum velit bibendum.",
      date: "Friday, September 10 - 2024",
      status: "pending",
      collaborator: {
        profile_img: "url",
        profile_name: "Jones",
      },
      point: 20,
      category: "Home & Garden",
    },
    {
      id: 7,
      title: "Photography Contest",
      description:
        "Curabitur vitae augue et justo fringilla placerat. Nunc consectetur erat quis ex molestie, at hendrerit leo varius.",
      date: "Sunday, October 5 - 2024",
      status: "progress",
      collaborator: {
        profile_img: "url",
        profile_name: "Davis",
      },
      point: 15,
      category: "Art & Photography",
    },
    {
      id: 8,
      title: "Charity Fundraiser",
      description:
        "Etiam vitae quam vel nisi fermentum fermentum. Vestibulum finibus est ac felis auctor, sit amet pharetra lectus convallis.",
      date: "Wednesday, November 20 - 2024",
      status: "done",
      collaborator: {
        profile_img: "url",
        profile_name: "Miller",
      },
      point: 25,
      category: "Community",
    },
    {
      id: 9,
      title: "Music Concert",
      description:
        "Duis vitae justo sit amet enim aliquam ultrices vitae nec justo. Nunc nec diam a felis ultricies vehicula vel eu quam.",
      date: "Monday, December 15 - 2024",
      status: "pending",
      collaborator: {
        profile_img: "url",
        profile_name: "Wilson",
      },
      point: 30,
      category: "Entertainment",
    },
    {
      id: 10,
      title: "Coding Workshop",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vel metus sit amet nisi condimentum auctor.",
      date: "Thursday, January 2 - 2025",
      status: "done",
      collaborator: {
        profile_img: "url",
        profile_name: "Taylor",
      },
      point: 20,
      category: "Technology",
    },
    {
      id: 11,
      title: "Fashion Show",
      description:
        "Vivamus dictum risus eu ante lacinia, et aliquam quam tempus. Maecenas in metus nec nisl elementum varius.",
      date: "Saturday, February 8 - 2025",
      status: "progress",
      collaborator: {
        profile_img: "url",
        profile_name: "Anderson",
      },
      point: 15,
      category: "Fashion",
    },
    {
      id: 12,
      title: "Language Exchange",
      description:
        "Aenean lobortis quam nec odio placerat, vel finibus ex convallis. Mauris scelerisque enim eu ante maximus viverra.",
      date: "Monday, March 17 - 2025",
      status: "done",
      collaborator: {
        profile_img: "url",
        profile_name: "Thomas",
      },
      point: 25,
      category: "Language & Culture",
    },
    {
      id: 13,
      title: "Yoga Retreat",
      description:
        "Sed eu libero vitae lacus gravida molestie. Nullam ullamcorper, ipsum sit amet pulvinar venenatis, enim dui tincidunt ex, vel aliquam dui felis eu urna.",
      date: "Thursday, April 3 - 2025",
      status: "pending",
      collaborator: {
        profile_img: "url",
        profile_name: "Clark",
      },
      point: 30,
      category: "Wellness",
    },
    {
      id: 14,
      title: "DIY Workshop",
      description:
        "Donec auctor diam in est bibendum, eu hendrerit ex interdum. Nam vel arcu nec odio aliquam mattis.",
      date: "Saturday, May 20 - 2025",
      status: "done",
      collaborator: {
        profile_img: "url",
        profile_name: "Lewis",
      },
      point: 20,
      category: "DIY & Crafts",
    },
  ];

  return (
    <div className="overflow-y-scroll max-h-[55vh] mt-14 pr-2 pb-4 ">
      {/* list wrapper */}
      <div className="grid grid-cols-3 gap-6 ">
        {taskList.map((singleTask, index) => (
          <Task key={index} taskInfo={singleTask}></Task>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
