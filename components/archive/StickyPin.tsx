// import { motion, useScroll, useTransform } from "framer-motion";
// import React from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import ScrollTrigger from "gsap-trial/ScrollTrigger";

// const StickyPin = () => {
//   const container = React.useRef<HTMLDivElement | null>(null);
//   const contentContainer = React.useRef<HTMLDivElement | null>(null);

//   let offset = 0;
//   if (
//     container.current?.offsetHeight &&
//     contentContainer.current?.offsetHeight
//   ) {
//     offset =
//       container.current.offsetHeight -
//       contentContainer.current.offsetHeight +
//       300;
//   }

//   const { scrollYProgress } = useScroll({
//     target: contentContainer,
//     offset: ["start 85px", `end ${offset}px`],
//   });
//   const translateY = useTransform(scrollYProgress, [0, 1], [0, 1]);

//   React.useLayoutEffect(() => {
//     let offset = 0;
//     if (
//       container.current?.offsetHeight &&
//       contentContainer.current?.offsetHeight
//     ) {
//       offset =
//         container.current.offsetHeight -
//         contentContainer.current.offsetHeight +
//         300;
//     }

//     // end: bottom center, means when the bottom of the end trigger hits the center of the scroller.
//     let ctx = gsap.context(() => {
//       gsap.registerPlugin(ScrollTrigger);
//       ScrollTrigger.create({
//         trigger: contentContainer.current,
//         start: "top 84px",
//         end: () => `bottom ${offset}px`,
//         pin: true,
//       });
//     });
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       id="experience"
//       className="grid items-center w-full mx-auto justify-center gap-8 h-full py-48 bg-primaryColor"
//     >
//       <h2 className="text-right text-9xl text-textColor font-normal ">
//         experiences
//       </h2>

//       <div ref={container} className="flex gap-24 w-full">
//         <motion.div
//           style={{ translateY }}
//           ref={contentContainer}
//           className="flex flex-col gap-8 max-w-md relative h-fit"
//         >
//           <Image
//             src="/projects/ml_rl.svg"
//             alt="Alt text"
//             width={500}
//             height={500}
//             priority
//             className="object-cover rounded-lg"
//           />
//           <div>
//             <h3 className="text-5xl font-semibold mb-2">"Title"</h3>
//             <span className="text-3xl w-full break-words">"Content"</span>
//           </div>
//         </motion.div>

//         <div className="flex flex-col gap-16 relative mt-24 h-full">
//           <div className="w-full text-white flex justify-end uppercase text-6xl border-b-white border-b-[1px]">
//             <h2
//               className={`m-0 text-8xl cursor-pointer w-fit mb-[1.25rem] transition-all duration-200 ease-out`}
//             >
//               "TEST"
//             </h2>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StickyPin;
