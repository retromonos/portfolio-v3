import { ReactNode } from "react";

export default function BlockHeader({
  className,
  id,
  sideNum,
  children,
}: {
  className?: string;
  id?: string;
  sideNum: string;
  children?: ReactNode;
}) {
  return (
    <h2
      id={id}
      className={`relative font-interference text-lime-300 font-normal text-4xl sm:text-6xl w-fit h-20 sm:h-20 ${className}`}
    >
      <div className="absolute text-xl bg-neutral-700 text-neutral-200 w-fit right-8 h-full p-4 px-3 top-0">
        {sideNum} --
      </div>
      <div className="absolute left-0 bg-neutral-800 w-fit h-full -ml-8 pl-8 py-4 pr-4 z-10">
        {children}
        <div className="absolute hero-overlay w-full z-20 h-full py-4 px-2 left-0 top-0 pointer-events-none" />
      </div>
    </h2>
  );
}
