// NDS-Style Hero Section Component
// Full-viewport hero with image background and centered content

import Image from 'next/image'

interface HeroSectionProps {
  headline: string
  subheadline?: string
  backgroundImage: string
  cta?: {
    text: string
    href: string
  }
}

export function HeroSection({
  headline,
  subheadline,
  backgroundImage,
  cta
}: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover -z-10"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-normal leading-tight">
          {headline}
        </h1>

        {subheadline && (
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {subheadline}
          </p>
        )}

        {cta && (
          <a
            href={cta.href}
            className="inline-block mt-10 bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            {cta.text}
          </a>
        )}
      </div>
    </section>
  )
}
