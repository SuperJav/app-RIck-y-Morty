import Nav from "../components/Nav"
import Image from "next/image"
export default function Error404(){

    return(
        <>
        <Nav>
           <div className=" mn:mb-60 md:mb-0" onClick={()=>{history.go(-1); return false;}}>
           <Image src={"/img/404.jpg"} width={"100%"} height={"100%"} layout="responsive" />
           </div>
        </Nav>
        </>
    )

}