import { SVGProps } from 'react';

export const SendIcon = ({
  width = 26,
  height = 23,
  color = '#fff',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill={color}
      d="M25.982.923a.762.762 0 0 0-1.016-.872L.49 9.395a.762.762 0 0 0-.003 1.422l6.876 2.656v8.364a.762.762 0 0 0 1.442.343l2.844-5.644 6.94 5.15a.762.762 0 0 0 1.182-.389C26.251.053 25.971.977 25.982.923ZM19.94 3.6 8.017 12.092l-5.13-1.981L19.94 3.6ZM8.887 13.343 19.28 5.94c-8.943 9.435-8.476 8.938-8.515 8.99-.058.079.1-.225-1.878 3.702v-5.29Zm9.742 6.477-6.108-4.534L23.566 3.634 18.629 19.82Z"
    />
  </svg>
);
