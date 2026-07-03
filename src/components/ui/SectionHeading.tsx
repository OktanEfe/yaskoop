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
    <div className={`mb-12 ${center ? 'text-center' : ''} ${className}`}>
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-base ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-0.5 w-14 bg-accent ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
