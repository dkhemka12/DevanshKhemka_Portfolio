const Logo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="60"
        fontWeight="500"
        fill="white"
        fontFamily="Poppins, sans-serif"
        letterSpacing="-3"
      >
        DK
      </text>
    </svg>
  );
};

export default Logo;