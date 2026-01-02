"use client";

import {motion} from  "framer-motion";
import Link from "next/link";


export default function Project(){
  return(
    <div  className="mt-20 px-4 md:px-10 min-h-screen max-w-full overflow-x-hidden">
      <motion.div
       initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration: 0.8, ease:'easeOut'}}
      >
        <h1 className=" mt-10  text-3xl font-bold"> Projects</h1>
        <div className=" flex flex-col gap-2 border-2 m-5 p-3  backdrop:blur bg-zinc-950/90 text-zinc-400">
          <Link href= "https://github.com/nova054/project-7-sem"  target="_blank">
            <h2 className=" text-2xl font-semibold">Volunteer Recommendation System:</h2>
          </Link>
          <p>Volunteering plays a vital role in connecting people and social
            organizations. Currently, there is no unified platform to recommend
            suitable volunteering opportunities based on individual interests
            and skills. Our project aims to bridge this gap by developing a web-based
            platform that automatically suggests opportunities to volunteers.
            It uses a content-based recommendation approach powered by the cosine
            similarity algorithm.
          </p>

          <p className=" text-xl mt-5">Short Overview:</p>
          <div className=" mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-auto">
            <Link href="Mainpage1.png" onClick={()=> setShowX(true)}>
              <img src="Mainpage1.png"  alt="Project Screenshot" className=" h-auto w-full max-w-full object-contain" />
            </Link>

            <Link  href="Mainpage2.png">
              <img src="Mainpage2.png"  alt="Project Screenshot" className=" h-auto w-full max-w-full object-contain" />
            </Link>
            
            <Link href="Opportunities1.png">
              <img src="Opportunities1.png" alt="Project Screenshot" className=" h-auto w-full max-w-full object-contain mt-2" />
            </Link>

            <Link href="Opportunities2.png">
              <img src="Opportunities2.png" alt="Project Screenshot" className=" h-auto w-full max-w-full object-contain mt-2" />
            </Link>

            <Link href="MyOpportunities.png">
              <img src="MyOpportunities.png" alt="Project Screenshot" className=" h-auto w-full max-w-full object-contain mt-2" />
            </Link>

            <Link href="Application.png">
              <img src="Application.png" alt="Project Screenshot" className=" h-auto w-full max-w-full object-contain mt-2" />
            </Link>
          </div>
        </div>
        
      </motion.div>

      <motion.div
       initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration: 0.8, ease:'easeOut'}}
      >
        <div className=" flex flex-col gap-2 border-2 m-5 p-3  bg-zinc-950/90 text-zinc-400">
          <h2 className=" text-2xl font-semibold">Wireframes for UI:</h2>
          <div className=" mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="wirefame1.png">
              <img src="wirefame1.png"  alt="Wireframe for UI" className=" h-auto w-full max-w-full object-contain" />
            </Link>

            <Link href="wireframe2.png">
              <img src="wireframe2.png"  alt="Wireframe for UI " className=" h-auto w-full max-w-full object-contain" />
            </Link>
            
            <Link href="wireframe3.png">
              <img src="wireframe3.png" alt="Wireframe for UI" className=" h-auto w-full max-w-full object-contain mt-2" />
            </Link>

            <Link href="wireframe4.png">
              <img src="wireframe4.png" alt="Wireframe for UI" className=" h-auto w-full max-w-full object-contain mt-2" />
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
      initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration: 0.8, ease:'easeOut'}}
      >
        <div className=" flex flex-col gap-2 border-2 m-5 p-3  bg-zinc-950/90 text-zinc-400">
          <h2 className=" text-2xl font-semibold">Canva Designs:</h2>
          <div className=" mt-2 grid grid-row">
            <Link href="Canva1.jpg" className=" m-2 border-2">
              <img src="Canva1.jpg" alt="Canva design" className="w-full max-w-full object-contain" />
            </Link>

          </div>
        </div>
      </motion.div>

      <motion.div
      initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration: 0.8, ease:'easeOut'}}
      >
        <div className=" flex flex-col gap-2 border-2 m-5 p-3  bg-zinc-950/90 text-zinc-400">
          <h2 className=" text-2xl font-semibold">Figma Design:</h2>
          <p className=" mt-2 ml-2">1. Redesign of Workfolio website:</p>
          <div className=" mt-2 ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="Workfolio1.png">
              <img src="Workfolio1.png" alt="Figma design for Workfolio" className="w-full max-w-full object-contain" />
            </Link>

            <Link href="Workfolio2.png">
              <img src="Workfolio2.png" alt="Figma design for Workfolio" className="w-full max-w-full object-contain" />
            </Link>

            <Link href="Workfolio3.png">
              <img src="Workfolio3.png" alt="Figma design for Workfolio" className="w-full max-w-full object-contain" />
            </Link>
          </div>

          <p className=" mt-4 ml-2">2. Admin Panel for Basobas:</p>
          <div className=" mt-2 ml-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="Basobas1.png">
              <img src="Basobas1.png" alt="Figma design for Basobas Admin panel" className="w-full max-w-full object-contain" />
            </Link>

            <Link href="Basobas2.png">
              <img src="Basobas2.png" alt="Figma design for Basobas Admin panel" className="w-full max-w-full object-contain" />
            </Link>

          </div>
        </div>

      </motion.div>


    </div>
  );
}