import React from 'react'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Services = () => {
	const { t } = useTranslation();

	useEffect(() => {
		if (window.$) {
			// eslint-disable-next-line
			$('.js-tilt').tilt({
				axis: 'y'
			});
		}
	}, []);

	return (
		<section className="w-full bg-black border-b border-white/10 py-12 sm:py-20">
			<div className="w-full px-4 sm:px-[10%] pt-0 mb-8">
				<h1 className="text-[2rem] sm:text-[3rem] font-extrabold text-white mb-4 tracking-wide">
					{t('Our Services')}
				</h1>
				<p className="text-base sm:text-lg text-[#bdbdbd] mb-0">
					{t('A full range of services to create and develop your digital presence')}
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-[10%]">
				{[
					{
						number: "01",
						title: t('Web Development'),
						desc: t('We create modern, fast, and adaptive websites using advanced technologies. From landing pages to complex web applications.'),
						list: [
							t('React & Next.js'),
							t('Adaptive Design'),
							t('SEO Optimization'),
							t('High Performance')
						]
					},
					{
						number: "02",
						title: t('Design'),
						desc: t('We develop a unique visual style that reflects your brand values and attracts your target audience.'),
						list: [
							t('UI/UX Design'),
							t('Branding'),
							t('Prototyping'),
							t('Design Systems')
						]
					},
					{
						number: "03",
						title: t('Design'),
						desc: t('We develop a unique visual style that reflects your brand values and attracts your target audience.'),
						list: [
							t('UI/UX Design'),
							t('Branding'),
							t('Prototyping'),
							t('Design Systems')
						]
					},
					{
						number: "04",
						title: t('Design'),
						desc: t('We develop a unique visual style that reflects your brand values and attracts your target audience.'),
						list: [
							t('UI/UX Design'),
							t('Branding'),
							t('Prototyping'),
							t('Design Systems')
						]
					}
				].map((card, idx) => (
					<div
						key={idx}
						className="js-tilt bg-[#111] border border-[#222] p-6 sm:p-12 max-w-full min-h-[320px] sm:min-h-[450px] box-border relative flex flex-col transition-colors hover:border-white rounded-lg"
					>
						<div className="text-[2.5rem] sm:text-[4.5rem] font-bold text-[#222] mb-4 sm:mb-6 leading-none tracking-wide">{card.number}</div>
						<h2 className="text-[1.2rem] sm:text-[1.8rem] font-bold text-white mb-4 sm:mb-6">{card.title}</h2>
						<p className="text-sm sm:text-base text-[#bdbdbd] mb-6 sm:mb-8 leading-relaxed">
							{card.desc}
						</p>
						<ul className="list-none p-0 m-0">
							{card.list.map((item, i) => (
								<li
									key={i}
									className="text-xs sm:text-sm text-white mb-2 sm:mb-3 pl-4 relative before:content-['▪'] before:absolute before:left-0 before:text-white before:text-lg before:top-0"
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}

export default Services