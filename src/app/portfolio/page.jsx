"use client"

import {motion, useScroll, useTransform} from 'framer-motion'
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Hakbus Web",
    desc: "Hakbus Web is an online platform that allows users to conveniently book bus tickets from the comfort of their homes. Experience seamless ticket booking and travel planning through this user-friendly website.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://hakbus.org",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Hakbus App",
    desc: "Hakbus App brings the convenience of bus ticket booking to your mobile device. Available on the App Store and Play Store, it provides a user-friendly interface for on-the-go travelers.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Insylink Website/Dashboard",
    desc: "Insylink Website/Dashboard serves as the online hub for the Insylink Point of Sale (POS) system designed for restaurants. Explore the website and utilize the dashboard for efficient management of restaurant operations.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://insylink.com",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Insylink POS App",
    desc: "Insylink POS App is a mobile application (available on iOS and Android) that complements the Insylink POS system. Empower restaurant staff with a feature-rich POS solution on their mobile devices.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://lama.dev",
  },
];

const myProjects = [
  {
    name: "Hakbus Web",
    description:
      "Hakbus Web is an online platform that allows users to conveniently book bus tickets from the comfort of their homes. Experience seamless ticket booking and travel planning through this user-friendly website.",
    image: "",
    tech: [
      { name: "React", icon: <FaReact className="text-white" size={25} /> },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-white" size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-white" size={25} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-white" size={25} />,
      },
    ],
  },
  {
    name: "Hakbus App",
    description:
      "Hakbus App brings the convenience of bus ticket booking to your mobile device. Available on the App Store and Play Store, it provides a user-friendly interface for on-the-go travelers.",
    image: "",
    tech: [
      { name: "React", icon: <FaReact className="text-white" size={25} /> },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-white" size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-white" size={25} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-white" size={25} />,
      },
    ],
  },
  {
    name: "Insylink Website/Dashboard",
    description:
      "Insylink Website/Dashboard serves as the online hub for the Insylink Point of Sale (POS) system designed for restaurants. Explore the website and utilize the dashboard for efficient management of restaurant operations.",
    image: "",
    tech: [
      { name: "React", icon: <FaReact className="text-white" size={25} /> },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-white" size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-white" size={25} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-white" size={25} />,
      },
    ],
  },
  {
    name: "Insylink POS App",
    description:
      "Insylink POS App is a mobile application (available on iOS and Android) that complements the Insylink POS system. Empower restaurant staff with a feature-rich POS solution on their mobile devices.",
    image: "",
    tech: [
      { name: "React", icon: <FaReact className="text-white" size={25} /> },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-white" size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-white" size={25} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-white" size={25} />,
      },
    ],
  },
  {
    name: "Insyllium",
    description:
      "Insyllium is the official website of a dynamic software development company. Explore our portfolio, services, and expertise in delivering innovative software solutions for various industries.",
    image: "",
    tech: [
      { name: "React", icon: <FaReact className="text-white" size={25} /> },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-white" size={25} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-white" size={25} />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-white" size={25} />,
      },
    ],
  },
];

const PortfolioPage = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({target:ref})
  const x = useTransform(scrollYProgress,[0,1],["0%","-80%"])
  
  return (
    <motion.div className="h-full" initial={{y:'-200vh'}} animate={{y:"0%"}} transition={{duration:1}}>
    <div className='h-[500vh] md:h-[600vh] relative' ref={ref}>
        <div className='w-screen h-[calc(100vh-6rem)] flex items-center justify-center'>
            <div className='flex flex-col gap-12 items-center justify-center'>
            <p className='text-8xl text-center font-medium'>My Work</p>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
            </div>
        </div>
        <div className='hidden sticky top-0 md:flex h-screen gap-4 items-center'>
          <motion.div style={{ x }} className='flex gap-0' >
            <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300'/>
            {items?.map(item=>(
              <div key={item?.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item?.color}`}>
                  <div className='flex flex-col gap-8 text-white'>
                      <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{item?.title}</h1>
                      <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                        <Image src={item?.img} alt={item?.title} fill className='rounded-lg'/>
                      </div>
                        <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item?.desc}</p>
                        <Link href={item?.link} className='flex justify-start'>
                          <button className='bg-white text-slate-700 hover:bg-gray-100 duration-100 transition-colors px-8 py-3 lg:px-12 rounded-lg text-sm md:text-[18px] lg:text-lg'>View</button>
                        </Link>
                  </div>
              </div>
            ))}
            </motion.div>
        </div>
          <motion.div className='md:hidden flex flex-col' >
            {items?.map(item=>(
              <div key={item?.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-b ${item?.color}`}>
                  <div className='flex flex-col gap-8 text-white'>
                      <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{item?.title}</h1>
                      <div className='relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
                        <Image src={item?.img} alt={item?.title} fill className='rounded-lg'/>
                      </div>
                        <p className='w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]'>{item?.desc}</p>
                        <Link href={item?.link} className='flex justify-start'>
                          <button className='bg-white text-slate-700 hover:bg-gray-100 duration-100 transition-colors px-8 py-3 lg:px-12 rounded-lg text-sm md:text-[18px] lg:text-lg'>View</button>
                        </Link>
                  </div>
              </div>
            ))}
            </motion.div>
    </div>
            <div className='w-screen h-screen flex flex-col gap-16 justify-center items-center tex-center'>
              <h1 className='text-4xl sm:text-8xl text-center'>Do you have a project in mind?</h1>
              <div className='relative'>
                  <motion.svg animate={{rotate:360}} transition={{duration:8, ease:"linear", repeat:Infinity}} viewBox='0 0 300 300' className='w-64 h-64 md:w-[500px] md:h-[500px]'>
                    <defs>
                      <path
                        id='circlePath'
                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <text fill='#000'>
                      <textPath xlinkHref='#circlePath' className='text-xl'>Front-end Developer and UI Designer</textPath>
                    </text>
                  </motion.svg>
                  <Link href={"/contact"} className='w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex justify-center items-center'>Hire Me</Link>
              </div>
            </div>
    </motion.div>
  )
}

export default PortfolioPage