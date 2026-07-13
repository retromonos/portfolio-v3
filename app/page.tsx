import Image from "next/image";
import Marquee from "react-fast-marquee";
import BlockHeader from "./components/header";
import { projects } from "./json/projects.json";
import { jobs } from "./json/experience.json";
import {
  Briefcase,
  FileText,
  GithubIcon,
  Globe,
  HomeIcon,
  ImageIcon,
  LinkedinIcon,
  Mail,
  Map,
  Wrench,
} from "lucide-react";
import GalleryModal from "./components/gallerymodal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center test main-overlay relative">
      {/* <div className="fixed main-overlay w-[100vw] h-[100vh] z-5 top-0 pointer-events-none"></div> */}
      <section id="home" className="w-full h-80 bg-neutral-900 border-b-4 border-b-neutral-600 relative overflow-hidden z-10">
        <div className="hero-overlay h-full pointer-events-none absolute w-full top-0"></div>
        <div className="max-w-4xl w-full mx-auto h-full flex relative p-2 md:p-0">
          <div  className="relative flex flex-col card-shadow w-fit mt-auto mb-12 md:my-auto z-50 bg-neutral-700 p-2 md:p-0 md:bg-transparent mx-auto lg:mx-0">
            <h1 className="font-interference h-full text-3xl lg:text-5xl name-stroke bg-neutral-800 text-lime-300 text-center w-full md:w-fit py-2 pb-1 px-2 md:px-4 md:outline-8 match-outline">
              Luke Cullen
            </h1>
            <div className="w-fit max-w-full z-20 h-fit mt-1 md:mt-2 flex flex-row justify-center flex-wrap gap-1 overflow-hidden font-mono md:outline-8 match-bg match-outline">
              <div className="bg-neutral-800 tracking-wider text-purple-300 p-2 w-fit">
                SOFTWARE ENGINEER
              </div>
              <div className="bg-neutral-800 tracking-wider text-purple-300 p-2 w-fit ">
                FULL-STACK
              </div>
              <div className="bg-neutral-800 tracking-wider text-purple-300 p-2 w-fit ">
                FRONT-END
              </div>
              <a
                className="hover:underline p-2 bg-neutral-900 transition-colors duration-200 border-4 border-transparent hover:border-purple-900 hover:bg-purple-950 flex relative"
                target="_blank"
                href="mailto:lukeculleninc@gmail.com"
                aria-label="Link to Email: lukeculleninc@gmail.com"
              >
                <div className="w-full h-full absolute top-0 left-0 button-overlay"></div>
                <Mail className="size-4 my-auto text-purple-300"/>
              </a>
              <a
                className="hover:underline p-2 bg-neutral-900 transition-colors duration-200 border-4 border-transparent hover:border-purple-900 hover:bg-purple-950 flex relative"
                target="_blank"
                href="https://github.com/retromonos/"
                aria-label="Link to GitHub"
              >
                <div className="w-full h-full absolute top-0 left-0 button-overlay"></div>
                <GithubIcon className="size-4 my-auto text-purple-300"/>
              </a>
              <a
                className="hover:underline p-2 bg-neutral-900 transition-colors duration-200 border-4 border-transparent hover:border-purple-900 hover:bg-purple-950 flex relative"
                target="_blank"
                href="https://www.linkedin.com/in/luke-cullen-319701305/"
                aria-label="Link to LinkedIn"
              >
                <div className="w-full h-full absolute top-0 left-0 button-overlay"></div>
                <LinkedinIcon className="size-4 my-auto text-purple-300"/>
              </a>
              <a
                className="hover:underline p-2 bg-neutral-900 transition-colors duration-200 border-4 border-transparent hover:border-purple-900 hover:bg-purple-950 flex relative"
                target="_blank"
                href="/LukeCullen_Resume_Master.pdf"
                aria-label="Link to Resume"
              >
                <div className="w-full h-full absolute top-0 left-0 button-overlay"></div>
                <FileText className="size-4 my-auto text-purple-300"/>
              </a>
            </div>
          </div>
        </div>
      </section>
      <main
        className="relative pb-16 lg:pb-32 flex text-neutral-800 min-h-screen w-full max-w-4xl
        flex-col bg-transparent"
      >
        <div className="fixed bg-neutral-800 t3-card-shadow right-10 lg:right-auto -mr-8 p-3 max-w-60 lg:max-w-4xl w-fit self-end top-2 lg:top-4 flex flex-row gap-2 justify-end z-50 text-lime-300 font-interference">
          <Image
            alt="Logo"
            src={"/logotype.png"}
            width={32}
            height={32}
            style={{ imageRendering: "pixelated" }}
            className="lg:pr-2 w-10 mx-auto lg:mx-0 lg:border-r-2 border-r-lime-300"
          ></Image>
          <a
            href="#home"
            className="cursor-pointer px-2 py-1 align-middle h-fit my-auto border-2 border-lime-300 hover:bg-lime-300 hover:text-neutral-800"
          >
            <div className="hidden lg:block">HOME</div>
            <HomeIcon className="block lg:hidden"/>
          </a>
          <a
            href="#experience"
            className="cursor-pointer px-2 py-1 align-middle h-fi my-auto border-2 border-lime-300 hover:bg-lime-300 hover:text-neutral-800"
          >
            <div className="hidden lg:block">EXPERIENCE</div>
            <Briefcase className="block lg:hidden"/>
          </a>
          <a
            href="#projects"
            className="cursor-pointer px-2 py-1 align-middle h-fit my-auto border-2 border-lime-300 hover:bg-lime-300 hover:text-neutral-800"
          >
            <div className="hidden lg:block">PROJECTS</div>
            <Wrench className="block lg:hidden"/>
          </a>
        </div>
        <div className="gap-12 flex flex-col relative">
          <section className="mt-12 flex flex-col gap-10 p-8 py-6 bg-white card-shadow">
            <BlockHeader sideNum="01" className="">
              <div className="my-auto">HELLO!</div>
            </BlockHeader>
            <section className="font-shapiro font-normal text-base/7 lg:text-lg/7 tracking-normal">
              <p className="">
                I&apos;m <span className="font-bold">Luke Cullen</span>, a
                Computer Science Major at the University of Central Florida,
                minoring in Data Science. I&apos;m currently a <a className="underline" href="https://techrangers.cdl.ucf.edu/">
                Techranger</a> at the UCF Center for Distributed Learning, as well as a formner Hackathon Organizer
                for UCF&apos;s premier SWE club, Knight Hacks.
              </p>
              <br />
              <p className="">
                Professionally, my primary goal is to end up somewhere where I
                can make a difference in the world. I love the problem-solving
                tools that my career as a Software Engineer provides me with,
                and I’m always looking for more ways to use them. I hope that my
                current experience and projects help convey that this is where
                my passion lies.
              </p>
            </section>
          </section>
          <div id="experience" className="-mb-10" />
          <section className="flex flex-row gap-10 p-4 lg:p-8 lg:py-6 w-66 lg:w-full lg:sticky top-2 lg:-top-3 z-20 card-shadow bg-white">
            <BlockHeader sideNum="02" className="">
              <div className="my-auto">EXPERIENCE</div>
            </BlockHeader>
          </section>

          {jobs.map((v, i) => {
            return (
              <div
                key={"jobs" + i}
                className={`flex flex-col ${i % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 w-full mt-0 lg:mt-8`}
              >
                <div className="flex flex-row lg:flex-col gap-4 mt-0 mx-auto">
                  <Image
                    alt={v.title + " logo"}
                    src={v.logo}
                    width={196}
                    height={196}
                    className="t2-card-shadow hover:scale-103 size-28 my-auto lg:my-2 lg:size-[196px] duration-100 border-purple-800"
                  />
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <div className="w-full h-fit bg-purple-800 text-white hover:scale-103 duration-100 p-2 sm-card-shadow font-interference text-center">
                      {v.time}
                    </div>
                    <div className="flex flex-row justify-center hover:scale-103 duration-100 gap-2 w-full h-fit bg-purple-800 text-white p-2 sm-card-shadow font-interference text-center">
                      <Map className="size-6 my-auto" />
                      {v.location}
                    </div>
                    <a
                      href={v.links[0]}
                      className="relative flex flex-row justify-center gap-2 w-full h-fit underline-offset-4 border-4 border-purple-800 text-white bg-purple-950 hover:bg-purple-900 hover:underline hover:scale-103 duration-100 p-2 sm-card-shadow font-interference text-center"
                    >
                      <div className="absolute button-overlay w-full h-full top-0" />
                      <Globe className="size-6 my-auto" />
                      Learn More
                  </a>
                  </div>
                </div>
                <div className="flex flex-col gap-0 mt-2 lg:mt-8 mx-auto">
                  <div
                    className={`flex flex-col ${i % 2 == 0 ? "self-start" : "self-start"} transition-transform duration-300 hover:scale-103 gap-2 w-full max-w-[90vw] lg:max-w-2xl bg-lime-950 sm-card-shadow font-mono text-white`}
                  >
                    <div
                      className={`absolute ${i % 2 == 1 ? "self-end -mr-3 lg:-mr-6" : "self-start  -ml-3 lg:-ml-12"} w-fit  -mt-4 z-10`}
                    >
                      <div
                        className={` bg-lime-700 w-fit font-interference py-2.5 p-4 ${i % 2 == 1 ? "lg:pr-8 border-r-12" : "lg:pl-8 border-l-12"} border-lime-600  text-2xl`}
                      >
                        {v.name.toUpperCase()}
                      </div>
                      <div className="hero-overlay absolute w-full h-full top-0 left-0 pointer-events-none" />
                    </div>
                    <div className="h-6 bg-lime-800 w-full"></div>
                    <div className="p-4 w-full text-base flex flex-col gap-2">
                      <div className="font-interference text-xl border-b-lime-800 border-b-2 w-fit pb-1">
                        {v.title}
                      </div>
                      <div className="font-shapiro font-normal tracking-normal border-b-lime-800 border-dotted border-b-2 pb-2" dangerouslySetInnerHTML={{__html: v.description}}/>
                      <ul className="font-shapiro font-normal tracking-wide text-sm/6 list-disc pl-4 flex flex-col gap-2 border-b-lime-800 border-dotted border-b-2 pb-2">
                        {v.bullets.map((b,j) => {
                          return<li key={`job_${i}_b_${j}`} className="" dangerouslySetInnerHTML={{__html:b}}/>
                        })}
                      </ul>
                      <div className="flex flex-row flex-wrap gap-2 w-full" aria-label="Skills Section:">
                        {v.skills.map((s,si) => (<div key={`skill_p${i}_s${si}`} className="uppercase bg-neutral-900 p-1 px-2 border-lime-800">
                          {s}
                        </div>))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div id="projects" className="-mb-10" />
          <section className="flex flex-col gap-10 p-4 lg:p-8 lg:py-6 w-66 lg:w-full lg:sticky top-2 lg:-top-3 z-20 card-shadow bg-white">
            <BlockHeader sideNum="03" className="">
              <div className="my-auto">PROJECTS</div>
            </BlockHeader>
          </section>

          {projects.map((v, i) => {
            return (
              <div
                key={"projects" + i}
                className={`flex flex-col ${i % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"} -mt-8 lg:mt-0 gap-0 lg:gap-8 w-full`}
              >
                <div className="flex flex-row lg:flex-col gap-4 mt-8 mx-auto">
                  <Image
                    src={v.images[0]}
                    width={196}
                    height={196}
                    alt={v.name + " logo"}
                    className="bg-black t-card-shadow size-26 lg:size-[196px] my-auto hover:scale-103 duration-100 border-lime-800"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="w-full h-fit bg-lime-800 text-white hover:scale-103 duration-100 p-2 sm-card-shadow font-interference text-center">
                      {v.time}
                    </div>
                    <a
                      href={v.link}
                      className="relative flex flex-row justify-center gap-2 w-full h-fit underline-offset-4 border-4 border-lime-800 text-white bg-lime-950 hover:bg-lime-900 hover:underline hover:scale-103 duration-100 p-2 sm-card-shadow font-interference text-center"
                    >
                      <div className="absolute button-overlay w-full h-full top-0" />
                      <Globe className="size-6 my-auto" />
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-2 lg:mt-8">
                  <div
                    className={`flex flex-col mt-8 ${i % 2 == 0 ? "self-start" : "self-start"} transition-transform duration-300 hover:scale-103 gap-2 w-full mx-auto max-w-[90vw] lg:max-w-2xl bg-blue-950 sm-card-shadow font-mono text-white`}
                  >
                    <div
                      className={`absolute ${i % 2 == 1 ? "self-end -mr-3 lg:-mr-6" : "self-start -ml-3 lg:-ml-12"} w-fit  -mt-4 z-10`}
                    >
                      <div
                        className={` bg-purple-700 w-fit font-interference py-2.5 p-4 ${i % 2 == 1 ? "lg:pr-8 border-r-12" : "lg:pl-8 border-l-12"} border-purple-600  text-2xl`}
                      >
                        {v.name.toUpperCase()}
                      </div>
                      <div className="hero-overlay absolute w-full h-full top-0 left-0 pointer-events-none" />
                    </div>
                    <div className="h-6 bg-purple-800 w-full"></div>
                    <div className="p-4 w-full text-base flex flex-col gap-2">
                      <div className="font-interference text-xl border-b-purple-800 border-b-2 w-fit pb-1">
                        {v.role}
                      </div>
                      <div className="font-shapiro font-normal tracking-normal">
                        {v.description}
                      </div>
                    </div>
                  </div>
                  {/* <div className="w-full max-w-[90vw] mx-auto lg:max-w-3xl relative z-200"> */}
                    <GalleryModal title={v.name}>
                      <div className="h-full flex flex-col justify-between">
                        <div className="h-6 bg-purple-800 w-full"></div>
                        <div className="flex flex-col w-full h-full relative overflow-scroll pb-8">
                          <div className="mt-10 relative">
                            <div className="absolute top-0 left-0 w-full h-90 button-overlay" />
                            <Carousel className="h-84 flex w-[80%] mt-2 mx-auto relative">
                              <CarouselContent className="flex my-auto h-full">
                                {v.images.map((img, j) => {
                                  if (j == 0) return;

                                  return (
                                    <CarouselItem
                                      className="h-full flex"
                                      key={`pi${i}_${j}`}
                                    >
                                      <img
                                        src={img}
                                        className="h-80 m-auto xs2-card-shadow"
                                      />
                                    </CarouselItem>
                                  );
                                })}
                              </CarouselContent>
                              <CarouselPrevious className="rounded-none bg-purple-800 xs2-card-shadow cursor-pointer p-4 border-purple-700 border-0 border-l-8 hover:bg-purple-700 hover:border-purple-600 hover:text-white" />
                              <CarouselNext className="rounded-none bg-purple-800 xs2-card-shadow cursor-pointer p-4 border-purple-700 border-0 border-r-8 hover:bg-purple-700 hover:border-purple-600 hover:text-white" />
                            </Carousel>
                          </div>
                          <div className="mt-8 flex flex-col p-4 px-6 gap-2 font-shapiro">
                            <div className="font-interference text-xl border-b-purple-800 border-b-2 w-fit pb-1">
                              {v.role}
                            </div>
                            {v.description}
                          </div>
                        </div>

                        <div className="h-6 bg-purple-800 w-full"></div>
                      </div>
                    </GalleryModal>
                  {/* </div> */}
                </div>
              </div>
            );
          })}
          
        </div>
      </main>
      <footer className="w-full bg-neutral-700 flex items-center justify-center relative text-white">
        <div className="w-full max-w-[90vw] lg:max-w-5xl py-8 pb-16 font-interference flex flex-col gap-4">
          <div className="text-sm font-mono flex flex-row w-full gap-8">
            <a
              className="hover:underline flex flex-row w-fit gap-2"
              target="_blank"
              href="mailto:lukeculleninc@gmail.com"
            >
              <Mail className="lg:size-4 my-auto"/>
              <div className="my-auto hidden lg:block">lukeculleninc@gmail.com</div>
            </a>
            <a
              className="hover:underline flex flex-row w-fit gap-2"
              target="_blank"
              href="https://github.com/retromonos/"
            >
              <GithubIcon className="lg:size-4 my-auto"/>
              <div className="my-auto hidden lg:block">GitHub</div>
            </a>
            <a
              className="hover:underline flex flex-row w-fit gap-2"
              target="_blank"
              href="https://www.linkedin.com/in/luke-cullen-319701305/"
            >
              <LinkedinIcon className="lg:size-4 my-auto"/>
              <div className="my-auto hidden lg:block">LinkedIn</div>
            </a>
            <a
              className="hover:underline flex flex-row w-fit gap-2"
              target="_blank"
              href="/LukeCullen_Resume2_26.pdf"
            >
              <FileText className="lg:size-4 my-auto"/>
              <div className="my-auto hidden lg:block">Resume</div>
            </a>
          </div>
          <hr className="border-neutral-500" />
          <div className="text-2xl flex flex-row w-full justify-between">
            <div className="my-auto">LUKE CULLEN_</div>
            <div className="text-neutral-300 text-sm font-mono my-auto">
              © {new Date().getFullYear()} Luke Cullen. All rights reserved.
            </div>
          </div>
        </div>
        <div className="absolute footer-overlay w-full h-full top-0 pointer-events-none z-10" />
      </footer>
    </div>
  );
}
