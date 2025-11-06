import React from "react";
import { useTranslation } from "react-i18next";

export default function Hero({ onScrollToSection }) {
	const { t } = useTranslation();
	return (
		<section className="bg-black text-white min-h-[calc(100vh-100px)] flex flex-col items-center justify-center border-b border-white/10 relative px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 overflow-hidden">
			<h1 className="text-[2rem] sm:text-[5vw] font-black text-center mx-2 sm:mx-[10%] mb-4 sm:mb-6 leading-tight">
				{t('We create modern websites for your business.')}
			</h1>
			<div className="text-base sm:text-lg text-[#bdbdbd] text-center mb-8 sm:mb-12 font-normal max-w-full sm:max-w-[700px]">
				{t('DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.')}
			</div>
			<div className="flex flex-col sm:flex-row gap-3 sm:gap-2.5 mb-8 sm:mb-12 w-full sm:w-auto">
				<button
					className="bg-white text-black border-none rounded-[10px] px-4 py-3 sm:px-7 sm:py-[15px] font-semibold text-base cursor-pointer w-full sm:w-[220px]"
					onClick={() => onScrollToSection('contact-section')}
				>
					{t('Contact Us')}
				</button>
				<button
					className="bg-transparent text-white border-2 border-white rounded-[10px] px-4 py-3 sm:px-7 sm:py-[15px] font-semibold text-base cursor-pointer w-full sm:w-[220px] transition-colors duration-400 hover:bg-white hover:text-black"
					onClick={() => onScrollToSection('projects-section')}
				>
					{t('Our Projects')}
				</button>
			</div>
			<div className="absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
				<div className="w-6 sm:w-7 h-8 sm:h-11 border-2 border-white rounded-xl flex items-start justify-center p-1 bg-transparent">
					<div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-white rounded-full" />
				</div>
			</div>
		</section>
	);
}
