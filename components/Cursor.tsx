'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)
  const ringX = useRef(0)
  const ringY = useRef(0)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    // Only activate on real pointer (mouse) devices, not touch screens
    if (!window.matchMedia('(pointer: fine)').matches) return
    setIsPointer(true)
  }, [])

  useEffect(() => {
    if (!isPointer) return
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX
      mouseY.current = e.clientY
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
    }

    const animateRing = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.12
      ringY.current += (mouseY.current - ringY.current) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ringX.current + 'px'
        ringRef.current.style.top = ringY.current + 'px'
      }
      requestAnimationFrame(animateRing)
    }
    const raf = requestAnimationFrame(animateRing)

    const handleEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(2)'
      if (ringRef.current) ringRef.current.style.opacity = '0.2'
    }
    const handleLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
      if (ringRef.current) ringRef.current.style.opacity = '0.5'
    }

    document.addEventListener('mousemove', handleMouseMove)

    const interactables = document.querySelectorAll('a, button')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [isPointer])

  if (!isPointer) return null

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
