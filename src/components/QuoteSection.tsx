"use client";
import React from "react";
import { motion } from "framer-motion";

const quote = "Lebih baik hancur lebur daripada tidak merdeka sama sekali.";
const author = "I Gusti Ngurah Rai";

export default function QuoteSection() {
    const words = quote.split(" ");

    return (
        <section className="py-32 bg-bali-dark relative flex items-center justify-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-bali-gold via-transparent to-transparent" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight font-medium max-w-4xl mx-auto">
                    {words.map((word, i) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="inline-block mr-3"
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-8 flex items-center justify-center gap-4"
                >
                    <div className="h-[1px] w-12 bg-bali-gold" />
                    <p className="text-bali-gold uppercase tracking-widest text-sm">{author}</p>
                    <div className="h-[1px] w-12 bg-bali-gold" />
                </motion.div>
            </div>
        </section>
    );
}
