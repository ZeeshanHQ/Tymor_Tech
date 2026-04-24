'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  Icon?: React.ComponentType<{ className?: string }>
  name: string
  description: string
  href?: string
  cta?: string
  className?: string
  background?: React.ReactNode
}

const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  ({ className, name, description, href, cta, Icon, background, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'group relative overflow-hidden rounded-3xl border bg-background p-6 transition-all hover:shadow-lg',
        className
      )}
      {...props}
    >
      {background && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {background}
        </div>
      )}
      <div className="relative z-10 flex flex-col gap-4">
        {Icon && (
          <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        )}
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        </div>
        {cta && href && (
          <a
            href={href}
            className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            {cta} →
          </a>
        )}
      </div>
    </div>
  )
)
BentoCard.displayName = 'BentoCard'

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-3', className)}
      {...props}
    >
      {children}
    </div>
  )
)
BentoGrid.displayName = 'BentoGrid'

export { BentoCard, BentoGrid }
