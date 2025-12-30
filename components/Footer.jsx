"use client";

import { FacebookIcon, LinkedinIcon, YoutubeIcon, } from "lucide-react";
import Link  from "next/link";


export default function Footer(){
  return(
    <div className="max-w-screen">
      <div className=" mt-40 relative bg-zinc-950/90 md:grid grid-cols-4   ">
        <div className="mx-8 ">
          <div className=" mt-4 mb-4 flex items-center gap-2">
            <img src="/loogoo.png" alt="Logo of the company" className=" size-15" />
              <p className="text-xl font-bold text-white">
                Pratik <span className=" text-red-400 italic">Karki</span>
              </p>
          </div>
          <div  className=" my-4  text-zinc-300">
              <p>Hi, I am  Pratik Karki pursuing BSc.CSIT
                 in Bhaktapur Multiple Campus</p>
          </div>
        </div>

        <div className=" mx-8  text-zinc-300" >
          <h1 className=" font-bold text-xl mt-4 mb-4">Quick Links</h1>
          <div  className="mb-4 flex flex-col gap-2">
            <Link href="/"  className=" hover:text-white transition">
              Home
            </Link>
            <Link href="/about" className=" hover:text-white transition">
              About 
            </Link>
            <Link href="/project" className=" hover:text-white transition">
              Projects
            </Link>
            <Link href="/contact" className=" hover:text-white transition">
              Contact
            </Link>

            
          </div>        
        </div>

        <div className=" mx-8 text-zinc-300 " >
          <h1 className=" font-bold text-xl mt-4 mb-4 ">Legal</h1>
          <div  className="mb-4 flex flex-col gap-2">
            <Link href="/cookiespolicy" className=" hover:text-white transition">
              Cookies Policy
            </Link>
            <Link href="/termsandcondition" className=" hover:text-white transition">
              Terms and Condition
            </Link>
            <Link href="/support" className=" hover:text-white transition">
              Support
            </Link>
            
          </div>        
        </div>

        <div className="text-zinc-300 mx-8">
          <h1 className="font-bold text-xl mt-4 mb-4">Social Media</h1>
          <div className="mb-4 flex flex-col gap-2">
            <Link  href="https://www.facebook.com/" target="_blank" className="flex items-center gap-2  hover:text-white transition">
              <FacebookIcon size={20}  className=" my-2" />
              <span>Facebook</span>
            </Link>
            
            <Link  href="https://www.youtube.com/" target="_blank" className="flex items-center gap-2  hover:text-white transition">
              <YoutubeIcon size={20} className=" my-2" />
              <span>YouTube</span>
            </Link>
            
            <Link href="https://www.linkedin.com/" target="_blank" className="flex items-center gap-2  hover:text-white transition">
              <LinkedinIcon size={20}  className=" my-2" />
              <span>LinkedIn</span>
            </Link>
            
          </div>
        </div>



        
      </div>
        <div className="  flex justify-center text-center border-t-gray-500 bg-zinc-950/90 ">
          <p className="text-zinc-300 mx-8  border-t-2  border-purple-800 min-w-250 mb-2 ">
             {new Date().getFullYear()}.  All rights reserved.
          </p>
        </div>
    </div>


  );
}