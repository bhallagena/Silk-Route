import {motion, useAnimation, useInView} from "motion/react"
import { useEffect, useRef } from "react";

type props = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  };
  
  export default function Slide({ children, delay, className }: props) {
    const ref = useRef(null);
    const isInview = useInView(ref, { once: true });
    const controls = useAnimation();
  
    useEffect(() => {
      if (isInview) {
        controls.start("visible");
      }
    }, [isInview]);
  
    return (
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, translateY: 10 },
          visible: { opacity: 1, translateY: 0 },
        }}
        transition={{
          type: "spring",
          duration: 0.5,
          damping: 7,
          delay: delay ,
          stiffness: 69,
        }}
        initial="hidden"
        animate={controls}
        className={className}
      >
        {children}
      </motion.div>
    );
  }