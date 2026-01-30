import { figures } from "@/data/figures";
import { notFound } from "next/navigation";
import HeroDetailClient from "./HeroDetailClient";

// Generate static params for all figures
export function generateStaticParams() {
    return figures.map((figure) => ({
        id: figure.id,
    }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
    const figure = figures.find((f) => f.id === params.id);
    if (!figure) return { title: "Tokoh Tidak Ditemukan" };

    return {
        title: `${figure.name} - Pahlawan Puputan`,
        description: figure.desc,
    };
}

export default async function HeroDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const figure = figures.find((f) => f.id === id);

    if (!figure) {
        notFound();
    }

    return <HeroDetailClient figure={figure} />;
}
