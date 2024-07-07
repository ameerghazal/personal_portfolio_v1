import React from "react";
import FlippableCard from "./FlippableCard";
import { activities } from "@/data";
import { IActivity } from "@/data/interface";

const BentoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-10 gap-2 h-[650px]">
      {activities.map((item: IActivity, index: number) => (
        <FlippableCard key={index} {...item} />
      ))}

      {/* <div className="col-start-1 col-end-6 row-start-1 row-end-7 rounded-lg cursor-pointer relative overflow-hidden">
        <a className="list-none" href="https://hacklahoma.org/" target="_blank">
          <Image
            src="/hacklahoma_team.svg"
            alt="Hacklahoma team photo"
            className="w-full h-full object-cover rounded-lg custom-blur-brightness hover:custom-activity-hover"
            width={300}
            height={300}
          />
          <div className="flex flex-col absolute inset-0 items-center justify-center p-4 opacity-0 visibility-hidden hover:opacity-100 hover:visibility-visible  transition-opacity duration-300 ease-in-out">
            <h2 className="p-0 m-4 font-bold">Finance Director, Hacklahoma</h2>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="before:content-['\003C__'] after:content-['_/_\003E']">
                Largest Hackathon in Oklahoma.
              </li>
              <li className="before:content-['\003C__'] after:content-['_/_\003E']">
                Organize for 170+ students and 20+ companies.
              </li>
              <li className="before:content-['\003C__'] after:content-['_/_\003E']">
                Over $20,000+ raised.
              </li>
            </ul>
          </div>
        </a>
      </div>
      <div className="col-start-6 col-end-9 row-start-1 row-end-7 cursor-pointer ">
        <a
          className="list-none"
          href="https://www.instagram.com/ou_uxdesign/"
          target="_blank"
        >
          <Image
            src="/UI_logo.svg"
            alt="OU UI/UX club logo"
            className="w-full h-full object-cover rounded-lg object-center custom-blur-brightness hover:custom-activity-hover"
            width={300}
            height={300}
          />
        </a>
      </div>
      <div className="col-start-9 col-end-11 row-start-1 row-end-5 bg-black rounded-lg cursor-pointer">
        <a
          className="list-none"
          href="https://icodeschool.com/"
          target="_blank"
        >
          <Image
            src="/icode_logo.svg"
            alt="iCode Logo"
            className="w-full h-full object-cover rounded-lg p-10 custom-blur-brightness hover:custom-activity-hover"
            width={300}
            height={300}
          />
        </a>
      </div>
      <div className="col-start-1 col-end-5 row-start-7 row-end-11 cursor-pointer">
        <a
          className="list-none"
          href="https://www.instagram.com/ou.artificial/"
          target="_blank"
        >
          <Image
            src="/AI_logo.svg"
            alt="OU AI/ML club logo"
            className="w-full h-full object-cover rounded-lg custom-blur-brightness hover:custom-activity-hover"
            width={300}
            height={300}
          />
        </a>
      </div>
      <div className="col-start-5 col-end-9 row-start-7 row-end-11 cursor-pointer">
        <a
          className="list-none"
          href="https://www.ou.edu/sga/cac/high-school-leadership-conference"
          target="_blank"
        >
          <Image
            src="/hslc_team.svg"
            alt="OU Highschool Student Leadership Council team"
            className="w-full h-full object-cover rounded-lg custom-blur-brightness hover:custom-activity-hover"
            width={300}
            height={300}
          />
        </a>
      </div>
      <div className="col-start-9 col-end-11 row-start-5 row-end-11 cursor-pointer">
        <a className="list-none" href="https://www.ou.edu/sga" target="_blank">
          <Image
            src="/ou_sga.svg"
            alt="OU Student Government Logo"
            className="w-full h-full object-cover rounded-lg custom-blur-brightness hover:custom-activity-hover"
            width={300}
            height={300}
          />
        </a>
      </div>
      */}
    </div>
  );
};

export default BentoGrid;
