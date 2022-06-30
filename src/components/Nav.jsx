import {LogoRick,LogoMortik,IconMenu} from "./logo"
import Link from "next/link"
import { Footer } from "./Footer"
//Componet Menu 
const Nav=({children})=>{

  //funcion que atrava el boton aburguesa
  const challet=(e)=>{
    
    const menu= document.getElementById("menu")
      menu.classList.toggle("hidden")
  }

    return(
      <>
        <div className="">
            <nav className=" shadow-sm shadow-amber-500 bg-slate-900 text-slate-100 grid grid-cols-1 md:grid-cols-2">
              <div className="p-2 lg:p-0   md:float-left flex items-center justify-between">
              <div className="flex flex-row items-center pl-5">
                <LogoRick />
                <Link href="/"><h2 className=" font-bold hover:text-green-500 cursor-pointer"> Rick and Morty</h2></Link>
                <LogoMortik/>
              </div>

                <div>
                    <button id="boton" className="md:hidden cursor-pointer p-3 text-center md:p-0 rounded-full bg-slate-600 hover:bg-slate-800" onClick={()=>challet()}><IconMenu/></button>
                </div>
              </div>
            
              <div id="menu" className="hidden md:block font-mono mt-[3.7rem] md:mt-3 lg:mt-0 absolute z-20  md:relative text-md lg:text-lg bg-slate-900 w-1/2 md:w-full">
                <div className=" flex justify-between md:justify-end lg:justify-center lg:flex-row md:flex-row flex-col">
                      <Link href='/'                 ><a className="pl-5 md:py-0 py-5 md:p-3 lg:p-5 sm:p-2 hover:text-yellow-500 hover:bg-slate-800">Home</a></Link>
                      <Link href="/infiniti/personaje"><a className="pl-5 md:py-0 py-5  md:p-3 lg:p-5 sm:p-2 hover:text-yellow-500 hover:bg-slate-800">Personaje</a></Link>
                      <Link href="/infiniti/localizacion"><a className="pl-5 md:py-0 py-5  md:p-3 lg:p-5 sm:p-2 hover:text-yellow-500 hover:bg-slate-800">Localización</a></Link>
                      <Link href="/sobremi"><a className="pl-5 md:py-0 py-5  md:p-3 lg:p-5 sm:p-2 hover:text-yellow-500 hover:bg-slate-800">Sobre mi</a></Link>
                </div>

              </div>
            </nav>
        </div>
        {children}
        <Footer />
      </>
      
    )
}

export default Nav