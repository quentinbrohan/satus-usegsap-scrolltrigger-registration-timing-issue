'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
// import { ScrollTrigger as GSAPScrollTrigger } from 'gsap/all'

export const ScrollTriggerSection = () => {
  useGSAP(() => {
    // gsap.registerPlugin(GSAPScrollTrigger) // working if uncommented but lacks default settings from components/gsap/scroll-trigger and lenis scroll sync

    gsap.fromTo(
      '.target',
      {
        opacity: 0.5,
      },
      {
        onStart: () => {
          console.log(new Date().toISOString(), 'useGSAP gsap.To start')
        },
        y: 100,
        opacity: 1,
        scrollTrigger: {
          trigger: '.target',
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        },
      }
    )
  })

  return (
    <div className="px-safe h-screen bg-secondary text-primary">
      <div>ScrollTrigger Section</div>
      <div className="target border border-red size-[250px]">target</div>
    </div>
  )
}
