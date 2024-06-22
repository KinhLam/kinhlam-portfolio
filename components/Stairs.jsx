import { motion } from "framer-motion";

// Hiển thị phần chuyển động Animation 
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Tính chỉ số ngược cho độ trễ so le
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Hiển thị 6 div chuyển động, mỗi div tương ứng với một bậc thang. Mỗi div sẽ có cùng một hoạt ảnh được xác định bởi đối tượng ladderAnimation. Độ trễ cho mỗi div được tính toán một cách hình học dựa trên chỉ số đảo ngược của nó, tạo ra hiệu ứng so le với độ trễ giảm dần cho mỗi bước tiếp theo. */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
