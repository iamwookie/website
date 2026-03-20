import * as motion from 'motion/react-client';
import type { Metadata, Viewport } from 'next';
import { Tajawal } from 'next/font/google';

import { cn } from '@/lib/utils';

const tajawal = Tajawal({ weight: '500', subsets: ['arabic'] });

export const metadata: Metadata = {
    title: 'Eid Mubarak',
    description: 'Wishing you peace, mercy, and joy ✨',
    openGraph: {
        title: 'Eid Mubarak',
        description: 'Wishing you peace, mercy, and joy ✨',
    },
};

export const viewport: Viewport = {
    themeColor: '#f8e2b7',
};

const stars = [
    { id: 0, left: '8%', top: '14%', delay: 0.2, duration: 2.4 },
    { id: 1, left: '18%', top: '30%', delay: 0.7, duration: 2.8 },
    { id: 2, left: '74%', top: '12%', delay: 0.4, duration: 2.5 },
    { id: 3, left: '86%', top: '24%', delay: 1.0, duration: 2.2 },
    { id: 4, left: '26%', top: '72%', delay: 0.1, duration: 2.6 },
    { id: 5, left: '82%', top: '80%', delay: 0.5, duration: 3.0 },
];

const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
};

const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

// animation time: ~1.1s (initial load)

export default function Eid() {
    return (
        <main className="relative overflow-hidden">
            <section className="container mx-auto flex min-h-dvh flex-col items-center justify-center px-4 py-24">
                <div className="pointer-events-none absolute inset-0" aria-hidden>
                    {/* Top ambient glow behind hero */}
                    <div className="bg-eid-glow-top/10 absolute -top-64 left-1/2 h-128 w-lg -translate-x-1/2 rounded-full blur-3xl" />
                    {/* Bottom-right ambient glow for depth balance */}
                    <div className="bg-eid-glow-bottom/8 absolute -right-24 -bottom-40 h-80 w-80 rounded-full blur-3xl" />
                    {/* Left-side ambient haze for smoother balance */}
                    <div className="bg-eid-glow-left/7 absolute top-1/3 -left-20 h-72 w-72 rounded-full blur-3xl" />

                    {/* Twinkling decorative stars */}
                    {stars.map((star) => (
                        <motion.span
                            key={star.id}
                            className="bg-eid-star absolute block h-1 w-1 rounded-full"
                            style={{ left: star.left, top: star.top }}
                            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.35, 1] }}
                            transition={{
                                delay: star.delay,
                                duration: star.duration,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-8 flex h-52 w-52 items-center justify-center"
                    aria-hidden
                >
                    {/* Main moon body with radial gold shading and pulse animation */}
                    <motion.div
                        className="from-eid-moon-from via-eid-moon-via to-eid-moon-to absolute h-44 w-44 overflow-hidden rounded-full bg-radial-[at_34%_30%]"
                        style={{ boxShadow: '0 0 48px rgb(var(--eid-moon-glow-rgb) / 0.3)' }}
                        animate={{ scale: [1, 1.035, 1], opacity: [0.92, 1, 0.92] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: [0.42, 0, 0.58, 1] }}
                    />

                    {/* Crescent cutout that shapes the moon */}
                    <div className="absolute h-44 w-44 translate-x-4 -translate-y-2 rounded-full bg-black" />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    className="relative z-10 flex max-w-2xl flex-col items-center gap-4 text-center"
                >
                    {/* Primary Arabic title */}
                    <motion.h1
                        variants={itemVariants}
                        className={cn('text-eid-title text-5xl tracking-tight sm:text-6xl', tajawal.className)}
                    >
                        عيد مبارك
                    </motion.h1>

                    {/* Supporting subtitle line */}
                    <motion.p variants={itemVariants} className="mt-2 max-w-xl text-base text-white/80 sm:text-lg">
                        May your nights be calm and your days be bright.
                    </motion.p>

                    {/* Secondary supporting line */}
                    <motion.p variants={itemVariants} className="text-eid-subtitle/80 max-w-xl text-sm sm:text-base">
                        Wishing you peace, mercy, and joy.
                    </motion.p>

                    <motion.p variants={itemVariants} className="max-w-xl text-sm sm:text-base">
                        ✨
                    </motion.p>
                </motion.div>
            </section>
        </main>
    );
}
