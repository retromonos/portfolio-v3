"use client";

import { ArrowLeft, ImageIcon } from "lucide-react";
import { ReactNode, useState } from "react";

export default function GalleryModal({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`cursor-pointer border-purple-800 text-white bg-purple-950 hover:bg-purple-900 relative flex flex-row justify-center gap-2 w-full h-fit underline-offset-4 border-4 hover:scale-103 duration-100 p-2 sm-card-shadow font-interference text-center`}
      >
        <div className="absolute button-overlay w-full h-full top-0" />
        <ImageIcon className="size-6 my-auto" />
        Gallery
      </button>
      <dialog
        onClick={() => setOpen(false)}
        className={`z-50 top-0 left-0 w-screen h-screen ${open ? "opacity-100" : "opacity-0 pointer-events-none"} fixed flex transition-opacity duration-300 bg-black/80`}
      >
        <div className="absolute top-0 left-0 w-full h-full button-overlay" />
        <div
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="relative max-w-3xl w-full text-white font-interference h-144 bg-blue-950 t2-card-shadow m-auto"
        >
          <div
            onClick={() => setOpen(false)}
            className="absolute flex z-20 -top-4 -left-8 duration-100 hover:scale-110 font-interference text-white h-fit py-2 px-4 text-2xl border-purple-600 border-l-8 bg-purple-700 hover:bg-purple-600 hover:border-purple-500 cursor-pointer"
          >
            <div className="absolute top-0 left-0 w-full h-full button-overlay" />
            <div className="my-auto flex flex-row gap-2">
              <ArrowLeft className="my-auto" />
              {title ?? "no title"}
            </div>
          </div>
          {children}
        </div>
      </dialog>
    </>
  );
}
