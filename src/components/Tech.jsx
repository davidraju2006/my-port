import { SectionWrapper } from "../hoc"; // Ensure correct import path
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
        </div>
      ))}
    </div>
  );
};

// Call the HOC correctly
export default SectionWrapper(Tech, "tech");
