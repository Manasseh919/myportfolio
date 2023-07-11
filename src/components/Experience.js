import React from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position} &nbsp; <a href={companyLink} className="text-primary capitalize" target="_blank">@{company}</a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time}|{address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative">
        <div className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"/>
        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <li>
            <Details
              position="Junior Mobile Dev(Internship)"
              company="AfroLynk Space"
              time="OCT, 2021 – DEC,2021"
              address="Sekondi-Takoradi,Ghana"
              work="During my internship, I worked on various projects that involved designing and implementing complex UI components, integrating third-party libraries and APIs, and implementing data management and storage solutions. I have also gained expertise in debugging and testing applications to ensure they function correctly and provide a seamless user experience."
            />
            <Details
              position="Web Developer (Internship)"
              company=" Creation Unite"
              time="MARCH 2022 – JULY,2022"
              address="Remote"
              work="I have gained valuable skills in developing and designing high-quality websites. During my internship, I worked on several projects that involved building user-friendly interfaces and implementing responsive designs that adapt to different screen sizes."
            />
            <Details
              position="Marketer (Internship)"
              company=" Zenith Bank Ghana (Takoradi Harbour)"
              time="SEP, 2022 – OCT,2022"
              address="Sekondi-Takoradi,Ghana"
              work="My experience working with senior marketers has allowed me to develop skills in market research, developing marketing plans, and executing marketing campaigns across multiple channels. I have gained experience in using various digital marketing tools"
            />
            <Details
              position="Web Developer(Internship)"
              company="Ampe Digital"
              time="OCT 2022 – JAN,2022"
              address="Sekondi-Takoradi,Ghana"
              work="Building a website for a client as a web developer intern using WordPress was a great learning experience. I had to use my problem-solving skills to troubleshoot issues that arose during the development process. I also had to ensure that the website was responsive and user-friendly."
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
