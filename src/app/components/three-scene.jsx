"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false })
    
    const size = Math.min(500, window.innerWidth - 40)
    renderer.setSize(size, size)
    mountRef.current.appendChild(renderer.domElement)

    // Create an icosahedron (20-sided polyhedron)
    const geometry = new THREE.IcosahedronGeometry(1, 1)
    const material = new THREE.MeshPhongMaterial({
      color: 0xffd700,
      shininess: 100,
      specular: 0xffffff,
      flatShading: true,
    })
    const icosahedron = new THREE.Mesh(geometry, material)
    scene.add(icosahedron)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8)
    scene.add(ambientLight)

    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1.5)
    pointLight.position.set(5, 5, 5)
    scene.add(pointLight)

    camera.position.z = 2.5

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      icosahedron.rotation.x += 0.005
      icosahedron.rotation.y += 0.005
      renderer.render(scene, camera)
    }

    animate()


    

    // Handle resize
    const handleResize = () => {
      const size = Math.min(500, window.innerWidth - 40)
      camera.aspect = 1
      camera.updateProjectionMatrix()
      renderer.setSize(size, size)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={mountRef} className="h-full w-full" />
}

