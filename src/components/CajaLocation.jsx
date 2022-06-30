
import TransitionsModal from "./ModalMaterial"

//Componete que retorna en la seccion location los link para ver todo los personaje que ese planeta o episodeo
export const CajaLocation=({datos})=>{
        const {results}=datos //Sustrae los planetas

    return( 
        <>
            <div className="bg-slate-900 rounded-sm  w-[80%] grid grid-cols-1 gap-y-4 mx-auto mn:p-0 sm:p-5 mt-28 ">
                    {
                        results.map((index,key)=>(
                                <div key={key} className=" shadow-md shadow-amber-500 h-[100%] w-[68%] mn:w-[100%] md:w-[100%] bg-slate-700 flex mn:flex-col md:flex-row text-center items-center font-mono font-semibold rounded-md  px-5  sm:mx-auto">
                                    <div className="flex flex-row w-full justify-between text-center items-center"><span>{index.id}</span><span>{index.name}</span><span>{index.type}</span><span>{index.dimension}</span><span></span></div>
                                    <div className=" rounded-md flex mx-auto md:mx-0">
                                        <a className="outline outline-green-500 hover:outline-amber-500 shadow-lg shadow-black rounded-sm py-2 my-5 hover:bg-green-500 hover:outline-offset-2 text-center w-48 bg-amber-500 font-medium font-mono">
                                            <TransitionsModal datos={index}/>
                                        </a>    
                                    </div>
                                </div>))
                    }
            </div>
        </>
    )
}