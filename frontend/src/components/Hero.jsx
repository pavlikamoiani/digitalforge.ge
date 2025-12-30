import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Hero({ onScrollToSection }) {
	const { t } = useTranslation();

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.2, delayChildren: 0.1 }
		}
	};

	const item = {
		hidden: { opacity: 0, y: 30 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
		}
	};

	return (
		<section className="relative min-h-screen flex flex-col items-center justify-center bg-[#050505] overflow-hidden px-6">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full opacity-50" />
			</div>
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="relative z-10 flex flex-col items-center max-w-5xl"
			>
				<motion.div variants={item} className="mb-6">
					<span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium tracking-[0.2em] uppercase backdrop-blur-sm">
						{t('Available for new projects')}
					</span>
				</motion.div>
				<motion.h1
					className="text-5xl sm:text-7xl md:text-8xl font-bold text-center text-white mb-8 tracking-tight leading-[1.05]"
					variants={item}
				>
					{t('We build')}{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
						{t('digital future')}
					</span>
				</motion.h1>
				<motion.p
					className="text-lg md:text-xl text-gray-400 text-center mb-12 max-w-2xl leading-relaxed"
					variants={item}
				>
					{t('DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.')}
				</motion.p>
				<motion.div
					className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
					variants={item}
				>
					<button
						className="group relative bg-white text-black px-8 py-4 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
						onClick={() => onScrollToSection('contact-section')}
					>
						<span className="relative z-10">{t('Start a Project')}</span>
						<div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity" />
					</button>

					<button
						className="group bg-white/5 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/20 active:scale-95"
						onClick={() => onScrollToSection('projects-section')}
					>
						{t('Our Projects')}
					</button>
				</motion.div>
			</motion.div>
			<motion.div
				className="absolute bottom-30 left-1/2 -translate-x-1/2"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
			>
				<div className="w-[26px] h-[45px] rounded-full border-2 border-white/20 p-1 flex justify-center">
					<motion.div
						animate={{
							y: [0, 15, 0],
							opacity: [1, 0, 1]
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut"
						}}
						className="w-1.5 h-1.5 bg-white rounded-full"
					/>
				</div>
			</motion.div>
		</section>
	);
}