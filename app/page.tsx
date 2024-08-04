"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Activities from "@/components/main/Activites";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Lifestyle from "@/components/main/Lifestyle";
import Projects from "@/components/main/Projects";
import Splash from "@/components/main/Splash";
import React from "react";
import { motion, useScroll } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Lenis from "lenis";
import Gallery from "@/components/main/Gallery";

export default function Home(): JSX.Element {
  const [showMenu, setShowMenu] = React.useState<boolean>(true);
  const [dimension, setDimension] = React.useState({ width: 0, height: 0 });

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

  // Old transitions.
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const transition = { duration: 0.5, ease: "easeInOut" };

  // Hero to Lifestyle scroll parallax.
  const lifestyle = React.useRef(null);
  const { scrollYProgress: lifestyleScroll } = useScroll({
    target: lifestyle,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {/* <Splash showMenu={showMenu} setShowMenu={setShowMenu} /> */}
      {showMenu && (
        <>
          <Header />
          <main className="flex min-h-screen flex-col bg-white">
            <div ref={lifestyle} className="relative h-[200vh]">
              <motion.div className="sticky top-0 h-screen bg-black">
                <Hero scrollYProgress={lifestyleScroll} />
              </motion.div>

              <motion.div className="relative h-screen mt-20 bg-primaryColor rounded-tl-[1.5rem] rounded-tr-[1.5rem]">
                <Lifestyle scrollYProgress={lifestyleScroll} />
              </motion.div>
            </div>

            <div className="bg-primaryColor">
              <Experience />
            </div>
            <div className="bg-primaryColor">
              <Activities />
            </div>
            <div className="bg-primaryColor">
              <Projects />
            </div>
            <div className="bg-primaryColor">
              <Gallery width={dimension.width} height={dimension.height} />
            </div>
          </main>
          <div className="bg-primaryColor">
            <Footer />
          </div>
        </>
      )}
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
