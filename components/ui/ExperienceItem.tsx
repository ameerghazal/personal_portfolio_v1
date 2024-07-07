import { IExperienceItem } from "@/data/interface";

const ExperienceItem: React.FC<IExperienceItem> = ({
  title,
  company,
  dates,
  bulletPoints,
}) => (
  <div className="flex flex-col gap-4">
    <div>
      <h3 className="text-xl">
        {title} @ <b>{company}</b>
      </h3>
      <span className="text-[#ADB7BE]">{dates}</span>
    </div>
    <div>
      <ul className="max-w-650 text-m">
        {bulletPoints.map((point: string, index: number) => (
          <li
            key={index}
            className="before:content-['\003C__'] after:content-['_/_\003E']"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ExperienceItem;
