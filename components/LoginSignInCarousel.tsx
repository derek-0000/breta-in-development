"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useState } from "react";
import "swiper/css";

export default function LoginSignInCarousel() {
  const text = [
    {

      title: "Gestiona tu salón y automatiza tus citas",
      text: "Con BRETA gestiona a tu equipo, los servicios que ofreces y la forma en la que gestionas tus citas.",
    },
    {

      title: "Monitorea tus estadísticas ",
      text: "Revisa tu progreso con gráficas claras y fáciles de entender, detecta áreas de oportunidad y aprovecha tus fortalezas.",
    },
    {

      title: "Promueve tus servicios",
      text: "Podrás crear promociones para incentivar tus servicios y darte a conocer.",
    },
    {

      title: "Proyecta tu negocio e incrementa tus citas",
      text: "Con BRETA como pinto de venta, llegarás a más clientes y darás a conocer tus servicios y promociones.",
    },
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return `<span class="${className}"></span>`;
    },
  };

  return (
    <>
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        direction="horizontal"
        loop={true}
        className="w-full h-full"
      >
        <SwiperSlide
          className={`relative h-full w-full bg-cover bg-MobileCarouselImage0 md:bg-salonCarouselImage0`}
        >
          <div className="absolute bottom-10 left-10 md:flex flex-col text-white z-20 hidden md:visible">
            <div className="text-2xl font-bold tracking-wide">
              {text[0].title}
            </div>
            <div className="">{text[0].text}</div>
          </div>
          <div className="md:hidden absolute bottom-40 text-center p-2">
            <div className="text-xl font-bold text-white">{text[0].title}</div>
            <div className="text-white">{text[0].text}</div>
          </div>
          <div className="bg-gradient-to-bl  from-transparent to-stone-900 z-40 opacity-30"></div>
        </SwiperSlide>
        <SwiperSlide
          className={`relative h-full bg-cover bg-MobileCarouselImage1 md:bg-salonCarouselImage1`}
        >
          <div className="absolute bottom-10 left-10 md:flex flex-col text-white z-20 hidden md:visible">
            <div className="text-2xl font-bold tracking-wide">
              {text[1].title}
            </div>
            <div className="">{text[1].text}</div>
          </div>
          <div className="md:hidden absolute bottom-40 text-center p-2">
            <div className="text-xl font-bold text-white">{text[1].title}</div>
            <div className="text-white">{text[1].text}</div>
          </div>
          <div className="bg-gradient-to-bl  from-transparent to-stone-900 z-40 opacity-30"></div>
        </SwiperSlide>
        <SwiperSlide
          className={`relative h-full bg-cover bg-MobileCarouselImage2 md:bg-salonCarouselImage2`}
        >
          <div className="absolute bottom-10 left-10 md:flex flex-col text-white z-20 hidden md:visible">
            <div className="text-2xl font-bold tracking-wide">
              {text[2].title}
            </div>
            <div className="">{text[2].text}</div>
          </div>
          <div className="md:hidden absolute bottom-40 text-center p-2">
            <div className="text-xl font-bold text-white">{text[2].title}</div>
            <div className="text-white">{text[2].text}</div>
          </div>
          <div className="bg-gradient-to-bl  from-transparent to-stone-900 z-40 opacity-30"></div>
        </SwiperSlide>
        <SwiperSlide
          className={`relative h-full bg-cover bg-MobileCarouselImage3 md:bg-salonCarouselImage3`}
        >
          <div className="absolute bottom-10 left-10 md:flex flex-col text-white z-20 hidden md:visible">
            <div className="text-2xl font-bold tracking-wide">
              {text[3].title}
            </div>
            <div className="md:hidden absolute bottom-40 text-center p-2">
              <div className="text-xl font-bold text-white">{text[3].title}</div>
              <div className="text-white">{text[3].text}</div>
            </div>
            <div className="">{text[3].text}</div>
          </div>
          <div className="bg-gradient-to-bl  from-transparent to-stone-900 z-40 opacity-30"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
