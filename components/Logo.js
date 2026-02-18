export default function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="url(#logoGrad)" />
      <path
        d="M10 22V10h6.5c1.3 0 2.3.4 3 1.1.7.7 1 1.6 1 2.6 0 .8-.2 1.4-.6 2-.4.5-.9.9-1.6 1.1.8.2 1.4.6 1.9 1.2.5.6.7 1.3.7 2.2 0 1.1-.4 2-1.1 2.7-.7.7-1.8 1-3.1 1H10zm3-7h3c.6 0 1-.2 1.4-.5.3-.3.5-.8.5-1.3s-.2-1-.5-1.3-.8-.5-1.4-.5h-3v3.6zm0 4.7h3.3c.6 0 1.1-.2 1.5-.5.4-.4.5-.8.5-1.4s-.2-1-.5-1.3-.9-.5-1.5-.5H13v3.7z"
        fill="#fff"
      />
      <defs>
        <linearGradient id="logoGrad" x1="0" y1="0" x2="32" y2="32">
          <stop stopColor="#34d399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
      </defs>
    </svg>
  );
}
