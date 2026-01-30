"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const artifacts = [
    { img: "/images/pura-margarana.png", title: "Pura Margarana" },
    { img: "/images/keris-pusaka.png", title: "Keris Pusaka" },
    { img: "/images/monumen-bajra-sandhi.png", title: "Monumen Bajra Sandhi" },
    { img: "/images/lapangan-puputan.png", title: "Lapangan Puputan" },
    { img: "/images/gedung-sejarah-margarana.png", title: "Gedung Sejarah Margarana" },
];

export default function ArtifactGallery() {
    return (
        <section id="galeri" className="py-12 bg-zinc-900 overflow-hidden">
            <div className="container mx-auto px-6 mb-6 text-center">
                <h2 className="text-2xl md:text-4xl font-serif text-bali-gold">Galeri Warisan</h2>
                <p className="text-gray-400 mt-2">Saksi bisu perjuangan masa lampau.</p>
            </div>

            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full max-w-3xl py-4 mx-auto"
            >
                {artifacts.map((item, idx) => (
                    <SwiperSlide key={idx} className="bg-transparent w-[280px] md:w-[320px]">
                        <div className="relative aspect-square overflow-hidden rounded-md shadow-2xl border-2 border-bali-gold/10">
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 inset-x-0 bg-black/60 p-4 backdrop-blur-sm">
                                <p className="text-center text-bali-sand font-serif text-lg">{item.title}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
