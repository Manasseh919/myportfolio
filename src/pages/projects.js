import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/second.png";
import stack from "../../public/images/projects/stackoverflow.png";
import productfeedback from "../../public/images/projects/productfeedback.png";
import laundry from "../../public/images/projects/laundry.png";
import trello from "../../public/images/projects/trello.png";


import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark relative rounded-br-2xl bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit the project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex items-center flex-col justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 ">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Manasseh | Project Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                title="Church App"
                summary="This project was built using react native and firebase. The app is was built for Charlotte Immanuel Church of all nations.Users can get access to church videos and events and other things. You can get access to the apps on both Playstore and App store by searching Charlotte Immanuel"
                link="https://play.google.com/store/apps/details?id=com.manasseh919.charlotte"
                type="Client Project"
                img={project1}
                github="/"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Stack Overflow Clone"
                link="https://github.com/Manasseh919/stack_over_flow"
                type="Personal Project"
                img={stack}
                github="https://github.com/Manasseh919/stack_over_flow"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Frontend Mentor Project"
                link="https://manasseh-project.netlify.app/"
                type="Featured Project"
                img={productfeedback}
                github="https://github.com/Manasseh919/amalitech-training-project"
              />
            </div>
            <div className="col-span-12">
              {/* <FeaturedProject
                title="Twitter Clone(Full Stack)"
                summary="This project was built using react native and firebase. The app is was built for Charlotte Immanuel Church of all nations.Users can get access to church videos and events and other things. You can get access to the apps on both Playstore and App store by searching Charlotte Immanuel"
                link="https://play.google.com/store/apps/details?id=com.manasseh919.charlotte"
                type="Featured Project"
                img={project1}
                github="/#"
              /> */}
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Laundry App"
                link="https://github.com/Manasseh919/Full-Stack-Laundry"
                type="Personal Project"
                img={laundry}
                github="https://github.com/Manasseh919/Full-Stack-Laundry"
              />
            </div>
            <div className="col-span-6">
              {" "}
              <Project
                title="Trello Clone"
                link="https://github.com/Manasseh919/My_personal-_Daily_Task_Manager"
                type="Personal Project"
                img={trello}
                github="https://github.com/Manasseh919/My_personal-_Daily_Task_Manager"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
