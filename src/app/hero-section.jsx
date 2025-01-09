"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThreeScene from "./components/three-scene";
import GalaxyBackground from "./components/galaxy-background";
import { Code2, Github, Linkedin, Mail, Palette, Zap } from "lucide-react";
import Nav from "./Nav";
import GradientMeshBackground from "./components/gradient-mesh-background";
import SubtleBackground from "./components/subtle-background";
import { Typewriter } from "react-simple-typewriter";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function HeroSection() {
 const words = ["Amit Jaiswar", "Web Developer", "JavaScript Enthusiast", "CSS Artist"];

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <SubtleBackground />

      {/* Hero Content */}
      <div className="relative mx-auto  min-h-screen max-w-7xl  gap-12 px-6 pt-32  md:pt-40">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center"
        >
          <h1 className="mb-2 text-4xl font-bold md:text-6xl">
            Hello <span className="inline-block animate-wave">👋</span> I Am
          </h1>
          <h2 className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
          <Typewriter words={words} loop cursor   />
          </h2>
          <p className="mt-6 max-w-md text-lg text-gray-300">
            Crafting beautiful and functional web experiences with modern
            technologies and creative solutions.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-lg bg-gray-600/50 p-4 backdrop-blur-sm"
            >
              <Code2 className="mb-2 h-6 w-6 text-yellow-300" />
              <h3 className="font-semibold">Clean Code</h3>
              <p className="text-sm text-gray-400">
                Writing maintainable, efficient code
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
           className="rounded-lg bg-gray-600/50 p-4 backdrop-blur-sm"
            >
              <Palette className="mb-2 h-6 w-6 text-yellow-300" />
              <h3 className="font-semibold">Modern Design</h3>
              <p className="text-sm text-gray-400">
                Creating beautiful interfaces
              </p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
               className="rounded-lg bg-gray-600/50 p-4 backdrop-blur-sm"
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
          <div className="mt-10 h-[500px] w-[500px] max-w-full">
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="https://github.com/amitjaiswar" target="_blank">
                  <Github className="mr-2" />
                  GitHub
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/amitjaiswar"
                  target="_blank"
                >
                  <Linkedin className="mr-2" />
                  LinkedIn
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                asChild
              >
                <Link href="mailto:contact@amitjaiswar.com">
                  <Mail className="mr-2" />
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      
    </div>
  );
}
