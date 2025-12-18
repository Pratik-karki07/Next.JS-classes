"use client";

import { useEffect, useState } from "react";

export default function Posts(){
  const[posts, setPosts]= useState([]);

  useEffect(()=> {
    fetch("/api/posts")
    .then(res=>res.json())
    .then(data=> setPosts(data));
  }, []);

  return(
    <div>

      <h1 className=""> Posts</h1>
      <div className="flex">
      {posts.map(post=> (
        <div key={post.id} className="p-6 w-150 flex-10 justify-between
                                      border-4 border-green-300 mx-20 rounded-3xl
                                       bg-green-300 place-items-center ">
          <h2 className="basis-2xs font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      </div>
    </div>
  );
}