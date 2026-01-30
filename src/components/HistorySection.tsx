"use client";
import React from "react";
import { motion } from "framer-motion";

const events = [
    {
        year: "Abad 19",
        title: "Campur Tangan Belanda",
        desc: "Belanda mulai campur tangan dalam urusan kerajaan-kerajaan di Bali."
    },
    {
        year: "1904",
        title: "Insiden Sri Kumala",
        desc: "Insiden kapal Belanda Sri Kumala karam di Sanur dijadikan alasan penyerangan."
    },
    {
        year: "20 Sep 1906",
        title: "Puputan Badung",
        desc: "Terjadi Puputan Badung di Denpasar; raja, keluarga kerajaan, dan rakyat berperang sampai mati melawan Belanda."
    },
    {
        year: "1906",
        title: "Jatuhnya Badung & Tabanan",
        desc: "Kerajaan Badung dan Tabanan jatuh ke tangan Belanda."
    },
    {
        year: "1908",
        title: "Puputan Klungkung",
        desc: "Puputan Klungkung dipimpin Dewa Agung Jambe II; perlawanan terakhir kerajaan Bali."
    },
    {
        year: "1908",
        title: "Bali di Bawah Kolonial",
        desc: "Seluruh Bali berada di bawah kekuasaan kolonial Belanda."
    }
];

export default function HistorySection() {
    return (
        <section id="sejarah" className="relative py-24 md:py-40 bg-bali-dark overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-bali-gold mb-6">Timeline Perang Puputan</h2>
                    <div className="h-[2px] w-16 bg-bali-red mx-auto" />
                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto font-light">
                        Perjalanan panjang mempertahankan tanah kelahiran, di mana darah menjadi tinta sejarah yang tak terhapuskan.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-bali-gold/50 to-transparent transform -translate-x-1/2 hidden md:block" />

                    <div className="space-y-16 md:space-y-24">
                        {events.map((event, index) => (
                            <TimelineItem key={index} event={event} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function TimelineItem({ event, index }: { event: { year: string; title: string; desc: string }, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative"
        >
            {/* Dot - centered on the vertical line */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
                <div className="w-4 h-4 rounded-full bg-bali-red border-4 border-bali-dark shadow-[0_0_15px_rgba(138,46,34,0.5)]" />
            </div>

            <div className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 px-6 md:px-12 mb-6 md:mb-0">
                    <div className={`flex flex-col ${isEven ? 'md:text-right md:items-end' : 'md:text-left md:items-start'} text-center items-center`}>
                        <span className="text-6xl font-serif text-bali-red/20 font-bold -mb-8 z-0">{event.year}</span>
                        <h3 className="text-2xl font-bold text-bali-sand z-10 relative">{event.title}</h3>
                        <p className="text-gray-400 mt-2 z-10 relative max-w-md">{event.desc}</p>
                    </div>
                </div>

                <div className="w-full md:w-1/2 px-6" /> {/* Spacer */}
            </div>
        </motion.div>
    );
}
