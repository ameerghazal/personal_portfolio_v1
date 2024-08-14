// import { useInView, motion } from "framer-motion";
// import React from "react";

// const MaskText = ({ children }: { children: React.ReactElement }) => {
//   const body = React.useRef<HTMLDivElement | null>(null);
//   const isInView = useInView(body, { once: true, margin: "-50%" });

//   const animation = {
//     initial: { y: "100%" },

//     enter: (i: any) => ({
//       y: "0",
//       transition: {
//         duration: 1.0,
//         ease: [0.33, 1, 0.68, 1],
//         delay: 0.075 * i,
//       },
//     }),
//   };

//   return (
//     <div ref={body} className="flex flex-col gap-6">
//       <motion.div
//         custom={0}
//         variants={animation}
//         initial="initial"
//         animate={isInView ? "enter" : ""}
//         className="flex flex-col gap-8"
//       >
//         {children}
//       </motion.div>
//     </div>
//   );
// };

// export default MaskText;
