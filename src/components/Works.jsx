import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { github, live } from "../assets";
import { Link } from "react-router-dom";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo,
}) => {
  return (
    <motion.div
      onClick={() => {
        window.open(source_code_link, "_blank");
      }}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 15, scale: 1, speed: 450 }}
        className="bg-tertiary p-3 rounded-2xl sm:w-[355px] w-full">
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex-row flex justify-end m-2 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient m-1 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer border hover:border-yellow-200 hover:border-2">
              <img
                src={github}
                alt="github"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
            <div
              onClick={() => {
                window.open(live_demo, "_blank");
              }}
              className="black-gradient w-9 h-9 m-1 rounded-full flex justify-center items-center cursor-pointer border hover:border-yellow-200 hover:border-2">
              <img
                src={live}
                alt="live"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <h3 className="font-bold text-white text-[22px]">{name}</h3>
          <p className="text-secondary mt-2 text-[12px]">{description}</p>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => {
            return (
              <p
                key={tag.name}
                className={`text-[12px] font-bold ${tag.color}`}>
                #{tag.name}
              </p>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>My Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-2 text-secondary text-[14px] max-w-3xl leading-[25px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-10 flex flex-wrap gap-7 ">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}></ProjectCard>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
