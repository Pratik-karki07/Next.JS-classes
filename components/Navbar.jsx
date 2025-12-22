"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-zinc-950/90 backdrop-blur border border-bottom-red-500">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* logo */}
            <Link href="/" className="text-2xl font-bold text-white">
              Pratik <span className=" text-red-400 italic">Karki</span>
            </Link>

            {/* Desktop Menu */}
            <div className=" hidden md:flex items-center gap-8 text-sm">
              <NavItem href="/">Home</NavItem>
              <NavItem href="/services">Services</NavItem>
              <NavItem href="/projects">Projects</NavItem>
              <NavItem href="/blogs">Blogs</NavItem>
              <NavItem href="/contacts">Contact Us</NavItem>
            </div>

            {/* Get Started Button  */}
            <div className=" hidden  md:block">
              <button className=" bg-red-400 py-1  px-6 rounded-4xl hover:bg-amber-800/80 transition ">
                Get Started
              </button>
            </div>

             {/* Mobile Menu Button  */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-zinc-300 hover:text-white"
            >
              <Menu size={26} />
            </button>

          </div>
        </div>
      </nav>

      {/* overlay  */}
      {open &&(
        <div
          onClick={()=> setOpen(false)}
          className="fixed inset-0 z-40 bg-gray-400"  />
        
      )}

      {/* Mobile Sidebar */}
      <sidebar
        className={`fixed left-0 top-0 z-50 h-full w-72 bg-zinc-950 border-r border-zinc-800 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <span className="text-lg font-semibold text-white">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-zinc-400 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className=" flex flex-col gap-2 p-4 text-sm">
          <MobileNavItem href="/">Home</MobileNavItem>
          <MobileNavItem href="/services">Services</MobileNavItem>
          <MobileNavItem href="/projects">Projects</MobileNavItem>
          <MobileNavItem href="/blogs">Blogs</MobileNavItem>
          <MobileNavItem href="/contacts">Contact Us</ MobileNavItem>

          <button className=" bg-red-400 py-1  px-6 rounded-4xl hover:bg-amber-800/80 transition ">
            Get Started
          </button>

        </div>


      </sidebar>
    </>
  );
    
  function NavItem({ href, children }) {
    return (
      <Link href={href} className="text-zinc-400 hover:text-white transition">
        {children}
      </Link>
    );
  }

    function MobileNavItem({ href, children }) {
    return (
      <Link
        href={href}
        className="rounded-lg px-3 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
      >
        {children}
      </Link>
    );
  }
}