"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function ThreeScene() {
  const mountRef = useRef(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    const size = Math.min(500, window.innerWidth - 40)
    renderer.setSize(size, size)
    mountRef.current.appendChild(renderer.domElement)

    // Create Torus Knot
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16)
    const material = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      shininess: 100,
      specular: 0xffffff,
      flatShading: false,
    })
    const torusKnot = new THREE.Mesh(geometry, material)
    scene.add(torusKnot)

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    // Add point lights
    const pointLight1 = new THREE.PointLight(0xff00ff, 1, 100)
    pointLight1.position.set(5, 3, 5)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0x00ffff, 1, 100)
    pointLight2.position.set(-5, -3, -5)
    scene.add(pointLight2)

    camera.position.z = 4

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.5
    controls.minDistance = 3
    controls.maxDistance = 6

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      torusKnot.rotation.x += 0.01
      torusKnot.rotation.y += 0.01
      controls.update()
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
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <div ref={mountRef} className="h-full w-full" />
}

