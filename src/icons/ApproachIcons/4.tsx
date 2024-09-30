import { SVGProps, FC } from 'react';

export const Fourth: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="49" className='w-[3vw] h-[3vw] md:w-[4vw] md:h-[4vw]' viewBox="0 0 48 49" {...props}>
    <path
      d="M14.638 10.6988C14.9953 10.08 15.6556 9.69879 16.3701 9.69879L31.6299 9.69879C32.3444 9.69879 33.0047 10.08 33.362 10.6988L40.9919 23.9142C41.3491 24.533 41.3491 25.2954 40.9919 25.9142L33.362 39.1296C33.0047 39.7484 32.3444 40.1296 31.6299 40.1296L16.3701 40.1296C15.6556 40.1296 14.9953 39.7484 14.638 39.1296L7.00813 25.9142C6.65086 25.2954 6.65086 24.533 7.00813 23.9142L14.638 10.6988Z"
      fill="#E6E0E9"
    />
  </svg>
);
