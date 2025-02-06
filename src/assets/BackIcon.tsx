export const BackIcon = ({ color = "black", width = 18, height = 14 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 7H1M1 7L7 13M1 7L7 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
