"use client"
import ArrowRignt from "@/assets/arrow-right.svg"
import starImg from "@/assets/star.png"
import springImg from "@/assets/spring.png"
import Image from 'next/image'
import {motion, useScroll, useTransform, useMotionValueEvent} from "framer-motion"
import { useRef } from "react"


const CallToAction = () => {

  const sectionRef =useRef(null)
  const {scrollYProgress} =useScroll({
    target:sectionRef,
    offset:["start end", "end start"]
  })

  const translateY =useTransform(scrollYProgress, [0,1], [150, -150])

  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip' >
      <div className='max-w-6xl mx-auto'>
        <div className='section-heading relative'>
        <h2 className='section-title'>Sign up for free</h2>
        <p className='section-descritpion mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts</p>
       
       <motion.img src={starImg.src} alt='Star Image' width={360} className='absolute -left-[350px] -top-[137px]'
         style={{
          translateY:translateY
        }}
       />
       <motion.img src={springImg.src} alt='Spring Image' width={360} className='absolute -right-[350px] -top-[19px]'
         style={{
          translateY:translateY
        }}
       />
       
        </div>
      </div>
      <div className='flex gap-2 mt-10 justify-center'>
        <button className='btn btn-primary'>Get get for free</button>
        <button className='btn btn-text gap-1'>
          <span>Learn More </span>  
          <ArrowRignt className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}

export default CallToAction