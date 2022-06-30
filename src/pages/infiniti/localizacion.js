import { CajaLocation } from "../../components/CajaLocation.jsx"
import HeaderComponents from "../../components/Header.jsx"
import Nav from "../../components/Nav.jsx"
import Tema from "../../components/Tema.jsx"

const Localizacion=({api})=>{
    
    return(
        <>
            <HeaderComponents title="| Localizacion"/>
            <Nav>
            <Tema tema={"Localizacion"}/>
            <CajaLocation datos={api.data}/>
            </Nav>
            
        </>
    )
}

export async function getStaticProps(){

    const results=await fetch("https://rickandmortyapi.com/api/location")
    const data= await results.json()

    return{
        props:{
            api:{
                data
            }
        }
    }
}

export default Localizacion