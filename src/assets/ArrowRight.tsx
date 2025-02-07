export const ArrowRight = ({ width = 16, height = 28, color = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 27L15 14L1 1" stroke={color} strokeLinecap="square" />
    </svg>
  );
};
