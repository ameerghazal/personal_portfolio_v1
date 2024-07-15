"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Activities from "@/components/main/Activites";
import Experience from "@/components/main/Experience";
import Hero from "@/components/main/Hero";
import Lifestyle from "@/components/main/Lifestyle";
import Projects from "@/components/main/Projects";
import Splash from "@/components/main/Splash";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

export default function Home(): JSX.Element {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = { duration: 0.5, ease: "easeInOut" };
  return (
    <>
      <Splash showMenu={showMenu} setShowMenu={setShowMenu} />
      {showMenu && (
        <>
          <Header />
          <main className="flex min-h-screen flex-col bg-[#373229] items-center">
            <div className="mx-auto px-8 items-center place-content-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={slideInFromLeft(1.5)}
              >
                <Hero />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ...transition, delay: 1.7 }}
              >
                <Lifestyle />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ...transition, delay: 1.9 }}
              >
                <Experience />
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ...transition, delay: 2.1 }}
              >
                <Activities />
              </motion.div>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants}
                transition={{ ...transition, delay: 2.3 }}
              >
                <Projects />
              </motion.div>
              {/* <Contact /> */}
            </div>
          </main>
          <Footer />
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
