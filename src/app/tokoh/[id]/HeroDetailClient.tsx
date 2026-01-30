"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Sword, Calendar } from "lucide-react";
import { Figure } from "@/data/figures";

export default function HeroDetailClient({ figure }: { figure: Figure }) {
    return (
        <main className="min-h-screen bg-bali-dark text-bali-sand">
            {/* Hero Banner */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center scale-110"
                        style={{ backgroundImage: `url(${figure.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-bali-dark" />
                </div>

                {/* Back Button */}
                <Link
                    href="/#tokoh"
                    className="absolute top-8 left-8 z-20 flex items-center gap-2 text-bali-sand/70 hover:text-bali-gold transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span>Kembali</span>
                </Link>

                {/* Hero Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-bali-gold text-sm tracking-widest uppercase mb-4 block">
                            {figure.role}
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4">
                            {figure.name}
                        </h1>
                        <div className="flex items-center gap-6 text-gray-400">
                            <span className="flex items-center gap-2">
                                <Calendar size={16} />
                                {figure.era}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 px-8 md:px-16 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    {/* Bio */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-serif text-bali-gold mb-6">Biografi</h2>
                        <div className="prose prose-invert prose-lg max-w-none">
                            {figure.fullBio.split('\n\n').map((paragraph, idx) => (
                                <p key={idx} className="text-gray-300 leading-relaxed mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Battles */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-serif text-bali-gold mb-6 flex items-center gap-3">
                            <Sword size={24} />
                            Pertempuran
                        </h2>
                        <div className="grid gap-4">
                            {figure.battles.map((battle, idx) => (
                                <div
                                    key={idx}
                                    className="bg-zinc-900/50 border border-bali-gold/20 rounded-lg p-4 flex items-center gap-4"
                                >
                                    <div className="w-2 h-2 rounded-full bg-bali-red" />
                                    <span className="text-gray-300">{battle}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Back Link */}
                    <div className="pt-8 border-t border-white/10">
                        <Link
                            href="/#tokoh"
                            className="inline-flex items-center gap-2 text-bali-gold hover:text-white transition-colors"
                        >
                            <ArrowLeft size={18} />
                            Kembali ke Tokoh Pahlawan
                        </Link>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
