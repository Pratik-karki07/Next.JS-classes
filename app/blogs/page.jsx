"use client";
import { useEffect , useState } from "react";
import Link from "next/link";

export default function RandomBlogs(){
  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
  fetch("/api/blogs/")
  .then((response)=> response.json())
  .then((data)=>  setBlogs(data.data));
}, []);

return(
  <div>
    <h1 className=" text-3xl text-center">Random Blogs</h1>
    {/* divbanaune eta for flex eutaii row ma*/}
    <div className="flex-row">
      {blogs.map((blog)=>
        <Link  key={blog.id} href= {`/blogs/${blog.id}`} className="block">
          <div  className="m-10  p-10 border-2 border-amber-200 rounded-2xl
              bg-amber-200 w-1/3 flex-3 content-center
              hover:bg-amber-200/50 transition ">

            <h2 className=" text-2xl font-bold my-3.75">{blog.name}</h2>

            <p><span className="font-semibold mr-3">Username:</span>
            <span className="italic">{blog.username}</span></p>

            <p><span className="font-semibold mr-3">Email: </span>
            <span className="italic">{blog.email}</span></p>

          </div>
        
        </Link>
      
      )}
    </div>
  </div>
);
}