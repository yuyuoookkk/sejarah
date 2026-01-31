import React from "react";
import { Send, MapPin, Mail, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050505] text-bali-sand border-t border-bali-gold/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-serif font-bold text-bali-gold mb-6">PUPUTAN.</h2>
                        <p className="max-w-md text-gray-500 font-light leading-relaxed">
                            Website edukasi sejarah untuk mengenang semangat perjuangan rakyat Bali dalam mempertahankan tanah air. Dihormati dengan darah, dikenang dengan bangga.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Navigasi</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#beranda" className="hover:text-bali-gold transition-colors">Beranda</a></li>
                            <li><a href="#sejarah" className="hover:text-bali-gold transition-colors">Timeline</a></li>
                            <li><a href="#tokoh" className="hover:text-bali-gold transition-colors">Tokoh-Tokoh</a></li>
                            <li><a href="#galeri" className="hover:text-bali-gold transition-colors">Peninggalan-Peninggalan</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Kontak</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3"><MapPin size={18} /> Denpasar, Bali</li>
                            <li className="flex items-center gap-3"><a href="https://www.instagram.com/bryanmarius_?igsh=YTN4N3cyMXBjc3Ru"className="flex items-center gap-3"><Instagram size={18} />@bryanmarius_</a></li>
                            <li className="flex items-center gap-3"><a href="https://www.instagram.com/rew.blend?igsh=MW94OXlkN2lnOGlyaw=="className="flex items-center gap-3"><Instagram size={18} />@rew.blend</a></li>
                            <li className="flex items-center gap-3"><a href="https://www.instagram.com/dhodo.jpg?igsh=MTkyN2hpZnRjaWhyNQ=="className="flex items-center gap-3"><Instagram size={18} />@dhodo.jpg</a></li>
                            <li className="flex items-center gap-3"><a href="https://www.instagram.com/yukipande__?igsh=MTlkN2QxdWZzcXE0Ng=="className="flex items-center gap-3"><Instagram size={18} />@yukipande__</a></li>
                        </ul>
                    </div>
                </div>

                {/* Ornament & Copyright */}
                <div className="flex flex-col items-center justify-center pt-10 border-t border-white/5 space-y-6">
                    {/* Simple CSS simulated pattern */}
                    <div className="flex items-center gap-2 opacity-30">
                        <div className="w-16 h-[1px] bg-bali-gold" />
                        <div className="w-3 h-3 rotate-45 border border-bali-gold" />
                        <div className="w-16 h-[1px] bg-bali-gold" />
                    </div>

                    <p className="text-xs text-gray-600 tracking-widest uppercase">
                        © {new Date().getFullYear()} Sejarah Bali. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
