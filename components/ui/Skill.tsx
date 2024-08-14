import { ISkill } from "@/data/interface";
import React from "react";

/**
 * This component represents a skill, displaying an icon followed by the skill's name or description.
 * @param {React.ReactElement} icon - The icon representing the skill, typically a React component or an SVG.
 * @param {string} skill - The name or description of the technology or skill being represented.
 * @returns {React.ReactElement} A row containing the skill's icon followed by its name or description.
 * @author Ameer Ghazal
 */
const Skill = ({ icon, skill }: ISkill): React.ReactElement => {
  return (
    <React.Fragment>
      <span>{icon}</span>
      {skill}
    </React.Fragment>
  );
};

export default Skill;
