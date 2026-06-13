import Link from 'next/link'

interface SocialIconProps {
  href: string
  label: string
  /** 'dark' — white icon on navy/dark background (footer).
   *  'light' — navy icon on white background (contact page). */
  variant?: 'dark' | 'light'
  size?: 'sm' | 'md'
  children: React.ReactNode
}

const variantClasses: Record<'dark' | 'light', string> = {
  dark: [
    'border border-white/20 text-white/70',
    'hover:border-accent hover:text-white hover:-translate-y-0.5',
    'focus-visible:ring-white/40',
  ].join(' '),
  light: [
    'border border-navy/20 text-navy/70',
    'hover:border-accent hover:text-navy hover:-translate-y-0.5',
    'focus-visible:ring-navy/30',
  ].join(' '),
}

const sizeClasses: Record<'sm' | 'md', string> = {
  sm: 'w-9 h-9',
  md: 'w-11 h-11',
}

const iconSizeClasses: Record<'sm' | 'md', string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
}

export default function SocialIcon({
  href,
  label,
  variant = 'dark',
  size = 'sm',
  children,
}: SocialIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={[
        'inline-flex items-center justify-center rounded-full',
        'transition-all duration-200',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        sizeClasses[size],
        variantClasses[variant],
      ].join(' ')}
    >
      <span className={iconSizeClasses[size]} aria-hidden="true">
        {children}
      </span>
    </Link>
  )
}
