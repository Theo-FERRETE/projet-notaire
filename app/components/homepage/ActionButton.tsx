import type { ReactNode } from 'react'

type ActionButtonProps = {
  children: ReactNode
  secondary?: boolean
  href?: string
}

export function ActionButton({ children, secondary = false, href = '#contact' }: ActionButtonProps) {
  return (
    <a
      className={[
        'inline-flex max-w-full items-center justify-center border px-3 py-3 text-[10px] font-bold uppercase tracking-[1px] transition-colors sm:px-10 sm:py-4 sm:text-[12px] sm:tracking-[1.2px]',
        secondary
          ? 'border-[#0d0070] bg-white text-[#0d0070] hover:bg-[#0d0070] hover:text-white'
          : 'border-[var(--gold-accessible)] bg-transparent text-[var(--gold-accessible)] hover:bg-[var(--gold-accessible)] hover:text-white',
      ].join(' ')}
      href={href}
    >
      {children}
    </a>
  )
}
