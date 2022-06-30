import Nav from "../../../components/Nav"
import Image from "next/image"
import Header from "../../../components/Header";
export default function personaje({result}){
    
    return(
        <>  <Header title={result.name}/>
            <Nav>
                <section  className=" mx-auto mn:w-[90%] md:w-2/3 h-[900px] pt-5 mt-5 bg-slate-900 rounded-lg">
                    <div className="ml-5" onClick={()=>{history.go(-1); return false;}}>
                        <Image src={"/img/icons8-izquierda-en-círculo-2-100.png"} width={"50rem"} height={"50rem"}/>
                    </div>
                    <div className="flex justify-center pt-5 pb-3">
                        <Image className=" rounded-md" src={result.image} alt={result.name}  width={"400rem"} height={"350rem"} layout='fixed'/>
                    </div>
                    <div>
                    <h2 className=" text-center font-mono font-bold font">{result.name}</h2>
                    <hr className=" mx-auto opacity-10" width="60%"/>
                    </div> 
                    <div className="h-[100px] text-center  mt-5">
                        <div className=" bg-slate-600 p-5 flex flex-col">
                            <span className=" font-medium text-[1.5rem]">Estatus y especie:
                                <span className=" text-[1rem] ml-2 font-mono">
                                    {result.status =="Alive"?(<Image src={"/img/icons8-heart-16.png"} width={"15rem"} height={"15rem"}/>)
                                    :result.status==="Dead"?(<Image src={"/img/icons8-cráneo-100.png"} width={"15rem"} height={"15rem"}/>)
                                    :(<Image src={"/img/icons8-signo-de-interrogación.png"} width={"15rem"} height={"15rem"}/>)}  {result.status}-{result.species}
                                </span>
                            </span>
                            <span className=" mt-5 font-medium text-[1.5rem]">Localizado: <span className=" font-mono text-[1rem]">{result.location.name}</span></span>
                            <span className=" mt-5 font-medium text-[1.5rem]">Genero: {result.gender === "Male"?<Image src={"/img/icons8-hombre-100.png"} width={"15rem"} height={"15rem"} />:<Image src={"/img/icons8-mujer-100.png"} width={"15rem"} height={"15rem"} />}<span className=" text-[1rem] ml-2 font-mono">{result.gender}</span></span>
                            <span className=" mt-5 font-medium text-[1.5rem]">Origen : <span className="font-mono text-[1rem]">{result.origin.name}</span></span>
                        </div>
                    </div>
                </section>
            </Nav>
        </>
    )
}

export async function getStaticPaths(){

    const datos= await fetch("https://rickandmortyapi.com/api/character");
    const resultado =await datos.json()
    const data=await resultado.results

    const paths= data.map(index=>{
            return{ 
                params:{ id:`${index.id}`}}})
    return{
        paths,
        fallback:false
    }
}

export async function getStaticProps({params}) {
  const datos= await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  const result= await datos.json()

    return{
        props:{
            result
        }

    }

}


