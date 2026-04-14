import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import PageLoadWrapper from "@/components/PageLoadWrapper";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

import AboutEducation from "@/components/AboutEducation";

export default function Home() {
  return (
    <SmoothScroll>
      <PageLoadWrapper>
        <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
          <Hero />
          <AboutEducation />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </PageLoadWrapper>
    </SmoothScroll>
  );
}
