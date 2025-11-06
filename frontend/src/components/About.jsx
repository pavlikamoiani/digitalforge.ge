import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {
	const { t } = useTranslation();

	return (
		<section
			id="about-section"
			className="w-full px-4 bg-black border-b border-white/10 py-12 sm:py-20 sm:px-20"
		>
			<div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 sm:gap-12 flex-wrap">
				<div className="flex-1 mb-8 lg:mb-0 w-full">
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
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 flex-1 w-full">
					<div className="bg-[#111] border border-[#222] rounded-lg px-5 sm:px-8 pt-6 sm:pt-9 pb-6 sm:pb-8 flex flex-col items-start justify-center min-w-0 min-h-[90px] sm:min-h-[120px] transition-colors hover:border-white">
						<div className="text-[2rem] sm:text-[2.7rem] font-bold text-white mb-2">50+</div>
						<div className="text-xs sm:text-sm text-[#bdbdbd] font-normal">{t('Projects Completed')}</div>
					</div>
					<div className="bg-[#111] border border-[#222] rounded-lg px-5 sm:px-8 pt-6 sm:pt-9 pb-6 sm:pb-8 flex flex-col items-start justify-center min-w-0 min-h-[90px] sm:min-h-[120px] transition-colors hover:border-white">
						<div className="text-[2rem] sm:text-[2.7rem] font-bold text-white mb-2">5+</div>
						<div className="text-xs sm:text-sm text-[#bdbdbd] font-normal">{t('Years of Experience')}</div>
					</div>
					<div className="bg-[#111] border border-[#222] rounded-lg px-5 sm:px-8 pt-6 sm:pt-9 pb-6 sm:pb-8 flex flex-col items-start justify-center min-w-0 min-h-[90px] sm:min-h-[120px] transition-colors hover:border-white">
						<div className="text-[2rem] sm:text-[2.7rem] font-bold text-white mb-2">40+</div>
						<div className="text-xs sm:text-sm text-[#bdbdbd] font-normal">{t('Satisfied Clients')}</div>
					</div>
					<div className="bg-[#111] border border-[#222] rounded-lg px-5 sm:px-8 pt-6 sm:pt-9 pb-6 sm:pb-8 flex flex-col items-start justify-center min-w-0 min-h-[90px] sm:min-h-[120px] transition-colors hover:border-white">
						<div className="text-[2rem] sm:text-[2.7rem] font-bold text-white mb-2">100%</div>
						<div className="text-xs sm:text-sm text-[#bdbdbd] font-normal">{t('Quality Assurance')}</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About