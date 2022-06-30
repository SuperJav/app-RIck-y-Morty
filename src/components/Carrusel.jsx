// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay,EffectFade} from "swiper";
import Link from "next/link";

//Componente carrusel para las imagenes of Home
 export  const Carrusel=()=>{

    return(
        <div className="bg-neutral-900 text-gray-50 h-2/6 flex z-0">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                effect={"fade"}
                centeredSlides={true}
                autoplay={{delay: 10000,
                disableOnInteraction: false,}}
                pagination={{clickable: true,}}
                modules={[Autoplay,EffectFade,]}
                className="mySwiper opacity-60 z-0"
            >
                <SwiperSlide>
                    <img src={"/img/wallhaven-01zw9w.png"} className="  h-96 w-full" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={"/img/wallhaven-396d96.png"} className="  h-96 w-full"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={"/img/wallhaven-767yj3.jpg"} className="  h-96 w-full"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={"/img/wallhaven-mpexl9.jpg"} className="  h-96 w-full"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={"/img/wallhaven-n6rgvl.png"} className="  h-96 w-full"/>
                </SwiperSlide>
                <SwiperSlide>
                <img src={"/img/wallhaven-nmkv81.png"} className="  h-96 w-full"/>
                </SwiperSlide>
            </Swiper>
                    <div className=" absolute z-10  flex items-center justify-end w-full h-80">
                        <div className="flex ml-44 md:ml-96 lg:ml-[40rem] flex-col">
                            <h1  className=" font-thin text-justify text-white text-sm md:text-lg mb-3 mr-5">
                                Nadie existe a propósito. Nadie pertenece a ninguna parte. Todos vamos a morir. Ven a ver la televisión.    – Morty <br/><br/>
                                Podríamos disfrutarlo un rato. Es decir, mira lo loco que es todo * Morty</h1>
                                <Link href={"/infiniti/localizacion"}>
                                    <button className="outline  hover:outline-offset-2 outline-cyan-700  text-center md:text-left text-xs font-semibold lg:text-left px-1 py-2 md:p-4 bg-[#2AAF6D] w-32 md:w-max rounded opacity-80 hover:opacity-100">localización</button>
                                </Link>
                        </div>
                    </div>
        </div>
    )
}





