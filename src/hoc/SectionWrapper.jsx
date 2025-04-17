import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) => {
  return function HOC(props) { // Ensure it receives props
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddingx} max-w-7xl mx-auto p-5 relative z-10`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component {...props} /> {/* Pass props to the wrapped component */}
      </motion.section>
    );
  };
};

export default SectionWrapper;
