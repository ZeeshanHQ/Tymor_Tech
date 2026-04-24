'use client'

import React from 'react'
import Image from 'next/image'
import { Footer } from '@/components/ui/footer-1'
import { Share2, Globe, Mail, Link as LinkIcon } from 'lucide-react'

export function FooterSection() {
  return (
    <Footer
      logoSrc="/logo-tymor.png"
      logoAlt="Tymor LFTC"
      description="Revolutionary holographic display technology transforming how businesses engage with customers through life-size 3D experiences."
      socialLinks={[
        { icon: Share2, href: "#", label: "Share" },
        { icon: Globe, href: "#", label: "Website" },
        { icon: Mail, href: "#", label: "Email" },
        { icon: LinkIcon, href: "#", label: "Link" },
      ]}
      columns={[
        {
          title: "PRODUCT",
          links: [
            { label: "Holobox Units", href: "#" },
            { label: "Hologram Rendering", href: "#", badge: "New", badgeColor: "blue" },
            { label: "AI Engine", href: "#" },
            { label: "Cloud Platform", href: "#" },
            { label: "Content Management", href: "#" },
          ],
        },
        {
          title: "SOLUTIONS",
          links: [
            { label: "Retail", href: "#" },
            { label: "Education", href: "#" },
            { label: "Entertainment", href: "#" },
            { label: "Corporate", href: "#" },
            { label: "Healthcare", href: "#" },
          ],
        },
        {
          title: "RESOURCES",
          links: [
            { label: "Blog", href: "#" },
            { label: "Case Studies", href: "#" },
            { label: "Documentation", href: "#" },
            { label: "API Reference", href: "#" },
            { label: "Community", href: "#" },
          ],
        },
        {
          title: "COMPANY",
          links: [
            { label: "About Us", href: "#" },
            { label: "Careers", href: "#", badge: "Hiring", badgeColor: "gold" },
            { label: "Contact", href: "#" },
            { label: "Press", href: "#" },
            { label: "Partners", href: "#" },
          ],
        },
      ]}
    />
  )
}
