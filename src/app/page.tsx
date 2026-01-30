import Hero from "@/components/Hero";
import HistorySection from "@/components/HistorySection";
import Figures from "@/components/Figures";
import ArtifactGallery from "@/components/ArtifactGallery";
import QuoteSection from "@/components/QuoteSection";
import InteractiveMap from "@/components/InteractiveMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bali-dark selection:bg-bali-red selection:text-white">
      <Hero />
      <HistorySection />
      <QuoteSection />
      <Figures />
      <InteractiveMap />
      <ArtifactGallery />
      <Footer />
    </main>
  );
}

