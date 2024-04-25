import React, { useState } from "react";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import CommonButton from "../../components/CommonButton/CommonButton";
import { useNavigate } from "react-router-dom";

export default function CollaborativeTask() {
  const navigate = useNavigate();

  const Collaboratives = [
    {
        id:1,
        image:'https://i.ibb.co/84p7YWM/close-up-happy-amazed-young-african-american-dark-skinned-man-feels-great-wears-orange-rain-coat-bro.png',
        name:'Hope Young',
        taskAmount:2,
    },
    {
        id:2,
        image:'https://i.ibb.co/qnCYtR5/napat-saeng-zx9p82-J9sc-unsplash.png',
        name:'Marco',
        taskAmount:3,
    },
    {
        id:3,
        image:'https://i.ibb.co/t8ckFwh/image-114.png',
        name:'Hope',
        taskAmount:10,
    },
    {
        id:4,
        image:'https://i.ibb.co/RCgVwkT/mike-von-TPUGb-Qmy-Vw-E-unsplash.png',
        name:'Robart',
        taskAmount:12,
    },
    {
        id:5,
        image:'https://i.ibb.co/JkXjc5Q/jovem-alegre-bonito-homem-barbudo-com-tatuagens-olhando-para-o-lado-com-um-sorriso-largo-e-sincero-e.png',
        name:'Young',
        taskAmount:2,
    },
    {
        id:6,
        image:'https://i.ibb.co/4WGwtQk/Adobe-Stock-330456933.png',
        name:'Ben',
        taskAmount:5,
    },
  ]

  const [collaboratives, setCollaboratives ] = useState(Collaboratives);

  return (
    <section>
      <div className="flex items-center  justify-between">
        <SectionHeading>Collaborative Task</SectionHeading>

        <div className="flex items-center justify-center gap-[20px]">
          <div className="w-[180px]" onClick={() => navigate("/demo")}>
            <CommonButton
              text="Friends  Requests"
              bGcolor="rgba(199, 22, 243, 0.15)"
              color="#C716F3"
            />
          </div>
          <div className="w-[146px]" onClick={() => navigate(-1)}>
            <CommonButton text="Back"/>
          </div>
        </div>
      </div>
      {/* collaborative friends */}
      <div className="mt-[37px]"> 
        {/* friend list  */}
        <div className="w-[390px] py-[22px] rounded-[5px] border-[1px] border-[#e1e1e1] box-shadow-[0px_1px_3px_0px_rgba(0,0,0,0.12)]">
            <p className="text-base font-semibold text-headingColor px-[24px]">Friends list</p>
            <ul className="h-[320px] overflow-auto">
                {
                collaboratives.map((collaborative) => (
                    <li className="flex items-center gap-[14px] py-[9px] px-[24px] mt-[8px]">
                        <div>
                            <img className="w-12 h-12 rounded-full object-cover" src={collaborative.image} alt="" />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold mb-[6px]">{collaborative.name}</h3>
                            <p className="text-sm text-[#5A5C5F]">{collaborative.taskAmount} Task With You </p>
                        </div>
                    </li>
                ))
                }
            </ul>
        </div>
        <div>

        </div>
      </div>
    </section>
  );
}
