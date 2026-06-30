const SIZE_CLASSES = {
  sm: 'bg-[size:14px_24px]',
  md: 'bg-[size:24px_24px]',
}

export default function GridBackground({ size = 'md' }) {
  return (
    <div
      className={`absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] ${SIZE_CLASSES[size]} pointer-events-none`}
    />
  )
}
