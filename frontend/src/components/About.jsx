import React from 'react'
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
	const { t } = useTranslation();

	const container = {
		hidden: {},
		show: {
			transition: {
				staggerChildren: 0.15
			}
		}
	};
	const card = {
		hidden: { opacity: 0, y: 40, scale: 0.96 },
		show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, type: "spring", stiffness: 60 } }
	};

	return (
		<motion.section
			id="about-section"
			className="w-full px-[10%] bg-black border-b border-white/10 py-12 sm:py-20 sm:px-[10%]"
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.2 }}
			variants={container}
		>
			<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 flex-wrap">
				<motion.div className="flex-1 mb-8 lg:mb-0 w-full" variants={card}>
					<h2 className="text-[2rem] sm:text-[4rem] font-black mb-6 sm:mb-8 text-white leading-tight">
						{t('About Us')}
					</h2>
					<p className="text-base sm:text-lg text-[#bdbdbd] leading-relaxed">
						{t('DigitalForge is a team of professionals who create digital solutions for businesses of all sizes. We combine creativity, technology, and strategy to achieve your goals.')}
						<br /><br />
						<span>
							{t('Our experience includes website development, unique design creation, and comprehensive marketing. We don’t just make websites — we create tools for your business growth.')}
						</span>
					</p>
				</motion.div>
				<motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 flex-1 w-full" variants={container}>
					{[{
						num: "50+",
						label: t('Projects Completed')
					}, {
						num: "5+",
						label: t('Years of Experience')
					}, {
						num: "40+",
						label: t('Satisfied Clients')
					}, {
						num: "100%",
						label: t('Quality Assurance')
					}].map((stat, i) => (
						<motion.div
							key={i}
							className="bg-[#111] border border-[#222] rounded-lg px-5 sm:px-8 pt-6 sm:pt-9 pb-6 sm:pb-8 flex flex-col items-start justify-center min-w-0 min-h-[90px] sm:min-h-[120px] transition-colors hover:border-white"
							variants={card}
							whileHover={{ scale: 1.04, borderColor: "#fff" }}
						>
							<div className="text-[2rem] sm:text-[2.7rem] font-bold text-white mb-2">{stat.num}</div>
							<div className="text-xs sm:text-sm text-[#bdbdbd] font-normal">{stat.label}</div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.section>
	)
}

export default About