'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'

export function Logo({ className }: { className?: string }) {
  return (
    <motion.div
      className={clsx(className, 'flex items-center gap-2')}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <img src="/logo.png" alt="Node Networks" className="h-full w-auto" />
      <span className="text-lg font-semibold text-gray-900">Node Networks</span>
    </motion.div>
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Node Networks"
      className={clsx(className, 'h-full w-full object-contain')}
    />
  )
}
