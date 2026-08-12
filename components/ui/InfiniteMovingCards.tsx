// components/ui/InfiniteMovingCards.tsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface InfiniteMovingCardsProps {
  items: string[]
  direction?: 'left' | 'right'
  speed?: 'slow' | 'normal' | 'fast'
  pauseOnHover?: boolean
  className?: string
}

export default function InfiniteMovingCards({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className = '',
}: InfiniteMovingCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLUListElement>(null)
  const [start, setStart] = useState(false)

  const speedMap = {
    slow: 40,
    normal: 25,
    fast: 15,
  }

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return

    const scrollerContent = Array.from(scrollerRef.current.children)

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      if (scrollerRef.current) {
        scrollerRef.current.appendChild(duplicatedItem)
      }
    })

    setStart(true)
  }, [])

  const animationDuration = `${items.length * speedMap[speed]}s`

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap ${
          start ? 'animate-scroll' : ''
        } ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
        style={{
          animationDuration,
          animationDirection: direction === 'left' ? 'normal' : 'reverse',
        }}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex-shrink-0"
          >
            <div className="px-8 py-4 bg-neutral-800/30 border border-neutral-700/30 rounded-xl backdrop-blur-sm">
              <span className="text-lg font-semibold text-neutral-300 whitespace-nowrap">
                {item}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}