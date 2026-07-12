import { cloneElement, isValidElement } from 'react';
import type React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
  children: React.ReactNode;
}

const sizeClasses: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-5 py-2.5 text-[12px]',
  md: 'px-6 py-3 text-[13px]',
  lg: 'px-8 py-4 text-[14px]',
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'group relative inline-flex items-center justify-center gap-3 border border-neutral-200/80 rounded-full font-bold tracking-wide text-neutral-800 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-transparent hover:text-white hover:shadow-[0_12px_24px_rgba(42,97,25,0.25)] active:scale-[0.98] transition-all duration-300 shrink-0 select-none overflow-hidden',
  outline: 'border border-accent text-accent hover:bg-accent/10',
  ghost: 'text-accent hover:bg-accent/10',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  asChild = false,
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const sharedClasses = `inline-flex items-center justify-center ${sizeClasses[size]} ${variantClasses[variant]} ${className}`.trim();

  if (asChild && isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>;

    return (
      <span className={sharedClasses}>
        <span className="absolute inset-0 bg-accent origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-x-100 -z-10" />
        {cloneElement(child, {
          className: ['relative z-10 inline-flex items-center justify-center gap-2', child.props.className].filter(Boolean).join(' '),
        })}
      </span>
    );
  }

  return (
    <button type={type} className={sharedClasses} {...props}>
      <span className="absolute inset-0 bg-accent origin-left scale-x-0 rounded-full transition-transform duration-500 ease-out group-hover:scale-x-100 -z-10" />
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
}
