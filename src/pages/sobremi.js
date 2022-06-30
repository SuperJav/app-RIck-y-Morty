import HeaderComponent from "../components/Header.jsx"
import Nav from "../components/Nav"
import Tema from "../components/Tema"
import Image from "next/image.js"
import Link from "next/link.js"

const Sobremi=()=>{
    return(
    <>
        <HeaderComponent title="| Sobre mi"/>
       <Nav>
        <Tema tema="Sobre Mi"/>
        <section className=" bg-slate-900 mt-5 mn:w-4/5 md:w-2/3 h-[40rem] mx-auto flex flex-col mn:rounded-tr-[5rem] md:rounded-tr-[11rem] lg:rounded-tr-[15rem] rounded-b-lg rounded-tl-2xl">
                <div className="">
                    <Image className="rounded-tr-full rounded-tl-[50rem]" src={"/img/fondo-logo.jpg"} height={"250rem"} width={"840rem"} priority layout="responsive" /> 
                </div>
                <div className="shadow-lg shadow-black mx-auto mn:h-32 md:h-60 rounded-full mn:-mt-12 md:-mt-28 mn:w-[8rem] md:w-[15rem]" >
                    <Image src={"/img/logo-super-javi.png"} alt="logo-javi-super" height={"250rem"} width={"250rem"} />
                </div>
                <div className=" mt-10">
                   <div className="text-center">
                    <span className=" text-[1.5rem] tracking-widest hover:text-[#B3E1F0] cursor-pointer ">Developer Javi Super</span>
                   </div>
                   <div className=" text-center">
                    <Link href={"https://myportafolio-javisuper.netlify.app/"}>
                        <button className=" mt-5 shadow-md shadow-amber-500 hover:shadow-green-500 hover:bg-green-500 hover:outline-offset-2 font-medium font-mono rounded-full bg-amber-500 py-2 px-2 flex mx-auto"><img className="mr-2" src={"/img/iconoPortafolio.png"}  width={"20rem"}/><span>My portafolio</span></button>
                    </Link>
                   </div>
                </div>
        </section>
       </Nav>
    </>
    )
}

export default Sobremi