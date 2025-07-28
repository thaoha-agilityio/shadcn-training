import { SVGProps } from 'react';

export const ArrowIcon = ({
  height = 20,
  width = 20,
  color = '#718EBF',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg width={height} height={width} fill="none" {...props}>
    <path
      fill={color}
      fillRule="evenodd"
      d="M10 1.333a8.667 8.667 0 1 0 0 17.334 8.667 8.667 0 0 0 0-17.334ZM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0Z"
      clipRule="evenodd"
    />
    <path
      fill={color}
      fillRule="evenodd"
      d="m6.465 8.828 3.181-3.182a.5.5 0 0 1 .708 0l3.182 3.182a.5.5 0 0 1-.707.707L10.5 7.207V13h-1V7.207L7.172 9.535a.5.5 0 0 1-.707-.707Z"
      clipRule="evenodd"
    />
  </svg>
);
