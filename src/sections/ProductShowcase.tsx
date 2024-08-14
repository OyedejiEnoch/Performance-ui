"use client"
import productImage from "@/assets/product-image.png"
import pyramidImg from "@/assets/pyramid.png"
import tubeImg from "@/assets/tube.png"
import {motion, useScroll, useTransform} from "framer-motion"

import Image from "next/image"
import { useRef } from "react"


const ProductShowcase = () => {

  const sectionRef =useRef(null)
  const {scrollYProgress} =useScroll({
    target:sectionRef,
    offset:["start end", "end start"]
  })

  const translateY =useTransform(scrollYProgress, [0,1], [150, -150])

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-24" >
      <div className="max-w-6xl mx-auto">

        <div className="section-heading">

        <div className="flex justify-center">
         <div className="tag">Boost your Productivity</div>
        </div>
        <h2 className="section-title mt-5">A more effective way to track progress</h2>
        <p className="section-descritpion">Effortlessly turn your ideas into a fully functional, responsive, Saas website in just minuties with this template</p>
                  
        </div>

        <div className="relative">
        <Image src={productImage} alt="Product Image" className="mt-10" />
        <motion.img src={pyramidImg.src} alt="pyramid Image" width={262} height={262} className="hidden md:block absolute -right-36 -top-32"
        style={{
          translateY
        }}
        />
        <motion.img src={tubeImg.src} alt="tube Image" width={242} height={242} className="hidden md:block absolute bottom-24 -left-20" 
        style={{
          translateY
        }}
        />
        </div>

      </div>
    </section>
  )
}

export default ProductShowcase