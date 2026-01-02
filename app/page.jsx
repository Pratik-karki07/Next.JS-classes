"use client";

import { motion } from "motion/react";
import Link from "next/link";
import SimpleCarousel from "@/components/Carousel";

export default function Homepage(){
  return(
    <div className="mt-16 min-h-screen">
      <div className=" mt-5">
        < motion.div
        initial= {{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.7}}>

          <SimpleCarousel />
          <div className=" mt-1 bg-zinc-950/90  text-zinc-300 pb-5 grid grid-cols-1 md:grid-cols-2">
            <h1 className=" font-bold italic text-3xl ml-20 mt-10">
              Pratik Karki
            </h1>

            <div>
              <p className=" mt-10">
                I am Pratik Karki, a tech-savvy and creative student with skills
                in web development, UI/UX design, and digital marketing. 
                I enjoy learning new things and using my creativity to build 
                practical and engaging solutions.
              </p>

              <Link href="/about" className=" transition">
                <button className=" bg-red-500 mt-5 mr-10 py-2 px-4 text-white rounded-4xl hover:bg-red-500/60">
                  Read more
                </button>
              </Link>
              
            </div>

        </div>
        </motion.div>
      </div>

      <div className=" border-t-2 border-red-500 ml-20">
        <motion.div
          initial= {{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.7}}
          >
            <h1 className=" mt-10 text-3xl font-bold"> Projects</h1>
            <p className="mt-3">
              A curated showcase of React-based projects demonstrating component-driven
              architecture, state management, and responsive UI development.
              The work emphasizes structured UI wireframing, high-fidelity interface
              design in Figma, and visually refined assets created with Canva,
              reflecting a strong balance between design systems,
              usability principles, and modern frontend engineering practices.
            </p>

            <Link href="/project" className=" transition">
              <button className=" bg-red-500 mt-5 mr-10 py-2 px-4 text-white rounded-4xl  hover:bg-red-500/60">
                See Projects
              </button>
            </Link>

        </motion.div>
      </div>

  </div>

  );
}