import { SVGProps } from 'react';

export const VisaIcon = ({
  width = 44,
  height = 30,
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <circle cx={15} cy={15} r={15} fill="currentColor" fillOpacity={0.5} />
    <circle cx={29} cy={15} r={15} fill="currentColor" fillOpacity={0.5} />
  </svg>
);
