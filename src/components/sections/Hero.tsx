"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const FRAME_COUNT = 146;
const FRAME_PREFIX = "ezgif-frame-";
const FRAME_EXT = ".jpg";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Hydration and Mobile Detection
  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // 1. Preload Images
  useEffect(() => {
    if (!isMounted || isMobile) return;

    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new window.Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/sequence/${FRAME_PREFIX}${paddedIndex}${FRAME_EXT}`;
      
      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      };
      
      // Fallback if image fails, so we don't completely block
      img.onerror = () => {
        loadedCount++;
        setLoaded(loadedCount);
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages);
        }
      }

      loadedImages.push(img);
    }
  }, []);

  // 2. Render Canvas Frame
  const renderFrame = (progress: number) => {
    if (images.length !== FRAME_COUNT || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Map 0-0.85 progress to 0-(FRAME_COUNT-1), holding the last frame for the remaining 15% scroll
    const adjustedProgress = progress / 0.85;
    const index = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(adjustedProgress * FRAME_COUNT))
    );
    
    const img = images[index];
    if (!img) return;

    // Clear and draw black background
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dynamic sizing (Cover implementation)
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    
    // Draw scaled image
    ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  // 3. Handle Canvas Resize
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Re-render immediately on resize using current progress
        renderFrame(smoothProgress.get());
      }
    };
    
    handleResize(); // Initial sizing
    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [images, smoothProgress]);

  // 4. Bind Scroll Progress to Canvas Drawing
  useEffect(() => {
    const unsubscribe = smoothProgress.on("change", (latest) => {
      renderFrame(latest);
    });
    
    return () => unsubscribe();
  }, [images, smoothProgress]);


  // Text Overlay Animations
  // Text fades in at ~65% and STAYS visible until the end of the section
  const textOpacity = useTransform(smoothProgress, [0.65, 0.75], [0, 1]);
  // Smooth Parallax: comes up from 40px, rests at 0px, then slowly glides up to -60px as user hits the end of hero
  const textY = useTransform(smoothProgress, [0.65, 0.75, 1], [50, 0, -80]);

  // CI 'Schieferblau' (Onyx) Overlay for text legibility
  // Fades in when the "See" frames start and text appears, dimming the background slightly stronger
  const ciOverlayOpacity = useTransform(smoothProgress, [0.60, 0.70], [0, 0.75]);
  
  // Scroll Indicator fades out almost immediately
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.05], [1, 0]);

  const isLoading = loaded < FRAME_COUNT;
  const progressPercent = Math.round((loaded / FRAME_COUNT) * 100);

  // Render Mobile Fallback instantly to avoid loading 146 frames
  if (isMounted && isMobile) {
    return (
      <section id="hero-mobile" className="relative w-full h-[100svh] bg-black overflow-hidden flex items-center">
        {/* Static Frame Background instead of heavy sequence */}
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/sequence/ezgif-frame-110.jpg" 
            alt="Stefanie Lommel"
            fill
            className="object-cover"
            priority
          />
          {/* Overlays for text legibility */}
          <div className="absolute inset-0 bg-[#1A1A18] mix-blend-multiply opacity-75" />
          <div className="absolute inset-0 bg-black/40 opacity-75" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50 opacity-90" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-[5%]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="max-w-2xl text-left"
          >
            {/* Eyebrow Tag */}
            <div className="w-max rounded-full px-4 py-1.5 mb-6 text-[9px] uppercase tracking-[0.25em] font-semibold border border-white/20 text-white/90 backdrop-blur-md">
              Dringlichkeits-Dialog
            </div>
            
            <h1 className="font-serif text-4xl leading-[1.1] text-white mb-6 text-balance tracking-tight">
              Klarheit auf Entscheidungsebene,<br />
              <span className="italic text-[#C27347] font-light">wenn viel auf dem Spiel steht.</span>
            </h1>
            
            {/* Refined Text */}
            <p className="font-sans text-[13px] text-white/80 leading-relaxed mb-10 font-light pr-4">
              Ein exklusives Sparring für Inhaber und Geschäftsführer in Traditionshäusern. Wenn spürbar wird, dass sich etwas ändern muss – aber niemand weiß, wie, ohne Werte und Vertrauen zu verlieren.
            </p>
            
            {/* CTA Button */}
            <Link
              href="https://zeeg.me/info8723/15"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full rounded-full bg-[#C27347] pl-8 pr-2 py-2 flex items-center justify-between gap-6 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#A85E3A] shadow-lg"
            >
              <span>Akut: 15 Min. Telefonat</span>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={1.5} />
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  // Prevents hydration mismatch by not rendering sequence wrapper until mounted
  if (!isMounted) return <section className="w-full h-screen bg-black" />;

  return (
    <section ref={containerRef} id="hero-desktop" className="relative w-full h-[400vh] bg-black">
      
      {/* Loading Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-1000 ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <span className="text-white/60 text-sm tracking-widest font-mono mb-4 uppercase">System Initializing</span>
        <div className="w-64 h-px bg-white/20 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300" 
            style={{ width: `${progressPercent}%` }} 
          />
        </div>
        <span className="text-white/40 text-[10px] tracking-widest font-mono mt-4 uppercase">
          {progressPercent}% Loaded
        </span>
      </div>

      {/* Sticky Container for visual bounds */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        
        {/* The Frame Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

        {/* CI Schieferblau Overlay for legibility during "See" part */}
        <motion.div 
          style={{ opacity: ciOverlayOpacity }}
          className="absolute inset-0 bg-[#1A1A18] mix-blend-multiply pointer-events-none" 
        />
        <motion.div 
          style={{ opacity: ciOverlayOpacity }}
          className="absolute inset-0 bg-black/40 pointer-events-none" 
        />

        {/* Dynamic Text Overlay */}
        <div className="absolute inset-0 z-10 flex items-center pointer-events-none">
          <div className="container mx-auto px-[5%] lg:px-[10%]">
            <motion.div 
              style={{ opacity: textOpacity, y: textY }}
              className="max-w-2xl text-left pointer-events-auto"
            >
              {/* Eyebrow Tag */}
              <div className="w-max rounded-full px-4 py-1.5 mb-6 md:mb-8 text-[9px] uppercase tracking-[0.25em] font-semibold border border-white/20 text-white/90 backdrop-blur-md">
                Dringlichkeits-Dialog
              </div>
              
              <h1 className="font-serif text-4xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-white mb-8 text-balance tracking-tight">
                Klarheit auf Entscheidungsebene,<br />
                <span className="italic text-[#C27347] font-light">wenn viel auf dem Spiel steht.</span>
              </h1>
              
              {/* Refined Text */}
              <p className="font-sans text-base md:text-xl text-white/80 max-w-md leading-relaxed mb-12 font-light shadow-sm">
                Ein exklusives Sparring für Inhaber und Geschäftsführer in Traditionshäusern. Wenn spürbar wird, dass sich etwas ändern muss – aber niemand weiß, wie, ohne Werte und Vertrauen zu verlieren.
              </p>
              
              {/* Nested Button-in-Button Architecture - Vanguard Styled */}
              <Link
                href="https://zeeg.me/info8723/15"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-max rounded-full bg-[#C27347] pl-8 pr-2 py-2 flex items-center justify-between sm:justify-center gap-6 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#A85E3A] hover:shadow-[0_4px_20px_rgba(194,115,71,0.35)]"
              >
                <span>Akut: 15 Min. Telefonat</span>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:bg-white/30">
                  <ArrowUpRight className="w-4 h-4 text-white" strokeWidth={1.5} />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll To Explore Indicator */}
        <motion.div 
          style={{ opacity: scrollIndicatorOpacity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48, 0] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-[30%] bg-white"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-white/50 font-mono">Scroll</span>
        </motion.div>

      </div>
      
    </section>
  );
}
