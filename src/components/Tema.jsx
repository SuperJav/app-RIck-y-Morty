
//Compoente para la section de cada Pagina
 const Tema=({tema})=>{

    return(
        <>
            <h1 className=" text-slate-700  md:pl-28 md:mt-28 text-center  md:text-left text-2xl md:text-4xl  font-semibold tracking-wide">{tema}</h1>
            <hr className=" shadow-sm shadow-black border-y-4 border-y-green-400 opacity-40" width="100%"/>
        </>
    )

}

export default Tema