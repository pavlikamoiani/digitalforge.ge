import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
	const { t } = useTranslation();

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.3 }
		}
	};

	const itemFade = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
	};

	const stats = [
		{ num: "50+", label: t('Projects Completed'), color: "from-blue-500 to-cyan-400" },
		{ num: "5+", label: t('Years of Experience'), color: "from-purple-500 to-pink-500" },
		{ num: "40+", label: t('Satisfied Clients'), color: "from-orange-500 to-yellow-500" },
		{ num: "100%", label: t('Quality Assurance'), color: "from-green-500 to-emerald-400" }
	];

	return (
		<section id="about-section" className="relative w-full px-[10%] bg-[#050505] py-24 lg:py-40 overflow-hidden">
			<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
			<div className="mx-auto px-6 lg:px-12 relative z-10">
				<motion.div
					className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
				>
					<motion.div className="flex-1" variants={itemFade}>
						<div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
							<span className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase">
								{t('Who we are')}
							</span>
						</div>

						<h2 className="text-4xl md:text-7xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
							{t('DigitalForge')} <br />
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
								{t('Architects of Future')}
							</span>
						</h2>

						<div className="space-y-6 max-w-xl">
							<p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light">
								{t('DigitalForge is a team of professionals who create digital solutions for businesses of all sizes. We combine creativity, technology, and strategy to achieve your goals.')}
							</p>
							<p className="text-base text-gray-500 leading-relaxed italic border-l-2 border-blue-500/50 pl-6">
								{t('Our experience includes website development, unique design creation, and comprehensive marketing. We don’t just make websites — we create tools for your business growth.')}
							</p>
						</div>
					</motion.div>
					<motion.div
						className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
						variants={container}
					>
						{stats.map((stat, i) => (
							<motion.div
								key={i}
								variants={itemFade}
								whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
								className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-8 flex flex-col justify-between h-48 transition-all duration-300 overflow-hidden"
							>
								{/* Фоновый градиент при наведении */}
								<div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />

								<div className="relative z-10">
									<div className={`text-5xl font-light tracking-tighter mb-2 text-white group-hover:scale-110 origin-left transition-transform duration-500`}>
										{stat.num}
									</div>
									<div className="h-px w-8 bg-blue-500 group-hover:w-full transition-all duration-700" />
								</div>

								<div className="relative z-10 text-sm font-medium uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
									{stat.label}
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default About;