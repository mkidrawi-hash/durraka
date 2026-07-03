// Renders its children left-to-right and bidi-isolated, so numbers, phone
// numbers, emails, and reference codes stay LTR inside RTL (Arabic) text.
export function Ltr({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span dir="ltr" style={{ unicodeBidi: 'isolate' }} className={className}>
      {children}
    </span>
  )
}
