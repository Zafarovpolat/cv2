import Achievements from "@/components/landing/achievements";
import Contact from "@/components/landing/contact";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import Navigation from "@/components/landing/navigation";
import Projects from "@/components/landing/projects";
import { Separator } from "@/components/ui/separator";
import About from "@/components/landing/about";
import Skills from "@/components/landing/skills";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <About />
        <div className="container mx-auto px-4 md:px-6">
          <Separator className="my-12 md:my-24 bg-border/20" />
          <Skills />
          <Separator className="my-12 md:my-24 bg-border/20" />
          <Projects />
          <Separator className="my-12 md:my-24 bg-border/20" />
          <Achievements />
          <Separator className="my-12 md:my-24 bg-border/20" />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
