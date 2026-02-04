import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";
import { LaunchingSection } from "@/components/LaunchingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* Header Overlay */}
      <div className="fixed top-0 left-0 w-full z-50 pointer-events-auto">
        <Header />
      </div>

      {/* Page Content */}
      <div >
        <HeroSection />
        <LaunchingSection />
        <Footer />
      </div>

    </main>
  );
}
