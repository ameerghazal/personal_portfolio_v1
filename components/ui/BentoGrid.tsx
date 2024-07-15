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
    </div>
  );
};

export default BentoGrid;
