import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center test">
      <main className="shadow-md flex text-black min-h-screen w-full max-w-3xl flex-col bg-white">
        <Image src={"/distinct.webp"} alt={"key"} width={3840} height={2160}/>
        <Marquee autoFill={true} className="h-8 w-full bg-black font-interference text-lime-300 p-2">
          ASSERT//A RUNNER IS A BIOSYNTHETIC SHELL::::
        </Marquee>
        <section className="p-8 font-interference font-normal text-4xl tracking-tight">
          Luke Cullen
        </section>
      </main>
    </div>
  );
}
