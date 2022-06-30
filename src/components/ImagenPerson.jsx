import { useEffect, useState } from "react";
import Image from "next/image"
import Progress from "./Progress"
//Componente que renderisa las imagen de los personajes dentro de la moda
const imagenes= ({data})=>{
    const [imagen,setImagen]=useState([])
    let images=[]
    const respuesta=data
    const links=respuesta.residents

    //funcion que almacena las imagen en el estado imagen
    const imagePersonaje=async ()=>{

        //condicional querecorre todo los link de planeta para extraer
        // las imagen de los persoanjes y almacenarlo en un array
        for (let index = 0; index < links.length; index++) {
          const indices = links[index];
         
          const respuesta= await fetch(indices).then(index=>index.json()) //extrae cada imagen de los link

          images.push(respuesta.image)//almacena cada imagen en cada interacion en el arrays
        }
        //almacena el arrays de imagen en el estado
        setImagen(images)
      }
      
      //llama al metodo para hacer el trabajo de atraer y almacenar 
      useEffect(()=>{
        imagePersonaje()
      },[data])
    
    return (
            <div  className="  grid mn:grid-cols-1 justify-items-center mt-5 sm:grid-cols-2 md:grid-cols-4 gap-7 ">
                {imagen.length === 0?<Progress/>: imagen.map((index,key)=>(<Image key={key} src={index} width="150rem" height="150rem"/>)) }
             </div>
    )
}

export default imagenes