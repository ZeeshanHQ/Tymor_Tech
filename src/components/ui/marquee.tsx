'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  reverse?: boolean
  children: React.ReactNode
  className?: string
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ className, children, pauseOnHover = false, reverse = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex overflow-hidden', className)}
        {...props}
      >
        <div
          className={cn(
            'flex animate-marquee gap-4',
            pauseOnHover && 'hover:[animation-play-state:paused]',
            reverse && '[animation-direction:reverse]'
          )}
        >
          {children}
          {children}
          {children}
        </div>
      </div>
    )
  }
)
Marquee.displayName = 'Marquee'

export { Marquee }
