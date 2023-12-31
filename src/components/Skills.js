import React from "react";

import { motion, useScroll } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute "
      whileHover={{ scale: 1.05 }}
      initial={{x:0,y:0}}
      whileInView={{x:x,y:y}}
      transition={{duration:1.5}}
      viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center"> Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web/Mobile
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JAVASCRIPT" x="20vw" y="6vw" />
        <Skill name="REACT JS" x="0vw" y="12vw" />
        <Skill name="REACT NATIVE" x="-20vw" y="-15vw" />
        <Skill name="NODE JS" x="15vw" y="-12vw" />
        <Skill name="REDUX" x="32vw" y="-5vw" />
        <Skill name="EXPRESS" x="0vw" y="-20vw" />
        <Skill name="MONGO DB" x="-25vw" y="18vw" />
        <Skill name="FIREBASE" x="18vw" y="18vw" />
        <Skill name="NEXT JS" x="-11vw" y="19vw" />
        <Skill name="TAILWIND CSS" x="-3vw" y="25vw" />
        <Skill name="STYLED COMPONENT" x="-30vw" y="-5vw" />
        <Skill name="TYPESCRIPT" x="-10vw" y="-5vw" />
       
      </div>
    </>
  );
};

export default Skills;
