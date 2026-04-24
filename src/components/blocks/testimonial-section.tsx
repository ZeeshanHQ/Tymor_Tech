'use client'

import React from 'react'
import { Component as AnimatedTestimonials } from '@/components/ui/testimonial'

export function TestimonialSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how Tymor LFTC holographic displays are transforming businesses across industries
          </p>
        </div>
        <AnimatedTestimonials />
      </div>
    </section>
  )
}
