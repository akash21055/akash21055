import React from "react";

interface ZodiacIconProps {
  sign: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-20 h-20",
  xl: "w-24 h-24",
};

export default function ZodiacIcon({
  sign,
  size = "md",
  className = "",
}: ZodiacIconProps) {
  const signLower = sign.toLowerCase();

  const icons: Record<string, React.ReactNode> = {
    aries: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <path
          d="M50 20 L35 70 M50 20 L65 70 M35 45 L65 45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    ),
    taurus: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <path
          d="M30 40 L40 25 L50 30 L60 25 L70 40"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M35 45 Q50 65 65 45"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </svg>
    ),
    gemini: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <rect x="25" y="30" width="15" height="35" stroke="currentColor" strokeWidth="2.5" rx="2" />
        <rect x="60" y="30" width="15" height="35" stroke="currentColor" strokeWidth="2.5" rx="2" />
        <line x1="40" y1="25" x2="40" y2="20" stroke="currentColor" strokeWidth="2" />
        <line x1="75" y1="25" x2="75" y2="20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    cancer: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <circle cx="35" cy="40" r="8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="65" cy="40" r="8" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M35 50 Q50 65 65 50"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>
    ),
    leo: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="18" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="28" x2="50" y2="15" stroke="currentColor" strokeWidth="2.5" />
        <line x1="63" y1="32" x2="72" y2="22" stroke="currentColor" strokeWidth="2.5" />
        <line x1="68" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2.5" />
        <line x1="63" y1="68" x2="72" y2="78" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
    virgo: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <path
          d="M50 25 L50 75 M30 35 L70 65 M70 35 L30 65"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="50" cy="50" r="4" fill="currentColor" />
      </svg>
    ),
    libra: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <line x1="50" y1="25" x2="50" y2="42" stroke="currentColor" strokeWidth="2.5" />
        <rect x="30" y="42" width="40" height="3" fill="currentColor" />
        <rect x="25" y="48" width="15" height="25" stroke="currentColor" strokeWidth="2.5" />
        <rect x="60" y="48" width="15" height="25" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
    scorpio: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <path
          d="M50 30 L50 55 M30 55 L40 55 L40 70 L50 75 L60 70 L60 55 L70 55"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="50" cy="75" r="3" fill="currentColor" />
      </svg>
    ),
    sagittarius: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <line x1="30" y1="70" x2="65" y2="30" stroke="currentColor" strokeWidth="2.5" />
        <polygon points="65,30 60,40 68,38" fill="currentColor" />
        <circle cx="30" cy="70" r="3" fill="currentColor" />
      </svg>
    ),
    capricorn: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <path
          d="M50 30 L50 50 Q35 60 40 75 Q50 80 60 75 Q65 60 50 50"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
    aquarius: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <line x1="30" y1="35" x2="70" y2="35" stroke="currentColor" strokeWidth="2.5" />
        <line x1="30" y1="50" x2="70" y2="50" stroke="currentColor" strokeWidth="2.5" />
        <line x1="30" y1="65" x2="70" y2="65" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="35" cy="35" r="2" fill="currentColor" />
        <circle cx="65" cy="35" r="2" fill="currentColor" />
        <circle cx="35" cy="50" r="2" fill="currentColor" />
        <circle cx="65" cy="50" r="2" fill="currentColor" />
      </svg>
    ),
    pisces: (
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        <path
          d="M35 40 Q35 50 50 50 Q65 50 65 40"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M35 60 Q35 70 50 70 Q65 70 65 60"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
        />
        <line x1="50" y1="50" x2="50" y2="60" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  };

  return (
    <div className={`${sizeMap[size]} text-current`}>
      {icons[signLower] || icons.aries}
    </div>
  );
}
