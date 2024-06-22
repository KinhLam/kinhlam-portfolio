"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Components
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          {/* Thành phần tạo hoạt ảnh Animation bằng frame-motion */}
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>


          {/* Thành phần này được thiết kế để tạo hiệu ứng hoạt hình cho lớp phủ toàn màn hình */}
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {
                delay: 1,
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
