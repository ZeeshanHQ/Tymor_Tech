'use client'

import React from 'react'
import { BellIcon, Share2Icon, BoxIcon, EyeIcon, ZapIcon, GlobeIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { Marquee } from '@/components/ui/marquee'

const hologramFeatures = [
  {
    name: "4K Resolution",
    body: "Ultra-high definition holographic displays with 4K resolution for crystal-clear 3D projections.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
  },
  {
    name: "AI Integration",
    body: "Powered by advanced AI algorithms for real-time hologram rendering and interaction.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop"
  },
  {
    name: "Touch Interaction",
    body: "Gesture-based touch technology allowing users to interact with holograms naturally.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=400&h=300&fit=crop"
  },
  {
    name: "360° View",
    body: "Complete 360-degree holographic viewing experience from any angle.",
    image: "https://images.unsplash.com/photo-1614728853970-3681b419e9c9?w=400&h=300&fit=crop"
  },
  {
    name: "Cloud Sync",
    body: "Seamless cloud synchronization for holographic content across all devices.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
  },
  {
    name: "Real-time Rendering",
    body: "Instant hologram rendering with zero latency for smooth, fluid animations.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
  },
]

const features = [
  {
    Icon: BoxIcon,
    name: "Holobox Technology",
    description: "Revolutionary holographic display units that bring digital content to life.",
    href: "#",
    cta: "Explore",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:25s]"
      >
        {hologramFeatures.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-3",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <img
              src={f.image}
              alt={f.name}
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <figcaption className="text-xs font-medium dark:text-white">
              {f.name}
            </figcaption>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: EyeIcon,
    name: "3D Visualization",
    description: "Immersive three-dimensional holographic projections with depth perception.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/3d_card.jpg"
        alt="3D Visualization"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    ),
  },
  {
    Icon: ZapIcon,
    name: "AI-Powered",
    description: "Advanced machine learning for intelligent hologram generation and optimization.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <img
        src="/ai_card.jpg"
        alt="AI-Powered"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Global Connectivity",
    description: "Connect and share holographic content anywhere in the world.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <img
        src="/global_card.jpg"
        alt="Global Connectivity"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
    ),
  },
]

export function BentoSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Revolutionary Holographic Technology</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of display technology with Tymor LFTC's cutting-edge holographic solutions.
          </p>
        </div>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}
