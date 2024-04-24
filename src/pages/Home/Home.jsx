import { useState } from "react";
import CategorySelect from "../../components/Select/CategorySelect";
import StatusSelect from "../../components/Select/StatusSelect";
import CommonButton from "../../components/CommonButton/CommonButton";
import AddSvg from "../../assets/images/addicon.svg"

const Home = () => {
 
  

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-semibold text-headingColor">All Task List</h2>
        <div className="flex items-start gap-[16px]">
            <CategorySelect />
            <StatusSelect />
            <CommonButton icon={AddSvg} text="Add New Task" />
        </div>
      </div>
    </section>
  );
};

export default Home;
