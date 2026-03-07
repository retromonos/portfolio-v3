import Image from "next/image";
import Marquee from "react-fast-marquee";
import BlockHeader from "./components/header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center test">
      <main
        className="relative pb-32 flex text-black min-h-screen w-full max-w-4xl
        flex-col bg-transparent"
      >
        <div className="fixed bg-neutral-800 right-0 sm:right-auto p-2 max-w-40 sm:max-w-4xl w-fit self-end top-0 flex flex-col sm:flex-row gap-2 justify-end z-50 text-lime-300 font-interference">
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
          className="h-8 z-20 w-full bg-neutral-800 font-interference tracking-wider text-yellow-300 p-2"
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
          className="h-8 w-full bg-neutral-700 font-interference tracking-wider text-white p-2"
        >
          ASSERT//&nbsp;SOFTWARE_ENGINEER..FULLSTACK_DEVELOPER::::
        </Marquee>
        <div className="gap-12 flex flex-col">
          <section className="mt-12 flex flex-col gap-10 p-8 bg-white card-shadow">
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
          <section className="flex flex-col gap-10 p-8 card-shadow bg-white">
            <BlockHeader id="experience" sideNum="02" className="mb-4">
              Experience
            </BlockHeader>
            <p className="font-mono font-normal text-lg tracking-tight">
              I&apos;m <b>Luke Cullen</b>, a Computer Science Major at the
              University of Central Florida, minoring in Data Science.
            </p>
            <p className="font-mono font-normal text-lg tracking-tight">
              I&apos;m currently a Web Developer Intern at the CDL Techrangers,
              as well as a Hackathon Organizer for UCF&apos;s premier SWE club,
              Knight Hacks.
            </p>
          </section>
          <section className="flex flex-col gap-10 p-8 card-shadow bg-white">
            <BlockHeader id="projects" sideNum="03" className="">
              Projects
            </BlockHeader>
          </section>
        </div>
      </main>
      <footer className="w-full bg-neutral-700 flex items-center justify-center relative">
        <div className="w-5xl h-40 py-8 font-interference">Test</div>
        <div className="absolute footer-overlay w-full h-full pointer-events-none" />
      </footer>
    </div>
  );
}
