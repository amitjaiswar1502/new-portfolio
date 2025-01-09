"use client";
import React from 'react'
import { motion } from "motion/react";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="absolute top-0 w-full text-white p-6 z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            DEV
          </motion.div>
          <div className="flex items-center gap-8">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden space-x-8 md:flex"
            >
              <Link
                href="#skills"
                className="hover:text-yellow-300 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#portfolio"
                className="hover:text-yellow-300 transition-colors"
              >
                Portfolio
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                className="bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                size="lg"
              >
                Contact Me <span className="ml-2">👋</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>
  )
}

export default Nav
