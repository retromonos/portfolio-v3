import Image from "next/image";
import Marquee from "react-fast-marquee";
import BlockHeader from "./components/header";
import { projects } from "./json/projects.json";
import { jobs } from "./json/experience.json";
import {
  FileText,
  GithubIcon,
  Globe,
  ImageIcon,
  LinkedinIcon,
  Mail,
  Map,
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
    <div className="flex flex-col min-h-screen items-center justify-center test">
      <main
        className="relative pb-32 flex text-black min-h-screen w-full max-w-4xl
        flex-col bg-transparent"
      >
        <div className="fixed bg-neutral-800 t3-card-shadow right-0 sm:right-auto -mr-8 p-3 max-w-40 sm:max-w-4xl w-fit self-end top-4 flex flex-col sm:flex-row gap-2 justify-end z-50 text-lime-300 font-interference">
          <Image
            alt="Logo"
            src={"/logotype.png"}
            width={32}
            height={32}
            style={{ imageRendering: "pixelated" }}
            className="pr-2 w-10 border-r-2 border-r-lime-300"
          ></Image>
          <a
            href="#home"
            className="cursor-pointer px-2 py-1 align-middle h-fit border-2 border-lime-300 hover:bg-lime-300 hover:text-black"
          >
            HOME
          </a>
          <a
            href="#experience"
            className="cursor-pointer px-2 py-1 align-middle h-fit border-2 border-lime-300 hover:bg-lime-300 hover:text-black"
          >
            EXPERIENCE
          </a>
          <a
            href="#projects"
            className="cursor-pointer px-2 py-1 align-middle h-fit border-2 border-lime-300 hover:bg-lime-300 hover:text-black"
          >
            PROJECTS
          </a>
        </div>
        <Marquee
          autoFill={true}
          direction="right"
          className="h-8 z-20 w-full bg-neutral-800 font-mono tracking-wider text-yellow-300 p-2"
        >
          !!!UNDER_CONSTRUCTION!!!...
        </Marquee>
        <section id="home" className="relative h-108 flex flex-row w-full">
          <h1
            aria-label="Luke Cullen"
            className="relative h-full w-36 z-10 font-bold bg-neutral-800"
          >
            <div
              role="presentation"
              className="absolute top-4 left-4 sm:left-8 w-4 h-fit text-lime-300 text-3xl text-center wrap-break-word font-interference"
            >
              ~LUKE.....
            </div>
            <div
              role="presentation"
              className="absolute bottom-4 right-4 sm:right-8 w-4 h-fit text-lime-300 text-3xl text-center wrap-break-word font-interference"
            >
              ....CULLEN~
            </div>
          </h1>
          <div role="presentation" className="flex flex-row w-full">
            <div role="presentation" className="w-36 h-full relative">
              <Image
                src={"/media/ShellHacks1.webp"}
                alt="ShellHacks 2024 cup stacking photo"
                width={776}
                height={828}
                className="h-full object-cover object-[15%]"
              />
              <div className="absolute bg-purple-900/40 z-20 w-full h-full top-0" />
            </div>
            <div role="presentation" className="flex flex-col w-full h-full">
              <div role="presentation" className="w-full h-[60%] relative">
                <Image
                  src={"/media/DSC_0911.webp"}
                  alt="ShellHacks 2025 photo with Knight Hacks"
                  width={1500}
                  height={1000}
                  className="-mt-12"
                />
                <div className="absolute bg-lime-900/40 z-20 w-full h-full top-0" />
              </div>
              <div className="h-[40%] w-full flex flex-row">
                <div
                  role="presentation"
                  className="w-fit h-full relative z-5 overflow-hidden"
                >
                  <Image
                    src={"/media/swamp_group.webp"}
                    alt="SwampHacks XII photo with Knight Hacks"
                    width={2048}
                    height={1536}
                    className="h-64 w-fit -mt-12"
                  />
                  <div className="absolute bg-purple-900/40 z-20 w-full h-full top-0" />
                </div>
                <div
                  role="presentation"
                  className="w-fit h-full relative z-5 overflow-hidden"
                >
                  <Image
                    src={"/media/swamp_stage.webp"}
                    alt="SwampHacks XII on stage for winning 1st"
                    width={1224}
                    height={919}
                    className="h-64 w-fit -mt-12"
                  />
                  <div className="absolute bg-purple-900/40 z-20 w-full h-full top-0" />
                </div>
              </div>
            </div>
          </div>
          <div
            role="presentation"
            className="absolute w-full h-full hero-overlay z-5 top-0 pointer-events-none"
          ></div>
        </section>
        <Marquee
          autoFill={true}
          className="h-8 w-full bg-neutral-700 font-mono tracking-wider text-white p-2"
        >
          ASSERT//&nbsp;SOFTWARE_ENGINEER..FULLSTACK_DEVELOPER::::
        </Marquee>
        <div className="gap-12 flex flex-col relative">
          <section className="mt-12 flex flex-col gap-10 p-8 py-6 bg-white card-shadow">
            <BlockHeader sideNum="01" className="">
              Hello!
            </BlockHeader>
            <section className="font-shapiro font-normal text-lg/7 tracking-normal">
              <p className="">
                I&apos;m <span className="font-bold">Luke Cullen</span>, a
                Computer Science Major at the University of Central Florida,
                minoring in Data Science. I&apos;m currently a Web Developer
                Intern at the CDL Techrangers, as well as a Hackathon Organizer
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
          <section className="flex flex-col gap-10 p-8 py-6 w-full sticky -top-3 z-20 card-shadow bg-white">
            <BlockHeader sideNum="02" className="">
              Experience
            </BlockHeader>
          </section>
          {jobs.map((v, i) => {
            return (
              <div
                key={"jobs" + i}
                className={`flex ${i % 2 == 0 ? "flex-row-reverse" : "flex-row"} gap-8 w-full`}
              >
                <div className="flex flex-col gap-4 mt-0">
                  <Image
                    alt={v.title + " logo"}
                    src={v.logo}
                    width={196}
                    height={196}
                    className="t2-card-shadow hover:scale-103 duration-100 border-purple-800"
                  />
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
                <div className="flex flex-col gap-4 mt-8">
                  <div
                    className={`flex flex-col ${i % 2 == 0 ? "self-start" : "self-start"} transition-transform duration-300 hover:scale-103 gap-2 w-full max-w-2xl bg-lime-950 sm-card-shadow font-mono text-white`}
                  >
                    <div
                      className={`absolute ${i % 2 == 1 ? "self-end -mr-6" : "self-start -ml-12"} w-fit  -mt-4 z-10`}
                    >
                      <div
                        className={` bg-lime-700 w-fit font-interference py-2.5 p-4 ${i % 2 == 1 ? "pr-8 border-r-12" : "pl-8 border-l-12"} border-lime-600  text-2xl`}
                      >
                        {v.name.toUpperCase()}
                      </div>
                      <div className="hero-overlay absolute w-full h-full top-0 left-0 pointer-events-none" />
                    </div>
                    <Marquee
                      className="bg-lime-800"
                      direction={i % 2 == 0 ? "right" : "left"}
                      autoFill={true}
                    >
                      <div aria-label={"Skills: " + v.skills.join(",")}>
                        {v.skills.join("...").toUpperCase() + "..."}
                      </div>
                    </Marquee>
                    <div className="p-4 w-full text-base flex flex-col gap-2">
                      <div className="font-interference text-xl border-b-lime-800 border-b-2 w-fit pb-1">
                        {v.title}
                      </div>
                      <div className="font-shapiro font-normal tracking-normal">
                        {v.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div id="projects" className="-mb-10" />
          <section className="flex flex-col gap-10 p-8 w-full py-6 sticky -top-3 z-20 card-shadow bg-white">
            <BlockHeader sideNum="03" className="">
              Projects
            </BlockHeader>
          </section>
          {projects.map((v, i) => {
            return (
              <div
                key={"projects" + i}
                className={`flex ${i % 2 == 0 ? "flex-row-reverse" : "flex-row"} gap-8 w-full`}
              >
                <div className="flex flex-col gap-4 mt-8">
                  <Image
                    src={v.images[0]}
                    width={196}
                    height={196}
                    alt={v.name + " logo"}
                    className="bg-black t-card-shadow hover:scale-103 duration-100 border-lime-800"
                  />
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
                <div className="flex flex-col gap-4 mt-8">
                  <div
                    className={`flex flex-col mt-8 ${i % 2 == 0 ? "self-start" : "self-start"} transition-transform duration-300 hover:scale-103 gap-2 w-full max-w-2xl bg-blue-950 sm-card-shadow font-mono text-white`}
                  >
                    <div
                      className={`absolute ${i % 2 == 1 ? "self-end -mr-6" : "self-start -ml-12"} w-fit  -mt-4 z-10`}
                    >
                      <div
                        className={` bg-purple-700 w-fit font-interference py-2.5 p-4 ${i % 2 == 1 ? "pr-8 border-r-12" : "pl-8 border-l-12"} border-purple-600  text-2xl`}
                      >
                        {v.name.toUpperCase()}
                      </div>
                      <div className="hero-overlay absolute w-full h-full top-0 left-0 pointer-events-none" />
                    </div>
                    <Marquee
                      className="bg-purple-800"
                      direction={i % 2 == 0 ? "right" : "left"}
                      autoFill={true}
                    >
                      <div aria-label={"Skills: " + v.tools.join(",")}>
                        {v.tools.join("...").toUpperCase() + "..."}
                      </div>
                    </Marquee>
                    <div className="p-4 w-full text-base flex flex-col gap-2">
                      <div className="font-interference text-xl border-b-purple-800 border-b-2 w-fit pb-1">
                        {v.role}
                      </div>
                      <div className="font-shapiro font-normal tracking-normal">
                        {v.description}
                      </div>
                    </div>
                  </div>
                  <div>
                    <GalleryModal title={v.name}>
                      <div className="h-full flex flex-col justify-between">
                        <Marquee
                          className="bg-purple-800 font-mono"
                          direction={"right"}
                          autoFill={true}
                        >
                          <div aria-label={"Skills: " + v.tools.join(",")}>
                            {v.tools.join("...").toUpperCase() + "..."}
                          </div>
                        </Marquee>
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

                        <Marquee
                          className="bg-purple-800 font-mono"
                          direction={"left"}
                          autoFill={true}
                        >
                          <div aria-label={"Skills: " + v.tools.join(",")}>
                            {v.tools.join("...").toUpperCase() + "..."}
                          </div>
                        </Marquee>
                      </div>
                    </GalleryModal>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="w-full bg-neutral-700 flex items-center justify-center relative text-white">
        <div className="w-5xl py-8 pb-16 font-interference flex flex-col gap-4">
          <div className="text-sm font-mono flex flex-row w-full gap-8">
            <a
              className="hover:underline flex flex-row w-fit gap-2"
              target="_blank"
              href="mailto:lukeculleninc@gmail.com"
            >
              <Mail />
              <div className="my-auto">lukeculleninc@gmail.com</div>
            </a>
            <a
              className="hover:underline flex flex-row w-fit gap-2"
              target="_blank"
              href="https://github.com/retromonos/"
            >
              <GithubIcon />
              <div className="my-auto">GitHub</div>
            </a>
            <a
              className="hover:underline flex flex-row w-fit gap-2"
              target="_blank"
              href="https://www.linkedin.com/in/luke-cullen-319701305/"
            >
              <LinkedinIcon />
              <div className="my-auto">LinkedIn</div>
            </a>
            <a
              className="hover:underline flex flex-row w-fit gap-2"
              target="_blank"
              href="/LukeCullen_Resume2_26.pdf"
            >
              <FileText />
              <div className="my-auto">Resume</div>
            </a>
          </div>
          <hr className="border-neutral-500" />
          <div className="text-2xl flex flex-row w-full justify-between">
            <div className="my-auto">LUKE CULLEN_</div>
            <div className="text-neutral-300 text-sm font-mono my-auto">
              © 2026 Luke Cullen. All rights reserved.
            </div>
          </div>
        </div>
        <div className="absolute footer-overlay w-full h-full pointer-events-none" />
      </footer>
    </div>
  );
}
