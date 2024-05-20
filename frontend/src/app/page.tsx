"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { AuroraBackground } from "./components/ui/aurora-background";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div style={{width:'100vw'}}>
         <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Your Heart Beats For You <br/>
        Everyday
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
         Instant Heart Health Check
        </div>
        <Link href={"/diagnose"}>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Check
        </button>
        </Link>
      </motion.div>
    </AuroraBackground>
    </div>
    </main>
  );
}
