import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]  "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16">
        {" "}
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative  lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor in Computer Application (BCA)"
            time="Present"
            place="Chuchepati, Kathmandu 44600"
            info="Aadim National College - AADIM COLLEGE offers the best programs for undergraduate level, 4 years of 8 semesters BCA (Bachelor of Computer Application), BBS (Bachelor of Business Studies) and BSW (Bachelors of Social Work) degrees affiliated to TRIBHUVAN UNIVERSITY. "
          />
       
          <Details
            type="Intermediate"
            time="2017-2019"
            place="Chabahil, Kathmandu"
            info="Pushpalal Memorial College - PLMC is affiliated to Tribhuvan University (TU) and National Examination Board (NEB). I had read class 11 & 12 on there. "
          />
       
          <Details
            type="Secondary Education Examination"
            time="2005-2017"
            place="Kapan, Budhanilkantha"
            info="Pioneer Public School - Pioneer Public School later become the kathmandu Vidhyalaya, I studied from class one to ten in that school"
          />
       
        </ul>
      </div>
    </div>
  );
};

export default Education;
