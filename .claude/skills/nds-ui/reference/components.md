# NDS Component Reference

Full component examples for National Design Studio style interfaces.

## Hero Section

```tsx
interface HeroProps {
  headline: string
  subheadline?: string
  backgroundImage: string
  cta?: { text: string; href: string }
}

export function Hero({ headline, subheadline, backgroundImage, cta }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image src={backgroundImage} alt="" fill className="object-cover -z-10" priority />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight">
          {headline}
        </h1>
        {subheadline && (
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {subheadline}
          </p>
        )}
        {cta && (
          <a href={cta.href} className="inline-block mt-10 bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors">
            {cta.text}
          </a>
        )}
      </div>
    </section>
  )
}
```

## Statistics Section

```tsx
interface Stat { value: string; label: string }

export function Stats({ stats, headline, variant = 'light' }: { stats: Stat[]; headline?: string; variant?: 'light' | 'dark' }) {
  const bg = variant === 'dark' ? 'bg-black text-white' : 'bg-warm-cream text-black'

  return (
    <section className={`${bg} py-20 md:py-32`}>
      <div className="max-w-7xl mx-auto px-6">
        {headline && <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">{headline}</h2>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-6xl md:text-7xl lg:text-8xl">{stat.value}</div>
              <div className="mt-4 text-sm uppercase tracking-widest opacity-70 font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## Content Section

```tsx
export function Content({ headline, body, variant = 'light', align = 'center' }: { headline: string; body: string | string[]; variant?: 'light' | 'dark' | 'cream'; align?: 'left' | 'center' }) {
  const bg = { light: 'bg-white text-black', dark: 'bg-black text-white', cream: 'bg-warm-cream text-black' }
  const paragraphs = Array.isArray(body) ? body : [body]

  return (
    <section className={`${bg[variant]} py-20 md:py-32`}>
      <div className={`max-w-4xl px-6 ${align === 'center' ? 'mx-auto text-center' : 'ml-auto mr-6 md:mr-24'}`}>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">{headline}</h2>
        <div className="mt-8 space-y-6">
          {paragraphs.map((p, i) => <p key={i} className="text-lg md:text-xl leading-relaxed opacity-80">{p}</p>)}
        </div>
      </div>
    </section>
  )
}
```

## Navigation

```tsx
export function Navigation({ logo, siteName, items, variant = 'transparent' }: { logo?: string; siteName: string; items: { label: string; href: string }[]; variant?: 'transparent' | 'solid' }) {
  return (
    <nav className={`${variant === 'solid' ? 'bg-black' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-white">
          {logo && <Image src={logo} alt="" width={40} height={40} className="h-10 w-auto" />}
          <span className="font-serif text-xl md:text-2xl">{siteName}</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
```

## FAQ Section

```tsx
'use client'
import { useState } from 'react'

export function FAQ({ headline = 'Frequently Asked Questions', items, variant = 'cream' }: { headline?: string; items: { question: string; answer: string }[]; variant?: 'light' | 'cream' }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className={`${variant === 'cream' ? 'bg-warm-cream' : 'bg-white'} py-20 md:py-32`}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-5xl text-center mb-16">{headline}</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={i} className="border-b border-black/10">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-6 flex items-center justify-between text-left">
                <span className="font-serif text-xl md:text-2xl pr-8">{item.question}</span>
                <span className="text-2xl">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="pb-6 text-lg leading-relaxed opacity-80">{item.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

## Full Page Example

```tsx
export default function LandingPage() {
  return (
    <>
      <Navigation siteName="Project Name" items={[{ label: 'About', href: '#about' }, { label: 'Contact', href: '#contact' }]} />
      <Hero headline="Bold Statement Here" subheadline="Supporting copy." backgroundImage="/hero.jpg" cta={{ text: 'Get Started', href: '#' }} />
      <Stats headline="The Numbers" stats={[{ value: '94%', label: 'Success Rate' }, { value: '2.4M', label: 'Users' }, { value: '$180B', label: 'Value' }]} />
      <Content headline="Our Mission" body={['First paragraph.', 'Second paragraph.']} variant="cream" />
      <FAQ items={[{ question: 'How does it work?', answer: 'Explanation.' }]} />
    </>
  )
}
```
