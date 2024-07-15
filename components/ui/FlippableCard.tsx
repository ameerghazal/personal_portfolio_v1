import { IActivity } from "@/data/interface";
import React from "react";
import Image from "next/image";
import { IconExternalLink } from "@tabler/icons-react";

const FlippableCard: React.FC<IActivity> = (props) => {
  return (
    <div className={`${props.classNames} w-full h-full`}>
      <div className="relative w-full h-full group perspective transform-style-3d">
        {/* Front of the card. */}
        <div className="absolute w-full h-full top-0 left-0 backface-hidden overflow-hidden transition-all duration-1000 transform group-hover:-rotate-y-180">
          <div className="w-full h-full">
            <Image
              src={props.src}
              alt={props.alt}
              className={`w-full h-full object-cover rounded-lg ${props?.imgStyles}`}
              width={300}
              height={300}
            />
          </div>
        </div>
        {/* Back of the card. */}
        <div className="absolute w-full h-full top-0 left-0 backface-hidden overflow-hidden transition-all duration-1000 ease-in-out rotate-y-180 group-hover:rotate-y-360">
          <div className="w-full h-full relative">
            <Image
              src={props.src}
              alt={props.alt}
              className={`w-full h-full object-cover rounded-lg custom-activity-hover ${props?.imgStyles}`}
              width={300}
              height={300}
            />
          </div>
          <div className="flex flex-col absolute inset-0 items-center justify-center p-4">
            <h2
              className={`p-0 m-4 font-bold ${props.headerSize} text-textColor`}
            >
              {props.title}, {props.club}
            </h2>
            <ul className={`flex flex-col gap-4 ${props.descriptionSize}`}>
              {props.content.map((item: string, index: number) => (
                <li key={index}>
                  <span className="text-textColor">
                    &lt;{item}&nbsp;&#47;&gt;
                  </span>
                </li>
              ))}
            </ul>
            <a
              className="absolute top-8 right-8 text-tertiary hover:opacity-55 active:opacity-55 transition-all duration-800"
              href={props.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
