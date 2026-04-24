'use client'

import React from 'react'
import PricingSection from '@/components/ui/pricing'

export function PricingSectionWrapper() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <PricingSection />
    </section>
  )
}
