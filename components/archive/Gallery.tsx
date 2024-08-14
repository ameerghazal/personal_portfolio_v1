// import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
// import React from "react";
// import Image from "next/image";
// import { pictures as images } from "@/data";
// import { IPicture } from "@/data/interface";

// const Gallery = (dimension: { width: number; height: number }) => {
//   const container = React.useRef(null);

//   // Track progression of the scroll. Start of the window, end of the target. Ends at the end of target, start of window.
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start end", "end start"],
//   });
//   const { height } = dimension;
//   const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
//   const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
//   const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
//   const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);

//   return (
//     <section id="gallery" className="flex flex-col gap-20 bg-primaryColor">
//       <h2 className="text-left 2xl:text-9xl xl:text-7xl text-textColor font-medium px-[5rem]">
//         gallery
//       </h2>
//       <div ref={container} className="h-[175vh] overflow-hidden">
//         <div className="relative top-[-12.5vh] h-[200vh] flex gap-[0.5rem]">
//           <Column
//             style={"top-[-25%]"}
//             images={[images[0], images[1], images[2]]}
//             y={y}
//           />
//           <Column
//             style={"top-[-60%]"}
//             images={[images[3], images[4], images[5]]}
//             y={y2}
//           />
//           <Column
//             style={"top-[-40%]"}
//             images={[images[6], images[7], images[8]]}
//             y={y3}
//           />
//           <Column
//             style={"top-[-95%]"}
//             images={[images[9], images[10], images[11]]}
//             y={y4}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// const Column = ({
//   images,
//   y,
//   style,
// }: {
//   images: IPicture[];
//   y: MotionValue<number>;
//   style: string;
// }) => {
//   return (
//     <motion.div
//       className={`relative h-full w-1/4 min-w-[250px] flex flex-col gap-[0.5rem] whitespace-nowrap ${style}`}
//       style={{ y }}
//     >
//       {images.map((image: IPicture, index: number) => (
//         <div
//           key={index}
//           className="relative h-1/3 w-full rounded-lg overflow-hidden"
//         >
//           <Image
//             src={image.src}
//             alt={image.alt}
//             fill
//             className="object-cover"
//           />
//         </div>
//       ))}
//     </motion.div>
//   );
// };

// export default Gallery;
