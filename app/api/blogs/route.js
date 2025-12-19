import { NextResponse } from "next/server";

export async function GET(){
  try{
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "no-store",
      });

      const  blogs= await response.json();

      const randomBlogs = blogs.sort(()=> 0.5-Math.random()).slice(0,5);
      
      return NextResponse.json(
        {success: true,
          data: randomBlogs,
        }
      );
  }

  catch(error){
    return NextResponse.json(
      {success: false,  message: "Failed to Fetch the posts"},
      {status: 500},
    );
  }
}