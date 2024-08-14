"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Activities from "@/components/main/Activites";
import Experience from "@/components/main/Experiences";
import Hero from "@/components/main/Hero";
import Lifestyle from "@/components/main/Lifestyle";
import Projects from "@/components/main/Projects";
import React from "react";
import { motion, useScroll } from "framer-motion";
import Lenis from "lenis";

export default function Home(): JSX.Element {
  const [_dimension, setDimension] = React.useState({ width: 0, height: 0 });

  // Smooth scrolling.
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const container = React.useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col bg-primaryColor">
        <div ref={container} className="relative h-fit">
          <motion.div className="sticky top-0 h-screen bg-primaryColor ">
            <Hero scrollYProgress={scrollYProgress} />
          </motion.div>

          <motion.div className="relative lg:h-screen h-fit rounded-tl-[1.5rem] rounded-tr-[1.5rem] bg-primaryColor">
            <Lifestyle scrollYProgress={scrollYProgress} />
          </motion.div>
        </div>
        <Experience />
        <Activities />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
// 373229 #372113
// BFb1c1 purple accent
// OG gray: 242526
// OG Brown:#55423d
// nice gree: #708D81
// green: #709176
// Green: rgb(63, 76, 50)
