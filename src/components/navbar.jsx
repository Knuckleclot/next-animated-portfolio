"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const socialMedia = [
  {
    image: "/github.png",
    url: "https://www.github.com/Knuckleclot",
  },
  {
    image: "/instagram.png",
    url: "https://www.instagram.com/muiz.rexhepi",
  },
  {
    image: "/linkedin.png",
    url: "https://www.linkedin.com/in/muiz-rexhepi/",
  },
];

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "Portfolio",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed:{
      x:"100vw"
    },
    opened:{
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2,
      }
    }
  }

  const listItem = {
    closed:{
      x:-10,
      opacity:0,
    },
    opened:{
      x:0,
      opacity:1,
    }
  }

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links?.map((link) => (
          <NavLink key={link?.title} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href={"/"}
          className="text-sm bg-black rounded-md font-semibold flex items-center justify-center p-1"
        >
          <span className="text-white mx-2">Muiz</span>
          <span className="bg-white w-max px-2 h-8 rounded flex justify-center items-center text-black">
            Rexhepi
          </span>
        </Link>
      </div>
      {/* SOCIAL */}
      <div className="hidden md:flex items-center gap-4 w-1/3 justify-end">
        {socialMedia?.map((social) => (
          <Link key={social?.title} href={social?.url} target="_blank">
            <Image
              src={social?.image}
              width={24}
              height={24}
              alt={social?.title}
            />
          </Link>
        ))}
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open?'opened':'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open?'opened':'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open?'opened':'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* MENU LIST */}
        {open ? (
          <motion.div variants={listVariants} initial={'closed'} animate={'opened'} className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links?.map((link) => (
              <motion.div key={link?.title} variants={listItem}>
                <Link href={link?.url}>
                {link?.title}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
