import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center test">
      <main className="shadow-md flex text-black min-h-screen w-full max-w-3xl flex-col bg-white">
        <div className="relative">
          <Image src={"/distinct-1.webp"} alt={"key"} width={3840} height={2160}/>
          <div className="absolute w-full h-full hero-overlay top-0"></div>
          <div className="absolute h-108 w-36 top-0 font-bold">
            <div className="absolute top-4 left-8 w-4 h-fit text-lime-300 text-3xl text-center wrap-break-word font-interference">
            ~LUKE.....
          </div>
          <div className="absolute bottom-4 right-8 w-4 h-fit text-lime-300 text-3xl text-center wrap-break-word font-interference">
            ....CULLEN~
          </div>
          </div>
          
        </div>
        <Marquee autoFill={true} className="h-8 w-full bg-black font-interference tracking-wider text-lime-300 p-2">
          ASSERT//&nbsp;SOFTWARE_ENGINEER..FULLSTACK_DEVELOPER::::
        </Marquee>
        <div className="p-8 gap-4 flex flex-col">
          <section className="font-interference font-normal text-6xl tracking-tight">
            HELLO!
          </section>
          <section className="font-mono font-normal text-xl tracking-tight">
            I'm <b>Luke Cullen</b>, a Computer Science Major at the University of Central Florida, minoring in Data Science.
          </section>
          <section className="font-mono font-normal text-xl tracking-tight">
            I'm currently a Web Developer Intern at the CDL Techrangers, as well as a Hackathon Organizer for UCF's premier SWE club, Knight Hacks.
          </section>
        </div>
      </main>
    </div>
  );
}
