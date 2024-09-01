import { motion } from 'framer-motion';
import { slide, scale } from '@/shared/utils/animations';

import { FC } from 'react';

interface Props {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
  handleClick: () => void;
}

const Index: FC<Props> = ({ data, isActive, setSelectedIndicator, handleClick }) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={handleClick}
    >
      <motion.div
        className="absolute -left-0 inline-block h-[0.6vw] w-[0.6vw] rounded-full bg-white"
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
      ></motion.div>
      <div className="cursor-pointer text-[2.5vw] leading-[1.35] uppercase font-semibold tracking-normal duration-300 transition-[cubic-bezier(.16,1,.3,1)] hover:translate-x-[1.6vw]">
        {title}
      </div>
    </motion.div>
  );
};
export default Index;
