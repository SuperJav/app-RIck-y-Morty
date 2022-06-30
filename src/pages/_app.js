import '../styles/globals.css'
import "../styles/tailwind.css"
import Nav from "../components/Nav"
import Script from "next/script"
import { Footer } from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <script src="https://cdn.lordicon.com/xdjxvujz.js"></script>
      <Component {...pageProps} />
      
      {/* <Footer/> */}
    </>
  )
}

export default MyApp
