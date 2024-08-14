import ArrowRight from "@/assets/arrow-right.svg"
import Logo from "@/assets/logosaas.png"
import Image from "next/image"
import MenuIcon from "@/assets/menu.svg"

const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
    <div className="flex items-center justify-center py-3 bg-black text-white text-sm gap-3" >
      <p className="text-white/60 hidden md:block ">Streamline your workflow and boost your productivity</p>
      <div className="inline-flex gap-1 items-center ">
      <p> Get started for free</p>
      <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
      </div>

    </div>

    <div className="py-5 px-2 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
        <Image src={Logo} alt="Saas Logo" width={40} height={40} />
        <MenuIcon  className="h-8 w-8 cusrsor-pointer md:hidden cursor-pointer"/>

        <nav className="hidden md:flex gap-6 text-black/60 items-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Help</a>
          <a href="#">Help</a>
          <button className="bg-black text-white rounded-md font-medium px-4 py-2 inline-flex align-center justify-center
          tracfing-tight">Get for free</button>
        </nav>
        </div>
      </div>
    </div>

    </header>
  )
}

export default Header