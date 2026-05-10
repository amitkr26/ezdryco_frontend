interface LogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  textColor?: string;
  iconOnly?: boolean;
}

export function EZDRYLogo({
  size = 36,
  className = "",
  showText = true,
  textColor = "text-gray-900",
  iconOnly = false,
}: LogoProps) {
  const brandName = import.meta.env.VITE_BRAND_NAME || "EZDRY";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/ezdry-logo.svg"
        alt={`${brandName} logo`}
        style={{ width: size, height: size }}
        className="object-contain"
      />

      {!iconOnly && showText && (
        <div>
          <span className={`font-extrabold text-lg leading-none ${textColor}`}>{brandName}</span>
          <p className="text-indigo-600 text-[9px] font-semibold leading-none tracking-wide">CLOTH SPA</p>
        </div>
      )}
    </div>
  );
}
