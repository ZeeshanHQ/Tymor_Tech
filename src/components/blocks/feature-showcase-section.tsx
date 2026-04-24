'use client'

import React from 'react'
import { FeatureShowcase, type TabMedia } from '@/components/ui/feature-showcase'

export function FeatureShowcaseSection() {
  const tabs: TabMedia[] = [
    {
      value: "retail",
      label: "Retail",
      src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      alt: "Retail holographic display",
    },
    {
      value: "education",
      label: "Education",
      src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&h=800&fit=crop",
      alt: "Education holographic display",
    },
    {
      value: "entertainment",
      label: "Entertainment",
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
      alt: "Entertainment holographic display",
    },
  ]

  return (
    <FeatureShowcase
      eyebrow="Experience"
      title="Holographic displays for every industry"
      description="Tymor LFTC delivers cutting-edge holographic technology that transforms how businesses engage with their customers. From retail to education, our Holoboxes create immersive, life-size 3D experiences that captivate and convert."
      stats={["3 industries", "Real-time rendering", "Touch interactive"]}
      steps={[
        {
          id: "step-1",
          title: "Choose your Holobox model",
          text:
            "Select from our range of holographic display units designed for different spaces and use cases - from compact tabletop units to large-scale installations.",
        },
        {
          id: "step-2",
          title: "Upload your 3D content",
          text:
            "Import your 3D models, animations, or holographic content. Our AI-powered engine optimizes everything for seamless projection.",
        },
        {
          id: "step-3",
          title: "Deploy and engage",
          text:
            "Launch your holographic experience with real-time interaction capabilities. Users can touch, rotate, and engage with your 3D content naturally.",
        },
      ]}
      tabs={tabs}
      defaultTab="retail"
      panelMinHeight={720}
    />
  )
}
