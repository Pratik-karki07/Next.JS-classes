"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";


export default function Contact(){
  return(
    <div className=" mt-17 min-h-screen px-4 overflow-x-hidden">
      <motion.div
      initial={{opacity:0, x:100}}
      whileInView={{opacity:1, x:0}}
      transition={{duration: 0.8, ease:'easeOut'}}
      >
        <div className=" mt-40 mx-auto flex flex-col max-w-xl border-2  bg-zinc-950/90 text-zinc-400">
          <div className=" flex flex-col items-center justify-center ">
            <h1 className=" text-3xl font-bold"> Contact Info</h1>
          </div>
            <div className=" mx-5 grid grid-cols-1 md:grid-cols-2  ">
              <div className=" flex items-center gap-2 whitespace-nowrap mt-5 ">
                <PhoneIcon className=" size-6 shrink-0"/>
                <span>+977-9749343706</span>
              </div>
                            
              <div className=" flex items-center gap-2 mt-5">
                <Link href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNtfSSGKmZJxjkKqPCXNzfJWXsQnKbMNbMjDjsXhWvFmpDNHdWKKlpTGwnJzqlfGgZBxxV" 
                target="_blank"
                className="flex items-center gap-2"
                >
                  <MailIcon className=" size-6 "/>
                  <span>studypratikk@gmail.com</span>
                </Link>
              </div>

              <div className=" flex items-center gap-2 mt-5">
                <Link href="https://www.facebook.com/puran.karkee.5"
                  target="_blank"
                  className="flex items-center gap-2"
                  >
                  <FacebookIcon className=" size-6 "/>
                  <span>puran.karkee.5</span>
                </Link>
              </div>

               <div className=" flex items-center gap-2 mt-5">
                <Link href="https://www.instagram.com/prateek__karkee/"
                 target="_blank"
                 className="flex items-center gap-2"
                 >
                  <InstagramIcon className=" size-6 "/>
                  <span>prateek__karkee</span>
                </Link>
              </div>

               <div className=" flex items-center gap-2 mt-5">
                <Link href="https://www.linkedin.com/in/pratik-karki-364a1a306/"
                 target="_blank"
                 className="flex items-center gap-2"
                 >
                  <LinkedinIcon className=" size-6 "/>
                  <span className=" mt-1">pratik-karki-364a1a306</span>
                </Link>
              </div>

               <div className=" flex items-center gap-2 mt-5">
                <Link href="https://github.com/Pratik-karki07" 
                target="_blank"
                className="flex items-center gap-2"
                >
                  <GithubIcon className=" size-6 "/>
                  <span>Pratik-karki07</span>
                </Link>
              </div>
              
            </div>
       

        </div>

      </motion.div>
    </div>
  )
}