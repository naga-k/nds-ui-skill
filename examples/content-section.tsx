// NDS-Style Content Section
// Clean text-focused section with large typography

interface ContentSectionProps {
  headline: string
  body: string | string[]
  variant?: 'light' | 'dark' | 'cream'
  align?: 'left' | 'center'
}

export function ContentSection({
  headline,
  body,
  variant = 'light',
  align = 'center'
}: ContentSectionProps) {
  const bgClasses = {
    light: 'bg-white text-black',
    dark: 'bg-black text-white',
    cream: 'bg-warm-cream text-black'
  }

  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const bodyArray = Array.isArray(body) ? body : [body]

  return (
    <section className={`${bgClasses[variant]} py-20 md:py-32`}>
      <div className={`max-w-4xl px-6 ${align === 'center' ? 'mx-auto' : 'ml-auto mr-6 md:mr-12 lg:mr-24'}`}>
        <h2 className={`font-serif text-3xl md:text-5xl lg:text-6xl leading-tight ${alignClass}`}>
          {headline}
        </h2>

        <div className={`mt-8 space-y-6 ${alignClass}`}>
          {bodyArray.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg md:text-xl leading-relaxed opacity-80"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
