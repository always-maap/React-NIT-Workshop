export default function Logo() {
  return (
    <svg viewBox="0 0 35 35" width={35} height={35}>
      <rect width="35" height="35" strokeWidth={4} stroke="white" fill="none" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        style={{ fontSize: 20 }}
      >
        N
      </text>
    </svg>
  );
}
