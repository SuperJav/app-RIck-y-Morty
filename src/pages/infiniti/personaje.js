import Caja from "../../components/Caja.jsx"
import HeaderComponents from "../../components/Header.jsx"
import Nav from "../../components/Nav.jsx"
import Tema from "../../components/Tema.jsx"

const Personaje=({api})=>{
    return(
        <>
            <HeaderComponents title="| Personaje"/>
            <main>
                <Nav>
                    <Tema tema={"Personajes"} />
                <Caja datos={api.data} cantidaPersonaje={20} ocultarVermas={true} />
                </Nav>
            </main>
        </>
        )
}

export async function getStaticProps(){

    const results= await fetch('https://rickandmortyapi.com/api/character')
    const data= await results.json()
    return{
        props:{
            api:{
                data
            }
        }
    }
}

export default Personaje