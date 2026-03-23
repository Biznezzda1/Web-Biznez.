"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ArtistWebsite() {
  const tracks = ["Mentalidad Elevada", "Luz Verde", "Modo Avion"];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-red-600">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center p-6 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-black to-black">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black mb-4 tracking-tighter"
        >
          BIZNEZ-DA-1
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-zinc-400 text-lg md:text-xl max-w-2xl uppercase tracking-widest mb-8"
        >
          Rap • Trap • Biznez On Da Beat
        </motion.p>
        <div className="flex gap-4">
          <Button className="bg-white text-black hover:bg-zinc-200 px-8 py-6 rounded-none font-bold">Escuchar</Button>
          <Button variant="outline" className="border-zinc-700 hover:bg-zinc-900 px-8 py-6 rounded-none font-bold">Contacto</Button>
        </div>
      </section>

      {/* Bio Section */}
      <section className="px
