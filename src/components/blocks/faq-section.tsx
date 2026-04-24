'use client'

import React from 'react'
import { FAQ } from '@/components/ui/faq-tabs'

export function FAQSection() {
  const categories = {
    "general": "General",
    "technology": "Technology", 
    "pricing": "Pricing",
    "support": "Support"
  }

  const faqData = {
    "general": [
      {
        question: "What is a Holobox?",
        answer: "A Holobox is a state-of-the-art holographic display unit developed by Tymor LFTC. It projects life-size 3D holograms that users can interact with through touch gestures, creating an immersive experience without the need for special glasses or headsets."
      },
      {
        question: "What industries can benefit from holographic displays?",
        answer: "Holographic displays are versatile and can transform industries including retail (product showcases), education (interactive learning), entertainment (immersive experiences), healthcare (medical visualization), and corporate (presentations and collaboration)."
      },
      {
        question: "Do I need special glasses to view the holograms?",
        answer: "No! Our Holobox technology is glasses-free. The holograms are visible to the naked eye and can be viewed from multiple angles, making them accessible and convenient for any setting."
      },
      {
        question: "How durable are the Holobox units?",
        answer: "Our Holobox units are built with commercial-grade materials designed for continuous operation. They feature robust construction, advanced cooling systems, and are tested for reliability in various environmental conditions."
      },
      {
        question: "Can I use my own 3D content?",
        answer: "Yes! Our platform supports various 3D file formats including OBJ, FBX, and GLTF. You can upload your own 3D models, animations, and holographic content, which our AI engine optimizes for optimal display quality."
      }
    ],
    "technology": [
      {
        question: "What resolution do the displays support?",
        answer: "Our Holobox units support up to 8K resolution, delivering crystal-clear holographic projections. The Starter plan offers HD resolution, Professional offers 4K, and Enterprise provides 8K for the ultimate visual experience."
      },
      {
        question: "How does the AI-powered rendering work?",
        answer: "Our AI engine analyzes your 3D content and automatically optimizes it for holographic projection. It enhances textures, adjusts lighting, and ensures smooth real-time rendering while maintaining the original intent of your design."
      },
      {
        question: "What is the touch interaction capability?",
        answer: "Our Holobox units feature advanced gesture-based touch technology. Users can interact with holograms by touching, rotating, and manipulating them naturally, creating an engaging and intuitive user experience."
      },
      {
        question: "How does cloud sync work?",
        answer: "Cloud sync allows you to store and access your holographic content from anywhere. Changes made to your content are automatically synced across all your Holobox units, ensuring consistency and enabling remote management."
      },
      {
        question: "What are the system requirements?",
        answer: "Holobox units are self-contained and only require a standard power outlet and internet connection for cloud features. For content creation, you can use any modern computer with our web-based content management platform."
      }
    ],
    "pricing": [
      {
        question: "What's included in the Starter plan?",
        answer: "The Starter plan includes 1 Holobox unit, HD resolution display, touch interaction, cloud sync, up to 5 hologram files, and monthly updates. It's perfect for small businesses exploring holographic technology."
      },
      {
        question: "Can I upgrade my plan later?",
        answer: "Absolutely! You can upgrade your plan at any time. When you upgrade, you'll receive a prorated credit for any unused time on your current plan. The transition is seamless with no downtime."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, bank transfers, and enterprise payment solutions. For Enterprise customers, we offer flexible payment terms including annual billing options with significant discounts."
      },
      {
        question: "Is there a free trial available?",
        answer: "Yes! We offer a 14-day free trial for the Starter plan. This allows you to experience the power of holographic displays firsthand before making a commitment. Contact our sales team to get started."
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not completely satisfied with your Holobox experience, we'll provide a full refund, no questions asked."
      }
    ],
    "support": [
      {
        question: "What kind of support do you offer?",
        answer: "We offer multiple support tiers. Starter includes standard support with email responses within 24 hours. Professional includes priority support with 24/7 availability. Enterprise customers receive dedicated account managers and white-glove support."
      },
      {
        question: "Do you provide installation services?",
        answer: "Yes! We provide professional installation services for all plans. Our team will handle everything from site assessment to installation and setup, ensuring your Holobox is perfectly configured for your space."
      },
      {
        question: "Is training included?",
        answer: "Yes, all plans include comprehensive training. We provide video tutorials, documentation, and live onboarding sessions. Professional and Enterprise plans include personalized training for your team."
      },
      {
        question: "How do I report a technical issue?",
        answer: "You can report technical issues through our support portal, email, or phone. For urgent matters, Professional and Enterprise customers have access to priority support channels with guaranteed response times."
      },
      {
        question: "Do you offer custom solutions?",
        answer: "Yes! Our Enterprise plan offers custom solutions including white-label options, custom AI training, specialized hardware configurations, and tailored integrations with your existing systems. Contact our enterprise team to discuss your needs."
      }
    ]
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      <FAQ 
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Holobox"
        categories={categories}
        faqData={faqData}
      />
    </section>
  )
}
