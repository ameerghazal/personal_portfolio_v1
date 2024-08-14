// "use client";
// import React, { Dispatch, SetStateAction, useEffect } from "react";
// import { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { customStyle } from "@/data/highlighter";

// const Splash = ({
//   showMenu,
//   setShowMenu,
// }: {
//   showMenu: boolean;
//   setShowMenu: Dispatch<SetStateAction<boolean>>;
// }) => {
//   const [typedCode, setTypedCode] = useState("");
//   const [expanded, setExpanded] = useState(false);
//   const [showBtn, setShowBtn] = useState(false);

//   const functionString = `
//   async function getAG() {
//     try {
//       const respone = await fetch("https://ameerghazal.app", {
//         method: "GET",
//       });
//     } catch (error) {
//       console.error("Cool guy, not found.");
//     }
//   };
//   `;

//   useEffect(() => {
//     setExpanded(true);
//     setTimeout(() => {
//       if (expanded) {
//         let index = 0;
//         const typingTimer = setInterval(() => {
//           setTypedCode((prev) => prev + functionString[index]);
//           index += 1;
//           if (index === functionString.length - 1) {
//             clearInterval(typingTimer);
//             setShowBtn(true);
//           }
//         }, 20); // Adjust typing speed here
//         return () => clearInterval(typingTimer);
//       }
//     }, 1000); // Delay before expanding
//   }, [expanded, functionString]);

//   return (
//     <div
//       className={`fixed h-screen w-full bg-[#1e1e1e] bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-700 ${
//         showMenu
//           ? "opacity-0 pointer-events-none"
//           : "opacity-100 pointer-events-auto"
//       } `}
//       style={{
//         visibility: showMenu ? "hidden" : "visible",
//       }}
//     >
//       <div
//         className={`flex items-center justify-center p-4 transition-all duration-300 ease-in-out ${
//           expanded ? "h-[500px] w-[670px]" : "h-[100px] w-[100px]"
//         }`}
//       >
//         <div className="w-full h-full bg-gray-900 rounded-lg shadow-lg">
//           <div className="flex items-center px-4 py-2 bg-gray-800 rounded-t-lg">
//             <div className="w-3 h-3 mr-2 bg-red-500 rounded-full"></div>
//             <div className="w-3 h-3 mr-2 bg-yellow-500 rounded-full"></div>
//             <div className="w-3 h-3 mr-2 bg-green-500 rounded-full"></div>
//           </div>
//           <div className="w-full h-full flex flex-col items-center">
//             <SyntaxHighlighter language="tsx" style={customStyle}>
//               {typedCode}
//             </SyntaxHighlighter>
//             <button
//               onClick={() => setShowMenu(true)}
//               className={`w-4/5 p-4 rounded-lg bg-gray-700 ${
//                 showBtn
//                   ? "opacity-100 pointer-events-auto"
//                   : "opacity-0 pointer-events-none"
//               }  transition-all duration-200 ease-in hover:bg-gray-600 active:bg-gray-700`}
//             >
//               <span className="text-lg">
//                 Press Me: Fetch Ameer&apos;s Website.
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Splash;
