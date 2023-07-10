import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/sub2.png";

const about = () => {
  return (
    <>
      <Head>
        <title>Manasseh | About Page</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose! " className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Myself
              </h2>
              <p className="font-medium ">
                Hi, I'm Manasseh, a mobile app and a web developer with a
                passion for creating beautiful, functional, and user-centered
                digital experiences. With 2 years of experience in the field. I
                am always looking for new and innovative ways to bring my
                clients' visions to life.
              </p>
              <p className="font-medium  my-4">
                I believe that coding is about more than just writing lines of
                code – it's about solving problems and creating efficient,
                robust software solutions for users.
              </p>
              <p className="font-medium ">
                Whether I'm working on a website, mobile app, or other digital
                product, I bring my commitment to code excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to apply my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid  border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Manasseh"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">5+</span>
                <h2 className="text-xl  font-medium capitalize text-dark/75">Satisfied clients</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">40+</span>
                <h2 className="text-xl  font-medium capitalize text-dark/75">Projects completed</h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">2+</span>
                <h2 className="text-xl  font-medium capitalize text-dark/75">Years of experience</h2>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;