'use client'

import React from 'react'
import CTAWithVerticalMarquee from '@/components/ui/cta-with-text-marquee'

export function CTASection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <CTAWithVerticalMarquee />
    </section>
  )
}
