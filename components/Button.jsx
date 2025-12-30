"use client";

import {motion} from "framer-motion";
import {useState} from "react";


export default function Button(){
  const [isVisible, setIsVisible] = useState(true)
  
  return(
      <div className="my-30 ">
        <div className="flex flex-col items-center justify-center gap-6">
        {isVisible ?
          <motion.div
          initial = {{opacity:0, scale:0}}
          animate= {{opacity:1, scale:1}}
          exit= {{opacity:0, scale:0}}
          className=" p-4 border-none bg-red-600 rounded-xl  text-white font-bold">
            I am the Secret.
          </motion.div>
        :null
        }
        </div>


        <div className=" my-5" >
          <motion.button
          className=" p-4 border-none bg-blue-600 rounded-xl  text-white font-bold"
          onClick={()=> setIsVisible (!isVisible)}
          whileTap={{scale : 0.65}}
          >
            {isVisible? "Hidethesecret" : "Revealthesecret"}
          </motion.button>
        </div>

      </div>
  );

}
  
