import React from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { github, linkedin, gmail } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_nm0ljeo",
        "template_kcfjcnd",
        {
          from_name: form.name,
          to_name: "Nikhil",
          from_email: form.email,
          to_email: "nikhilnagardev@gmail.com",
          message: form.message,
        },
        "QRnunrdi0-WHA7TxL"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks, I'll get back to you.");

          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong! Please check console");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <div className="flex justify-between items-center">
          <h3 className={`${styles.sectionHeadText} w-1/2`}>Contact</h3>
          <div className="flex justify-between items-center gap-1 w-1/4 ">
            <a
              href="https://www.linkedin.com/in/nikhil-nagar-81b223183/"
              target="_blank"
              title="Linkedin"
              className="hover:bg-green-300 px-1 mx-1">
              <img
                src={linkedin}
                className="w-10 h-10 cursor-pointer object-contain"
                alt="linkedin"
              />
            </a>

            <a
              href="https://github.com/nikhilnagargit"
              className="hover:bg-purple-300 px-1 mx-1"
              title="Github"
              target="_blank">
              <img
                src={github}
                className="w-10 h-10 cursor-pointer object-contain"
                alt="github"
              />
            </a>

            <a
              href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=nikhilnagarcps@gmail.com&tf=1"
              className=" hover:bg-yellow-200 px-1  mx-1"
              title="nikhilnagarcps@gmail.com"
              target="_blank">
              <img
                src={gmail}
                className="w-10 h-10 cursor-pointer object-contain"
                alt="github"
              />
            </a>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-white font-small mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none text-[12px]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none text-[12px]"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              type="text"
              rows={3}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-2 px-6 placeholder:text-secondary text-white rounded-lg outlined-none text-[12px]"
            />
          </label>
          <button
            className="rounded-xl bg-[#915EFF] py-2 px-6 outline-none w-fit text-white font-bold shadow-md shadow-primary"
            type="submit">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        variants={slideIn("right", "tween", 0.2, 1)}>
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
