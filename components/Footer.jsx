"use client";

import { FacebookIcon, LinkedinIcon, YoutubeIcon, } from "lucide-react";
import Link  from "next/link";


export default function Footer(){
  return(
    <div>
      <div className=" mt-40 relative bg-zinc-950/90 md:grid grid-cols-4   ">
        <div className="mx-8 ">
          <div className=" mt-4 mb-4 flex items-center gap-2">
            <img src="logo!.png" alt="Logo of the company" className=" size-15" />
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
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About us</Link>
            
          </div>        
        </div>

        <div className=" mx-8 text-zinc-300 " >
          <h1 className=" font-bold text-xl mt-4 mb-4 ">Legal</h1>
          <div  className="mb-4 flex flex-col gap-2">
            <Link href="/cookiespolicy">Cookies Policy</Link>
            <Link href="/termsandcondition">Terms and Condition</Link>
            <Link href="/support">Support</Link>
            
          </div>        
        </div>

        <div className="text-zinc-300 mx-8">
          <h1 className="font-bold text-xl mt-4 mb-4">Social Media</h1>
          <div className="mb-4 flex flex-col gap-2">
            <Link  href="https://www.facebook.com/" target="_blank" className="flex items-center gap-2">
              <FacebookIcon size={20}  className=" my-2" />
              <span>Facebook</span>
            </Link>
            
            <Link  href="https://www.youtube.com/" target="_blank" className="flex items-center gap-2">
              <YoutubeIcon size={20} className=" my-2" />
              <span>YouTube</span>
            </Link>
            
            <Link href="https://www.linkedin.com/" target="_blank" className="flex items-center gap-2">
              <LinkedinIcon size={20}  className=" my-2" />
              <span>LinkedIn</span>
            </Link>
            
          </div>
        </div>



        
      </div>
        <div className="flex justify-center text-center 
        border-t-gray-500 bg-zinc-950/90">
          <span className="text-zinc-300 mx-8  border-t-gray-500 ">
             {new Date().getFullYear()}.  All rights reserved.
          </span>
        </div>
    </div>


  );
}