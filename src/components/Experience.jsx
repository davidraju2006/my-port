import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import styles from '../styles';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import { experiences } from './constants/experiences'; 

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: '#1d1836', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain' />
      </div>
    }
  >
    <div>
      <h3 className='text-[#fff] text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-[#fff] text-[18px]' style={{ margin: 0 }}>{experience.company_name}</p>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.description.map((item, index) => (
          <li key={`experience-point-${index}`} className='text-[#fff] text-[18px]'>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>I've Worked</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
