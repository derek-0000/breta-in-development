"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useState } from "react";
import "swiper/css";

export default function LoginSignInCarousel() {
  const salonText = [
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
  const clientText = [
    {

      title: "Más cerca de los servicios que más te gustan.",
      text: "Con Breta podrás conocer las ofertas de servicios de los salones más cercanos a ti.",
    },
    {

      title: "Reserva y gestiona tus citas.",
      text: "Podrás reservar citas, solictar cambios o cancelarlas desde la comodidad de tu celular.",
    },
    {

      title: "Aprovecha grandes promociones.",
      text: "Podrás disfrutar de promociones exclusivas, así como de cualquier salón.",
    },
    {

      title: "Encuentra lo que necesitas en cualquier lugar.",
      text: "Encuentra recomendaciones cuando viajas a una ciudad que no conozcas.",
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
          <div className="absolute bottom-10 left-10 md:flex flex-col text-white z-20 hidden md:visible md:w-[50%] xl:w-[60%]">
            <div className="text-2xl font-bold tracking-wide">
              {salonText[0].title}
            </div>
            <div className="">{salonText[0].text}</div>
          </div>
          <div className="md:hidden absolute bottom-40 left-1/2 transform -translate-x-1/2 text-left w-full p-2 z-40">
            <div className="text-[2rem] font-bold text-white mb-4">{clientText[0].title}</div>
            <div className="text-breta-gray">{clientText[0].text}</div>
          </div>
          <div className="w-full h-full bg-gradient-to-bl from-transparent to-stone-900 opacity-50 z-10"></div>
        </SwiperSlide>
        <SwiperSlide
          className={`relative h-full bg-cover bg-MobileCarouselImage1 md:bg-salonCarouselImage1`}
        >
          <div className="absolute bottom-10 left-10 md:flex flex-col text-white z-20 hidden md:visible md:w-[50%] xl:w-[60%]">
            <div className="text-2xl font-bold tracking-wide">
              {salonText[1].title}
            </div>
            <div className="">{salonText[1].text}</div>
          </div>
          <div className="md:hidden absolute bottom-40 left-1/2 transform -translate-x-1/2 text-left w-full p-2 z-40">
            <div className="text-[2rem] font-bold text-white mb-4">{clientText[1].title}</div>
            <div className="text-breta-gray">{clientText[1].text}</div>
          </div>
          <div className="w-full h-full bg-gradient-to-bl from-transparent to-stone-900 opacity-50 z-10"></div>
        </SwiperSlide>
        <SwiperSlide
          className={`relative h-full bg-cover bg-MobileCarouselImage2 md:bg-salonCarouselImage2`}
        >
          <div className="absolute bottom-10 left-10 md:flex flex-col text-white z-20 hidden md:visible md:w-[50%] xl:w-[60%]">
            <div className="text-2xl font-bold tracking-wide">
              {salonText[2].title}
            </div>
            <div className="">{salonText[2].text}</div>
          </div>
          <div className="md:hidden absolute bottom-40 left-1/2 transform -translate-x-1/2 text-left w-full p-2 z-40">
            <div className="text-[2rem] font-bold text-white mb-4">{clientText[2].title}</div>
            <div className="text-breta-gray">{clientText[2].text}</div>
          </div>
          <div className="w-full h-full bg-gradient-to-bl from-transparent to-stone-900 opacity-50 z-10"></div>
        </SwiperSlide>
        <SwiperSlide
          className={`relative h-full bg-cover bg-MobileCarouselImage3 md:bg-salonCarouselImage3`}
        >
          <div className="absolute bottom-10 left-10 md:flex flex-col text-white z-20 hidden md:visible md:w-[50%] xl:w-[60%]">
            <div className="text-2xl font-bold tracking-wide">
              {salonText[3].title}
            </div>
            <div className="">{salonText[3].text}</div>
          </div>
          <div className="md:hidden absolute bottom-40 left-1/2 transform -translate-x-1/2 text-left w-full p-2 z-40">
            <div className="text-[2rem] font-bold text-white mb-4">{clientText[3].title}</div>
            <div className="text-breta-gray">{clientText[3].text}</div>
          </div>
          <div className="w-full h-full bg-gradient-to-bl from-transparent to-stone-900 opacity-50 z-10"></div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
