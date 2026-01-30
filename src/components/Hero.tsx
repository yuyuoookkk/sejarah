"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const bgRef = useRef(null);
    const scrollIndicatorRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Background continuous floating/zoom effect
            gsap.fromTo(bgRef.current,
                { scale: 1.0 },
                {
                    scale: 1.1,
                    duration: 20,
                    ease: "none",
                    repeat: -1,
                    yoyo: true
                }
            );

            // Initial text reveal (plays once on load)
            const tl = gsap.timeline();
            tl.fromTo(textRef.current,
                { opacity: 0, y: 100 },
                { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.3 }
            );

            // Parallax scroll effect - uses fromTo so it knows the "base" state
            gsap.fromTo(textRef.current,
                { y: 0, opacity: 1 },  // Start state (when at top)
                {
                    y: 300,
                    opacity: 0,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: 0.5
                    }
                }
            );

            // Scroll Indicator Animations
            if (scrollIndicatorRef.current) {
                // 1. Fade in sequence
                gsap.to(scrollIndicatorRef.current, {
                    opacity: 0.8,
                    duration: 1.5,
                    delay: 2.5,
                    ease: "power2.out"
                });

                // 2. Loop animation (floating)
                gsap.fromTo(scrollIndicatorRef.current,
                    { y: 0 },
                    {
                        y: 10,
                        duration: 1.5,
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut"
                    }
                );

                // 3. Fade out on scroll
                gsap.to(scrollIndicatorRef.current, {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "10% top",
                        scrub: true
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="beranda" ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-bali-dark">
            {/* Background */}
            <div ref={bgRef} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-bali-dark z-10" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555400038-63f5ba517a97?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-60 grayscale-[0.3] sepia-[0.2]" />
            </div>

            {/* Content */}
            <div ref={textRef} className="relative z-20 text-center px-4 max-w-6xl mx-auto">
                <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold text-bali-gold mb-8 drop-shadow-2xl tracking-tight leading-none">
                    PERANG PUPUTAN
                </h1>
                <div className="h-[1px] w-24 bg-bali-red mx-auto mb-8" />
                <p className="text-lg md:text-3xl text-gray-200 font-light tracking-[0.2em] uppercase">
                    Semangat yang Tidak Padam
                </p>
            </div>

            {/* Scroll Indicator */}
            <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 opacity-0">
                <span className="text-[10px] md:text-xs tracking-[0.2em] text-bali-sand/60 uppercase font-light">Scroll</span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-bali-red to-transparent"></div>
            </div>
        </section>
    );
}
