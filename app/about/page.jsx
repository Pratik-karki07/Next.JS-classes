"use client";

import {motion} from "framer-motion";
import { GithubIcon, MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function About(){
  return(
    <div className="mt-17 min-h-screen max-w-screen">
      <motion.div
      initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration: 0.8, ease:'easeOut'}}
      className="md:grid"
      >
        <div className="grid grid-cols-3">
          <div className="ml-20 mt-10">
            <h1 className=" font-bold italic text-3xl ">
              Pratik Karki
            </h1>
            <div className=" flex ">
              <PhoneIcon className=" size-4 mr-4 mt-0.5"/>
              <span>9749343706</span>
            </div>

            <div >
              <Link  href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNtfSSGKmZJxjkKqPCXNzfJWXsQnKbMNbMjDjsXhWvFmpDNHdWKKlpTGwnJzqlfGgZBxxV"
              target="_blank"
              className=" flex ">
                <MailIcon className=" size-4 mr-4 mt-0.5"/>
                <span>studypratikk@gmail.com</span>
              </Link>
            </div>

            <div>
              <Link href="https://github.com/Pratik-karki07" target="_blank" className=" flex ">
                <GithubIcon className=" size-4 mr-4 mt-0.5"/>
                <span>Pratik-karki07</span>
              </Link>
            </div>

          </div>
          <p className=" mt-10">
            I am Pratik Karki,
            a passionate and tech-driven student with a strong interest
            in web development, UI/UX design, and digital marketing.
            I enjoy turning ideas into functional and visually appealing
            digital experiences. With a constant eagerness to learn,
            I explore new technologies, improve my problem-solving skills,
            and adapt to emerging trends in the tech world. 
            I believe in combining creativity with logic to build practical,
            user-focused solutions and continuously work on improving myself
            both technically and creatively.
          </p>
          
          <img src="/Passportsize.jpg" alt="Photo of Pratik" className=" size-65 rounded-full mt-5 ml-20 mr-10"/>
        </div>
      </motion.div>

      <motion.div
      initial={{opacity:0, x:-50}}
      whileInView={{opacity:1, x:0}}
      transition={{duration: 0.8, ease:'easeOut'}}
      className="md:grid"
      >  
        <div className=" mt-5 py-5 border-t-2 border-red-500  bg-zinc-950/90  text-zinc-300 grid grid-cols-3 ">
          <div className="ml-20 ">
            <img src="/skills.jpg" className=" size-60  rounded-full"/>
          </div>

          <div>
            <h1 className="font-bold text-3xl">Technical Skills:</h1>
            <ul className=" list-disc ml-10">
              <li>React</li>
              <li>Figma</li>
              <li>Next.js</li>
              <li>Canva</li>
              <li>Wordpress</li>
            </ul>
          </div>


          <div>
            <h1 className="font-bold text-3xl">Personal Skills:</h1>
            <ul className=" list-disc ml-10"></ul>
              <ul className=" list-disc ml-10">
              <li>Creativity</li>
              <li>Teamwork</li>
              <li>Communication</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className=" overflow-x-hidden">
        <motion.div
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1, x:0}}
        transition={{duration: 0.8, ease:'easeOut'}}
        className=" w-full"
        > 
          <div className="border-t-2 border-red-500">
            <div className=" px-6 md:px-20 mt-5 max-w-7xl mx-auto">
              <h1 className="font-bold text-3xl ">
                Educational Background:
              </h1>
              <div className="grid grid-cols-3">
                <ul  className=" mt-5 ml-5 list-disc">
                  <li>Sandipani Gyan Mandir English School</li>
                  <li>The Times International College</li>
                  <li>Bhaktapur Multiple Campus</li>
                  
                  
                </ul>

                <ul  className=" mt-5 ml-5 list-none ">
                  <li>Sankhu, Kathmandu</li>
                  <li>Dillibazar, Kathmandu</li>
                  <li>Dudhpati,  Bhaktapur</li>
                  
                  
                </ul>
                <ul  className=" mt-5 mx-5 list-none ">
                  <li>Primary  School</li>
                  <li>Higher Secondary Schooling</li>
                  <li>Primary  School</li>
                  
                </ul>
              </div>
            </div>

          </div>
        </motion.div>
      </div>

    </div>
  );
}