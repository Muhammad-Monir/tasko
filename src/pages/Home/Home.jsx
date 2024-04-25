import CategorySelect from "../../components/Select/CategorySelect";
import StatusSelect from "../../components/Select/StatusSelect";
import CommonButton from "../../components/CommonButton/CommonButton";
import AddSvg from "../../assets/images/addicon.svg";
import TaskList from "../../components/Home/Task/TaskList";
import SectionHeading from "../../components/SectionHeading/SectionHeading";

const Home = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <SectionHeading>All Task List</SectionHeading>
        <div className="flex items-start gap-[16px]">
          <CategorySelect />
          <StatusSelect />
          <div className="w-[231px]">
              <CommonButton icon={AddSvg} text="Add New Task" />
          </div>
        </div>
      </div>

      {/* tasks  */}
      <div className="tasklist--wrapper overflow-y-auto max-h-[55vh] mt-14 pr-2 pb-4 ">
        <TaskList />
      </div>
    </section>
  );
};

export default Home;
