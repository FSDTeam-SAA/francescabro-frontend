import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Hero";
import { LaunchingSection } from "@/components/LaunchingSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header/>
      <HeroSection />
      <LaunchingSection/>
      <Footer/>
    </main>
  )
}
