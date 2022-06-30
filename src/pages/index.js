import HeaderComponet from "../components/Header"
import {Carrusel} from "../components/Carrusel"
import Tema from "../components/Tema"
import Caja from "../components/Caja"
import Nav from "../components/Nav"
//import { useState,useEffect } from "react"

const Home=({api})=>{ 
    //Permite cerrar el menu si toca fuera del menu
    const tocar=(e)=>{
      const menu= document.getElementById("menu")

      menu.classList.toggle("hidden")? menu.classList.toggle("hidden"):menu.classList.toggle("hidden")
    }
    
    return( 
        <>
            <HeaderComponet />
            <main className="h-[1000px] bg-teal-50" onClick={()=>tocar()}>
                <Nav>
                    <Carrusel/>
                    <Tema tema={"El Mundo de Rick y Morty"}/>
                    <Caja datos={api.datos} cantidaPersonaje={4} ocultarVermas={false}/>
                </Nav>
            </main>
        </>
    )
}


export async function getServerSideProps(){
    
    const respuesta = await fetch('https://rickandmortyapi.com/api/character')
    const datos= await respuesta.json()
  
  return {
    props:{
        api:{
            datos,
        },
    }
}
}


export default Home