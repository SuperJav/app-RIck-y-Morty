import Head from "next/head";

//componetente para agregarle titulo a cada pagina
const Header=({title="App Rick y Morty"})=>{

    return(
        <Head>
            <title>{title}</title>
        </Head>
    )
}

export default Header