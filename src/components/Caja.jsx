import Image from "next/image"
import Link from "next/link"

//Componet for the persons of home and Persons
const Caja=({datos,cantidaPersonaje,ocultarVermas})=>{

    const {results}=datos // data of fetch
    const ocultar=ocultarVermas //condition for button "look more"
    const data=results.slice(0,cantidaPersonaje) //return a rrays con la cantida de peronaje que se quiere mostrar

    return(
        <>
            <div className="bg-slate-900 rounded-sm  w-[80%] grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mx-auto mn:p-0 sm:p-5 mt-28 cursor-pointer">
                {
                    data.map((index,key)=>
                        (
                            <div key={key} className=" shadow-md shadow-amber-500 h-[100%] w-[68%] mn:w-[100%] md:w-[100%] bg-slate-700 grid grid-cols-1 md:grid-cols-2 rounded-md  mx-0  sm:mx-auto">
                                <div className=" rounded-md flex mx-auto md:mx-0">
                                    <Image className="md:rounded-tl-sm md:rounded-bl-sm" src={index.image}  alt={index.name} width={"250rem"} height={"170rem"} layout='fixed'/>
                                </div>
                                <div className="flex  flex-col ml-5 text-xs md:text-base lg:text-lg mn:text-center  md:text-left">
                                    <Link href={"/infiniti/personaje/[id]"} as={`/infiniti/personaje/${index.id}`}>
                                        <h2 className=" text-zinc-50 font-semibold text-2xl font-mono hover:text-green-500 hover:translate-x-1 cursor-pointer">{index.name}</h2>
                                    </Link>
                                    <h4 className=" text-white">
                                        {index.status =="Alive"?(<Image src={"/img/icons8-heart-16.png"} width={"15rem"} height={"15rem"} className="  "/>)
                                        :index.status==="Dead"?(<Image src={"/img/icons8-cráneo-100.png"} width={"15rem"} height={"15rem"}/>)
                                        :(<Image src={"/img/icons8-signo-de-interrogación.png"} width={"15rem"} height={"15rem"}/>)}{index.status}-{index.species}
                                    </h4>
                                    <h5 className=" text-gray-500 text-base font-semibold">Última ubicación conocida:<br/><span className=" text-slate-100 text-xs font-mono">{index.origin.name}</span></h5>
                                    <h5 className=" text-gray-500 text-base font-semibold">Visto por primera vez en:<br/><span className=" text-slate-100 text-xs font-mono ">{index.location.name}</span></h5>
                                </div>
                            </div>
                            
                        )
                    )
                }
            </div>
            <div className="bg-slate-900 rounded-sm  w-[80%] grid justify-items-center grid-cols-1 content-center mx-auto md:-mt-7 mn:p-0 sm:p-5">
                {
                    ocultar?(<div></div>):(
                    <Link href={"/infiniti/personaje"}>
                    <a className="outline outline-green-500 rounded-sm py-2 my-5 hover:bg-green-500 hover:outline-offset-2 text-white text-center w-48 bg-amber-500 font-medium font-mono">
                <lord-icon src="https://cdn.lordicon.com/auvicynv.json" trigger="loop-on-hover" delay="25" style={{width:20, height:20}}></lord-icon>
                    Ver mas</a></Link>)
                }
            </div>
        </>
    )
}

export default Caja