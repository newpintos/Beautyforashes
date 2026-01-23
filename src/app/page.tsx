
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/profile/Hero";
import { About } from "@/components/profile/About";
import { Approach } from "@/components/profile/Approach";
import { Qualifications } from "@/components/profile/Qualifications";
import { Expertise } from "@/components/profile/Expertise";
import { Therapies } from "@/components/profile/Therapies";
import { Fees } from "@/components/profile/Fees";
import { Availability } from "@/components/profile/Availability";
import { VisualBreak } from "@/components/profile/VisualBreak";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Approach />
        <Qualifications />
        <Expertise />
        <Therapies />
        <Fees />
        <Availability />
        <VisualBreak />
      </main>
      <Footer />
    </div>
  );
}
