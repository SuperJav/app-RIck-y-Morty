import {FaFacebook,FaInstagram,FaGithub} from "react-icons/fa"
import Link from "next/link"
//Component for footer of index
export const Footer=()=>{

    return(
        <>
        <div className=" bg-slate-900 h-36 mt-10 pb-5 flex justify-center items-end flex-row">
            <div className="">
                <h1 className=" hover:text-yellow-500 text-center text-[0.9em]"><a href={"https://myportafolio-javisuper.netlify.app/"}>Developer by Javi Super</a></h1>
                <hr className=" border-y-1 border-y-slate-400 opacity-40 mx-auto mt-1 mb-3" width="140rem"/>
            
                <div className=" flex w-44 lg:w-96 justify-around">
                    <a href="https://www.facebook.com/javiel.ramirez.12" target={"_blank"}><FaFacebook fontSize="1.5em"/></a>
                    <a href="https://www.instagram.com/javisuper_/" target={"_blank"}><FaInstagram fontSize="1.5em"/></a>
                    <a href="https://github.com/SuperJav?tab=repositories" target={"_blank"}><FaGithub fontSize="1.5em"/></a>
                </div>
            </div>
            
        </div>
        </>
    )
}