interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  center = false,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col gap-4 ${center ? 'items-center text-center' : 'items-start'} ${className}`}>
      <h2
        className={`text-3xl md:text-[2.6rem] font-bold tracking-tight leading-[1.15] ${
          light ? 'text-white' : 'text-[#14180F]'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-3xl text-[16px] md:text-[18px] leading-relaxed font-light tracking-wide ${
          light ? 'text-white/60' : 'text-neutral-500'
        }`}>
          {subtitle}
        </p>
      )}
      {/* Çiğ duran renkli çizgi yerine, Apple tarzı temiz bir boşluk ve minimal hiyerarşi tercih edildi */}
    </div>
  );
}