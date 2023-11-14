import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Animatedtext from "@/components/Animatedtext";
import Image from "next/image";
import Link from "next/link";
import projectImage from "../../public/images/projects/User-Data-API-Flow-3.png";
import projectImage1 from "../../public/images/projects/maps2.png";
import projectImage2 from "../../public/images/projects/joke2.png"
import projectImage3 from "../../public/images/projects/nextauth.png"
import projectImage4 from "../../public/images/projects/hooks.png"
import projectImage5 from "../../public/images/projects/shoes1.png"
import { GithubIcon } from "@/components/Icons";
import {motion} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid 
    border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-8 relative rounded-br-2xl
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
          <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl
          xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        < FramerImage src={img} alt={title} className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-16 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary  dark:text-primaryDark font-medium text-xl xs:text-base">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2
            px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project1= ({ title, type, img, github, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center  rounded-2xl border border-solid border-dark 
    bg-light  dark:bg-dark dark:border-light -mt-4 relative md:p-2 lg:p-6 xl:p-8">
   <div className="absolute top-0 -right-3 md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark  dark:bg-light rounded-br-3xl"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        < FramerImage  src={img} alt={title} className="w-full h-auto px-4 py-3 rounded-3xl" 
        whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}/>
      </Link>
      <div className="w-full flex flex-col items-start justify-between pl-16 lg:pl-14 md:pl-2">
        <span className="text-primary dark:text-primaryDark font-medium text-xl lg:text-lg">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl md:text-xl sm:text-sm">{title}</h2>
        </Link>
        {/* <p className="my-2 font-medium text-dark">{summary}</p> */}
        <div className=" w-full mt-2 flex items-center justify-between">
        <Link
            href={link}
            target="_blank"
            className="
             text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-10 md:w-6 pr-3 pb-3">
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
        <title>Rahi Chauhan | Projects page</title>
        <meta
          name="description"
          content="Passionate web developer with a strong penchant for backend technologies. I thrive on building robust and efficient systems that power the web. Committed to crafting seamless user experiences through cutting-edge server-side solutions. Constantly exploring new technologies and staying ahead in the ever-evolving world of web development"
        ></meta>
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-20 flex flex-col items-center justify-center dark:text-light">
        <Layout className="">
          <Animatedtext
            text=" Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ">
            <div className="col-span-12">
              <FeaturedProjects
                title="MultiDevLocator"
                img={projectImage1 }
                summary="MultiDevLocator is a location tracking system that displays real-time device positions on a map. Device locations are acquired through connected hardware. The system supports multiple devices, offering versatile tracking capabilities. Hardware implementation is currently under consideration."
                link="https://github.com/Rahichauhan/MultiDevLocator.git"
                github="https://github.com/Rahichauhan"
                type="Featured project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12"> 
            <Project1
                title=" User Authentication and Data Management Backend"
                img={projectImage}
                // summary="Developed web app with user authentication, diligent data
                // management and efficient session handling converge to ensure
                // security and authentication mechanisms ,encryption, hashing
                // and controlled access which maintains both privacy and
                // usability."
                link="https://github.com/Rahichauhan/loginRegistrationWithAuth.git"
                github="https://github.com/Rahichauhan"
                type="Featured project"
              />
              </div>
            <div className="col-span-6 sm:col-span-12">  <Project1
                title=" Joke-API"
                img={projectImage2}
                // summary="Developed web app with user authentication, diligent data
                // management and efficient session handling converge to ensure
                // security and authentication mechanisms ,encryption, hashing
                // and controlled access which maintains both privacy and
                // usability."
                link="https://github.com/Rahichauhan/Joke-API2.git"
                github="https://github.com/Rahichauhan"
                type="Featured project"
              /></div>

            <div className="col-span-12"> <FeaturedProjects
                title=" SecureLogin-NextAuth"
                img={ projectImage3}
                summary="A secure login system is implemented using NextAuth in a Next.js application, ensuring robust authentication. NextAuth simplifies the integration of various authentication providers, enhancing user security. The setup involves minimal code, providing a seamless and reliable login experience. With NextAuth in Next.js, developers can easily implement authentication while maintaining a focus on application logic."
                link="https://github.com/Rahichauhan/SecureLogin-NextAuth.git"
                github="https://github.com/Rahichauhan"
                type="Featured project"
              /></div>
            <div className="col-span-6 sm:col-span-12 "><Project1
                title="React-Hooks"
                img={projectImage4 }
                // summary="Developed web app with user authentication, diligent data
                // management and efficient session handling converge to ensure
                // security and authentication mechanisms ,encryption, hashing
                // and controlled access which maintains both privacy and
                // usability."
                link="https://github.com/Rahichauhan/React-Next-Hooks.git"
                github="https://github.com/Rahichauhan"
                type="Featured project"
              /></div>

            <div className="col-span-6 sm:col-span-12"><Project1
                title="ShoeVista"
                img={projectImage5}
                // summary="Developed web app with user authentication, diligent data
                // management and efficient session handling converge to ensure
                // security and authentication mechanisms ,encryption, hashing
                // and controlled access which maintains both privacy and
                // usability."
                link="https://github.com/Rahichauhan/WT-Project1.git"
                github="https://github.com/Rahichauhan"
                type="Featured project"
              /></div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;