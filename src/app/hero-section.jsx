"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ThreeScene from "./components/three-scene"
import GalaxyBackground from "./components/galaxy-background"
import { Code2, Palette, Zap } from 'lucide-react'
import SubtleBackground from "./components/subtle-background"
import GradientMeshBackground from "./components/gradient-mesh-background"

export default function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <GalaxyBackground />

      {/* Navigation */}
      <nav className="absolute top-0 w-full p-6 z-10">
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
                Contact Me{" "}
                <span className="ml-2">👋</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-6 pt-32 md:grid-cols-2 md:pt-40">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            Hello <span className="inline-block animate-wave">👋</span> I Am
          </h1>
          <h2 className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
            Web Developer
          </h2>
          <p className="mt-6 max-w-md text-lg text-gray-300">
            Crafting beautiful and functional web experiences with modern
            technologies and creative solutions.
          </p>

          {/* Feature Cards */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-lg bg-gray-800/50 p-4 backdrop-blur-sm"
            >
              <Code2 className="mb-2 h-6 w-6 text-yellow-300" />
              <h3 className="font-semibold">Clean Code</h3>
              <p className="text-sm text-gray-400">Writing maintainable, efficient code</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="rounded-lg bg-gray-800/50 p-4 backdrop-blur-sm"
            >
              <Palette className="mb-2 h-6 w-6 text-yellow-300" />
              <h3 className="font-semibold">Modern Design</h3>
              <p className="text-sm text-gray-400">Creating beautiful interfaces</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="rounded-lg bg-gray-800/50 p-4 backdrop-blur-sm"
            >
              <Zap className="mb-2 h-6 w-6 text-yellow-300" />
              <h3 className="font-semibold">Fast Performance</h3>
              <p className="text-sm text-gray-400">Optimizing for speed</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-[500px] w-[500px] max-w-full">
            <ThreeScene />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

