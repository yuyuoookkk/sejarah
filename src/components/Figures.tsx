"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { figures } from "@/data/figures";

export default function Figures() {
    return (
        <section id="tokoh" className="py-24 bg-[#120f0d]">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-bali-sand">Tokoh Pahlawan</h2>
                    <p className="text-gray-500 mt-4">Jiwa-jiwa pemberani yang mengukir sejarah.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {figures.map((figure, idx) => (
                        <FigureCard key={figure.id} figure={figure} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FigureCard({ figure, index }: { figure: typeof figures[0], index: number }) {
    return (
        <Link href={`/tokoh/${figure.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="group relative overflow-hidden rounded-sm border border-bali-gold/20 hover:border-bali-gold/60 transition-colors duration-500 cursor-pointer"
            >
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${figure.image})` }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent group-hover:from-bali-red/80 transition-all duration-500" />
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-bali-gold text-xs tracking-widest uppercase mb-2 block">{figure.role}</span>
                    <h3 className="text-2xl font-serif text-white mb-2">{figure.name}</h3>
                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {figure.desc}
                    </p>
                    <span className="inline-block mt-4 text-bali-gold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        Lihat Detail →
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}
