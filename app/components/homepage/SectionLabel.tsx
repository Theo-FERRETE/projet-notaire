export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-bold uppercase tracking-[1.8px] text-gold-accessible sm:flex-nowrap sm:text-[12px] sm:tracking-[2.4px]">
      <span className="h-px w-12 shrink-0 bg-[#c4a000]" />
      <strong className="min-w-0 break-words">{children}</strong>
    </div>
  )
}
