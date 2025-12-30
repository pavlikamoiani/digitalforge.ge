import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.15,
			duration: 0.8,
			ease: [0.215, 0.61, 0.355, 1],
		}
	})
};

const Services = () => {
	const { t } = useTranslation();

	const cards = [
		{
			number: "01",
			title: t('Web Development'),
			desc: t('We create modern, fast, and adaptive websites using advanced technologies. From landing pages to complex web applications.'),
			list: [t('React & Next.js'), t('Adaptive Design'), t('SEO Optimization'), t('High Performance')]
		},
		{
			number: "02",
			title: t('Web Application'),
			desc: t('We build fullstack applications using React Native, covering both frontend and backend for scalable solutions.'),
			list: [t('React Native'), t('Fullstack Development'), t('API Integration'), t('Cross-platform Apps')]
		},
		{
			number: "03",
			title: t('Design'),
			desc: t('We develop a unique visual style that reflects your brand values and attracts your target audience.'),
			list: [t('UI/UX Design'), t('Branding'), t('Prototyping'), t('Design Systems')]
		},
		{
			number: "04",
			title: t('Marketing'),
			desc: t('Strategic digital marketing to grow your business presence and reach the right audience.'),
			list: [t('Social Media'), t('Content Strategy'), t('Ad Campaigns'), t('Analytics')]
		}
	];

	return (
		<section className="w-full px-[10%] bg-[#050505] py-24 sm:py-32 relative overflow-hidden">
			<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
			<div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />

			<div className="mx-auto lg:px-12 relative z-10">
				<motion.div
					className="mb-16 md:mb-24"
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
						{t('Expertise')}
					</span>
					<h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
						{t('Our Services')}<span className="text-blue-500">.</span>
					</h1>
					<p className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed">
						{t('A full range of services to create and develop your digital presence with cutting-edge solutions.')}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{cards.map((card, idx) => (
						<motion.div
							key={idx}
							custom={idx}
							initial="hidden"
							whileInView="visible"
							whileHover={{ y: -8 }}
							viewport={{ once: true, amount: 0.2 }}
							variants={cardVariants}
							className="group relative bg-[#0f0f0f] border border-white/5 p-8 md:p-12 rounded-3xl transition-all duration-500 hover:border-white/20 hover:bg-[#141414]"
						>
							<div className="flex justify-between items-start mb-8">
								<span className="text-5xl font-bold text-white/5 group-hover:text-blue-500/20 transition-colors duration-500">
									{card.number}
								</span>
								<div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
									<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
										<path d="M7 17L17 7M17 7H7M17 7V17" />
									</svg>
								</div>
							</div>

							<h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
								{card.title}
							</h2>
							<p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
								{card.desc}
							</p>

							<ul className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-white/5 pt-8">
								{card.list.map((item, i) => (
									<li key={i} className="flex items-center text-sm text-gray-300 group-hover:text-white transition-colors">
										<span className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-3" />
										{item}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;