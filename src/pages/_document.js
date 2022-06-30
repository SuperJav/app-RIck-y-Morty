import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <meta name="description" content="Obten informacion de todo los personajes de Rick y Morty,tambien ver sus localizaciones."></meta>
      <meta name="author" content="javielito ramirez"></meta>
      <meta name="copyright" content="Javi super"></meta>
      <meta name="keywords" content="Rick y Morty, planetas, galaxia , localizacion,personajes,Rick,Morty,frase de rick , persoanjes de rick y morty"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}