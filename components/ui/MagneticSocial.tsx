import React from "react";
import { motion } from "framer-motion";

/**
 * This component creates a magnetic effect between the user's mouse and the child elements.
 * As the user moves their mouse, the child elements are attracted toward the cursor, giving a magnetic feel.
 * @param {React.ReactNode} children - Any child element to be wrapped in the magnetic layer. The magnetic effect will apply to this child element.
 * @returns {React.ReactElement} The child elements wrapped with a magnetic effect, utilizing `framer-motion` for animation.
 * @author Ameer Ghazal
 */
const MagneticSocial = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = React.useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  /**
   * Handles the mouse move event by calculating the position of the cursor relative to the center of the child element.
   * Updates the state with the new x and y positions.
   * @param {MouseEvent} e - The mouse event object containing clientX and clientY coordinates.
   */
  const mouseMove = (e: { clientX: number; clientY: number }): void => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current!.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  /**
   * Handles the mouse leave event by resetting the position to the origin (0, 0).
   */
  const mouseLeave = (): void => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default MagneticSocial;
