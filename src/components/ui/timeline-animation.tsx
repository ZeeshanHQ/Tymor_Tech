'use client'

import { motion, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  as?: keyof JSX.IntrinsicElements
  children: ReactNode
  animationNum?: number
  timelineRef?: React.RefObject<HTMLDivElement>
  customVariants?: {
    visible: (i: number) => any
    hidden: any
  }
  className?: string
}

export function TimelineContent({
  as: Component = "div",
  children,
  animationNum = 0,
  timelineRef,
  customVariants,
  className,
  ...props
}: TimelineContentProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const variants = customVariants || {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <Component
      ref={ref}
      className={cn(className)}
      {...props}
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        custom={animationNum}
      >
        {children}
      </motion.div>
    </Component>
  )
}
