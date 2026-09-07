import type { ReactNode } from 'react'

type ActionButtonProps = {
  children: ReactNode
  secondary?: boolean
  filled?: boolean
  header?: boolean
  href?: string
}

export function ActionButton({ children, secondary = false, filled = false, header = false, href = '#contact' }: ActionButtonProps) {
  return (
    <a
      className={[
        'inline-flex max-w-full items-center justify-center border transition-colors',
        header
          ? 'border-[#c9b287] bg-transparent px-5 py-2 text-[9px] font-bold uppercase tracking-[1.4px] text-[#806800] hover:bg-transparent hover:text-[#806800]'
          : secondary
          ? 'border-[#0d0070] bg-white px-3 py-3 text-[10px] font-bold uppercase tracking-[1px] text-[#0d0070] hover:bg-[#0d0070] hover:text-white sm:px-10 sm:py-4 sm:text-[12px] sm:tracking-[1.2px]'
          : filled
            ? 'border-[var(--gold-accessible)] bg-[var(--gold-accessible)] px-3 py-3 text-[10px] font-bold uppercase tracking-[1px] text-white sm:px-10 sm:py-4 sm:text-[12px] sm:tracking-[1.2px]'
            : 'border-[var(--gold-accessible)] bg-transparent px-3 py-3 text-[10px] font-bold uppercase tracking-[1px] text-[var(--gold-accessible)] hover:bg-[var(--gold-accessible)] hover:text-white sm:px-10 sm:py-4 sm:text-[12px] sm:tracking-[1.2px]',
      ].join(' ')}
      href={href}
    >
      {children}
    </a>
  )
}
