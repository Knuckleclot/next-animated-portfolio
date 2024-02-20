"use client"

import Image from "next/image";
import {motion} from 'framer-motion'
import Link from "next/link";

const Homepage = () => {

  return (
    <motion.div className="h-full pb-10" initial={{y:'-200vh'}} animate={{y:"0%"}} transition={{duration:1}}>

    <div className="h-full flex lg:flex-row flex-col px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 gap-12">
      {/* IMAGE COMNTAINER */}
        <div className="h-1/2 relative lg:w-1/2 lg:h-full">
            <Image src={'/hero.png'} alt="hero image" fill className="object-contain"/>
        </div>
      {/* TEXT COMNTAINER */}
        <div className="h-1/2 flex flex-col gap-4 justify-center items-start lg:w-1/2 lg:h-full">
            <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experiences, Designing Tomorrow.</h1>
            <p className="md:text-xl">
              Welcome to my digital canvas, where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases a diverse collection of projects that reflect my commitment to excellence.
            </p>
            <div className="flex gap-4">
              <Link href={'/portfolio'} className="rounded-lg bg-black ring-1 ring-black text-white p-4">View My Work</Link>
              <Link href={'/contact'} className="rounded-lg bg-transparent ring-1 ring-black text-black p-4">Contact Me</Link>
            </div>
        </div>
    </div>
    </motion.div>
  ) 
};

export default Homepage;
