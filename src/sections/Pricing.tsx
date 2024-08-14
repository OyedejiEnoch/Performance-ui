"use client"

import CheckIcon from "@/assets/check.svg"
import {motion, useInView} from "framer-motion"
import { useRef } from "react";
import { twMerge } from "tailwind-merge";


const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];




const Pricing = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="section-heading">
        <h2 className="section-title ">Pricing</h2> 
        <p className="section-descritpion">Free forever. Upgrade for unlimited tasks, better security and exclusive features.</p>
        </div>

      <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end">
        {pricingTiers.map((card)=>(
          <motion.div ref={ref} key={card.title } className={twMerge("card", card.inverse === true &&
             "border-black bg-black text-white")}
             initial={{
              translateY:60
             }}
             animate={{
              translateY:0
             }}
             transition={{
              duration:2,
              ease:"easeInOut"
             }}
             >
            <div className="flex justify-between">
           <h3 className={twMerge("text-lg font-bold text-black/50" , card.inverse === true && "text-white/60" )}>{card.title}</h3>
           {card.popular === true &&  
            (
              <div className=" inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 ">
              <motion.span 
              animate={{
                backgroundPositionX:"-100%",
                
              }}
              transition={{
                duration:1,
                repeat:Infinity,
                ease:"linear",
                repeatType:"loop"
              }}

              className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium">Popular</motion.span>
              </div>
            )
           }
        
            </div>
           <div className="flex items-baseline gap-1 mt-[30px]">
              <span className="text-4xl font-bold tracking-tighter leading-none">{card.monthlyPrice}</span>
              <span className="tracking-tight font-bold text-black/50">/month</span>
           </div>
           <button className={twMerge("btn btn-primary w-full mt-[30px]", card.inverse === true && "bg-white text-black")}>{card.buttonText}</button>
           <ul className="flex flex-col gap-5 mt-8">
              {card.features.map((feature, index)=>(
              <li className="text-sm flex items-center gap-4" key={index}>
                <CheckIcon className="h-6 w-6" />
                <span>{feature}</span>


                </li>
              ))}
           </ul>
         </motion.div>
        ))}
       
      </div>

      </div>
    </section>
  )
}

export default Pricing