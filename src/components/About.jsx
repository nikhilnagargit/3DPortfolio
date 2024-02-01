import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.div
        className="mt-2 text-secondary text-[14px] max-w-3xl leading-[25px]"
        variants={fadeIn("", "", 0.1, 1)}>
        <span className="border border-green-300 rounded-full px-1 text-white">
          Creative
        </span>{" "}
        and{" "}
        <span className="border border-yellow-300 rounded-full px-1 text-white">
          confident
        </span>{" "}
        individual who develop software solutions to simplify business
        processes. I possess proficiency in{" "}
        <span className="border border-blue-300 rounded-full px-1 text-white">
          Frontend
        </span>
        {", "}
        <span className="border border-orange-300 rounded-full px-1 text-white">
          DSA
        </span>
        {", and "}
        <span className="border border-violet-300 rounded-full px-1 text-white">
          Cloud
        </span>{" "}
        technologies. I see myself to be a UI architect in future.
        <br></br>
        <br></br>
        <ul className="text-white">
          <li>Oracle Certified: Cloud Architecht Associate 2023</li>
          <li>
            Oracle Certified: Cloud Application Integration 2023 Certified
            Specialist
          </li>
          <li>Microsoft Certified: Azure Administrator Associate</li>
          <li>Microsoft Certified: Azure Fundamentals</li>
        </ul>
      </motion.div>
      <div className="mt-5 flex flex-wrap gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={service.title} index={index} {...service} />;
        })}
      </div>
    </>
  );
};

// using HOC(Higher oredr component)
export default SectionWrapper(About, "about");
