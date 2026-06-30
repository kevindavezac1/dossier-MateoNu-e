export default function Page({ children, dark = false, id }) {
  return (
    <section id={id} className="w-full overflow-visible relative">
      {children}
    </section>
  )
}
