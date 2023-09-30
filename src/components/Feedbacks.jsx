import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { motion } from "framer-motion";

import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-5 rounded-2xl xs:w-[310px] w-full">
      <div className="mt-1">
        <p className="text-white tracking-wider text-[12px]">
          {" "}
          "{testimonial}"
        </p>
        <div className="mt-4 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[14px]">
              <span className="blue-text-gradient"> @ </span>
              {name}
            </p>
            <p className=" text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-9 h-9 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className=" bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What others say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => {
          return (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}></FeedbackCard>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
