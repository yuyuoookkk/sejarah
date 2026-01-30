"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(
    () => import("react-leaflet").then((mod) => mod.MapContainer),
    { ssr: false }
);
const TileLayer = dynamic(
    () => import("react-leaflet").then((mod) => mod.TileLayer),
    { ssr: false }
);
const Marker = dynamic(
    () => import("react-leaflet").then((mod) => mod.Marker),
    { ssr: false }
);
const Popup = dynamic(
    () => import("react-leaflet").then((mod) => mod.Popup),
    { ssr: false }
);

// Historical locations in Bali with real coordinates
const locations = [
    {
        id: 1,
        lat: -8.6569,
        lng: 115.2156,
        name: "Puputan Badung (1906)",
        desc: "Lapangan Puputan Badung, Denpasar - Lokasi heroik perlawanan Raja Pemecutan melawan Belanda"
    },
    {
        id: 2,
        lat: -8.1447,
        lng: 115.0858,
        name: "Perang Jagaraga (1849)",
        desc: "Benteng Jagaraga, Buleleng - Pertempuran besar melawan kolonial Belanda"
    },
    {
        id: 3,
        lat: -8.5323,
        lng: 115.4048,
        name: "Puputan Klungkung (1908)",
        desc: "Semarapura, Klungkung - Pertempuran terakhir kerajaan Bali melawan Belanda"
    },
    {
        id: 4,
        lat: -8.4428,
        lng: 115.1256,
        name: "Puputan Margarana (1946)",
        desc: "Marga, Tabanan - Pertempuran I Gusti Ngurah Rai melawan tentara Belanda"
    }
];

// Bali center coordinates
const BALI_CENTER: [number, number] = [-8.4095, 115.1889];
const BALI_ZOOM = 9;

export default function InteractiveMap() {
    const [activeInfo, setActiveInfo] = useState<number | null>(null);
    const [isClient, setIsClient] = useState(false);
    const [customIcon, setCustomIcon] = useState<any>(null);

    useEffect(() => {
        setIsClient(true);
        // Import Leaflet CSS and create custom icon on client side
        import("leaflet/dist/leaflet.css");
        import("leaflet").then((L) => {
            const icon = new L.Icon({
                iconUrl: "data:image/svg+xml;base64," + btoa(`
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                        <defs>
                            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.5"/>
                            </filter>
                        </defs>
                        <circle cx="12" cy="12" r="10" fill="#8A2E22" filter="url(#shadow)"/>
                        <circle cx="12" cy="12" r="5" fill="#D4AF37"/>
                    </svg>
                `),
                iconSize: [32, 32],
                iconAnchor: [16, 16],
                popupAnchor: [0, -16],
            });
            setCustomIcon(icon);
        });
    }, []);

    return (
        <section className="py-12 bg-[#0a0a09] overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl">
                <div className="order-2 lg:order-1 relative w-full h-[300px] lg:h-auto lg:aspect-video max-w-md max-h-[350px] bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl mx-auto lg:mx-0">
                    {isClient && customIcon ? (
                        <MapContainer
                            center={BALI_CENTER}
                            zoom={BALI_ZOOM}
                            scrollWheelZoom={true}
                            style={{ height: "100%", width: "100%", borderRadius: "0.75rem" }}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            {locations.map((loc) => (
                                <Marker
                                    key={loc.id}
                                    position={[loc.lat, loc.lng]}
                                    icon={customIcon}
                                    eventHandlers={{
                                        click: () => setActiveInfo(loc.id),
                                        mouseover: () => setActiveInfo(loc.id),
                                    }}
                                >
                                    <Popup>
                                        <div className="text-black">
                                            <strong>{loc.name}</strong>
                                            <br />
                                            <span className="text-sm">{loc.desc}</span>
                                        </div>
                                    </Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-pulse text-gray-500">Memuat peta...</div>
                        </div>
                    )}
                </div>

                <div className="order-1 lg:order-2 flex flex-col justify-center">
                    <h2 className="text-4xl font-serif text-bali-gold mb-6">Lokasi Bersejarah</h2>
                    <div className="h-[2px] w-16 bg-bali-red mb-6" />

                    <div className="min-h-[120px]">
                        {activeInfo ? (
                            <motion.div
                                key={activeInfo}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-zinc-900/50 p-8 rounded-lg border-l-2 border-bali-red"
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">{locations.find(l => l.id === activeInfo)?.name}</h3>
                                <p className="text-gray-400">{locations.find(l => l.id === activeInfo)?.desc}</p>
                            </motion.div>
                        ) : (
                            <p className="text-gray-500 text-lg italic">
                                Klik pada penanda merah di peta untuk melihat detail lokasi-lokasi penting pertempuran Puputan di seluruh Bali.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
