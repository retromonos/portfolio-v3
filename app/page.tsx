import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center test">
      <main className="shadow-md flex text-black min-h-screen w-full max-w-3xl flex-col bg-white">
        <section className="relative h-108 flex flex-row w-full">
          <h1 aria-label="Luke Cullen" className="relative h-full w-36 z-10 font-bold bg-black">
            <div role="presentation" className="absolute top-4 left-4 sm:left-8 w-4 h-fit text-lime-300 text-3xl text-center wrap-break-word font-interference">
              ~LUKE.....
            </div>
            <div role="presentation" className="absolute bottom-4 right-4 sm:right-8 w-4 h-fit text-lime-300 text-3xl text-center wrap-break-word font-interference">
              ....CULLEN~
            </div>
          </h1>
          <div role="presentation" className="w-full bg-red-900">

          </div>
          <div role="presentation" className="absolute w-full h-full hero-overlay top-0 pointer-events-none"></div>
          <nav className="absolute h-full max-w-40 w-fit sm:h-8 sm:w-full right-0 flex flex-col sm:flex-row gap-2 sm:justify-end p-4 top-0 font-interference text-lime-300">
            <button type="button" className="cursor-pointer px-2 py-1 align-middle h-fit border-2 border-lime-300 hover:bg-lime-300 hover:text-black">HOME</button>
            <button type="button" className="cursor-pointer px-2 py-1 align-middle h-fit border-2 border-lime-300 hover:bg-lime-300 hover:text-black">EXPERIENCE</button>
            <button type="button" className="cursor-pointer px-2 py-1 align-middle h-fit border-2 border-lime-300 hover:bg-lime-300 hover:text-black">PROJECTS</button>
          </nav>
        </section>
        <Marquee autoFill={true} className="h-8 w-full bg-black font-interference tracking-wider text-lime-300 p-2">
          ASSERT//&nbsp;SOFTWARE_ENGINEER..FULLSTACK_DEVELOPER::::
        </Marquee>
        <div className="p-8 gap-4 flex flex-col">
          <h1 className="font-interference font-normal text-6xl tracking-tight">
            HELLO!
          </h1>
          <p className="font-mono font-normal text-xl tracking-tight">
            I'm <b>Luke Cullen</b>, a Computer Science Major at the University of Central Florida, minoring in Data Science.
          </p>
          <p className="font-mono font-normal text-xl tracking-tight">
            I'm currently a Web Developer Intern at the CDL Techrangers, as well as a Hackathon Organizer for UCF's premier SWE club, Knight Hacks.
          </p>
        </div>
      </main>
    </div>
  );
}
