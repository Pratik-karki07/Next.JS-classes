"use client";

import { motion , useSpring } from "motion/react";
import Button from "@/components/Button";
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
          <div className=" mt-1 bg-zinc-950/90  text-zinc-300 pb-5 md:grid grid-cols-2">
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
                <button className=" bg-red-500 mt-5 mr-10 p-2 text-white rounded-xl">
                  Read more
                </button>
              </Link>
              
            </div>

        </div>
        </motion.div>
      </div>

      <div className=" border-t-2 border-red-500 ">
        <motion.div
          initial= {{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.7}}
          >
            <h1 className=" mt-10 ml-20"> Projects</h1>

        </motion.div>
      </div>

    <div className=" text-center">
  
      <motion.div
       initial= {{opacity: 0}}
       whileInView={{opacity: 1}}
       transition={{duration: 0.7}}
       className=" flex items-center justify-center mt-100"
       >
          Hii my name  is Pratik Karki
      </motion.div>

      <motion.button
      whileHover={{scale: 1.1}}
      whileTap={{scale:0.9}}
      transition={{ type: "spring", stiffness: 300 }}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold mt-20">
        Button
      </motion.button>

      <Button />
  </div>

  </div>
  
  );
}