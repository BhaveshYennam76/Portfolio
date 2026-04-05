import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import PageLoadWrapper from "@/components/PageLoadWrapper";
import SmoothScroll from "@/components/SmoothScroll";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <PageLoadWrapper>
        <main className="bg-[#0a0a0a] min-h-screen">
          <ScrollyCanvas />
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
