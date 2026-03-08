import Image from "next/image";
import Marquee from "react-fast-marquee";
import BlockHeader from "./components/header";
import { projects } from "./json/projects.json";
import { jobs } from "./json/experience.json";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center test">
      <main
        className="relative pb-32 flex text-black min-h-screen w-full max-w-4xl
        flex-col bg-transparent"
      >
        <div className="fixed bg-neutral-800 t-card-shadow right-0 sm:right-auto -mr-8 p-3 max-w-40 sm:max-w-4xl w-fit self-end top-4 flex flex-col sm:flex-row gap-2 justify-end z-50 text-lime-300 font-interference">
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
            <section className="font-mono font-normal text-lg/8.5 tracking-tight">
              <p className="">
                I&apos;m <span className="font-interference">Luke Cullen</span>,
                a Computer Science Major at the University of Central Florida,
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
          <section className="flex flex-col gap-10 p-8 py-6 w-full sticky -top-3 z-20 card-shadow bg-white">
            <BlockHeader id="experience" sideNum="02" className="">
              Experience
            </BlockHeader>
          </section>
          {jobs.map((v, i) => {
            return (
              <div
                key={"projects" + i}
                className={`flex flex-col mt-8 ${i % 2 == 0 ? "self-end" : "self-start"} transition-transform duration-300 hover:scale-103 gap-2 w-full max-w-2xl bg-lime-950 sm-card-shadow font-mono text-white`}
              >
                <div
                  className={`absolute ${i % 2 >= 0 ? "self-end -mr-6" : "self-start -ml-12"} w-fit  -mt-4 z-10`}
                >
                  <div
                    className={` bg-lime-700 w-fit font-interference py-2.5 p-4 ${i % 2 >= 0 ? "pr-8 border-r-12" : "pl-8 border-l-12"} border-lime-600  text-2xl`}
                  >
                    {v.name.toUpperCase()}
                  </div>
                  <div className="hero-overlay absolute w-full h-full top-0 left-0 pointer-events-none" />
                </div>
                <Marquee className="bg-lime-800" autoFill={true}>
                  <div aria-label={"Skills: " + v.skills.join(",")}>
                    {v.skills.join("...").toUpperCase() + "..."}
                  </div>
                </Marquee>
                <div className="p-4 w-full">{v.description}</div>
              </div>
            );
          })}
          <section className="flex flex-col gap-10 p-8 py-6 sticky -top-3 z-20 card-shadow bg-white">
            <BlockHeader id="projects" sideNum="03" className="">
              Projects
            </BlockHeader>
          </section>
          {projects.map((v, i) => {
            return (
              <div
                key={"projects" + i}
                className={`flex flex-col mt-8 ${i % 2 == 0 ? "self-end" : "self-start"} transition-transform duration-300 hover:scale-103 gap-2 w-full max-w-2xl bg-blue-950 sm-card-shadow font-mono text-white`}
              >
                <div
                  className={`absolute ${i % 2 >= 0 ? "self-end -mr-6" : "self-start -ml-12"} w-fit  -mt-4 z-10`}
                >
                  <div
                    className={` bg-purple-700 w-fit font-interference py-2.5 p-4 ${i % 2 >= 0 ? "pr-8 border-r-12" : "pl-8 border-l-12"} border-purple-600  text-2xl`}
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
                <div className="p-4 w-full">{v.description}</div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="w-full bg-neutral-700 flex items-center justify-center relative">
        <div className="w-5xl h-64 py-8 font-interference">Test</div>
        <div className="absolute footer-overlay w-full h-full pointer-events-none" />
      </footer>
    </div>
  );
}
