import { useState } from "react"
import { CiGlobe } from "react-icons/ci";
import { useTranslation } from "react-i18next";

export default function Footer({ onLanguageChange }) {
	const currentYear = new Date().getFullYear()
	const { t, i18n } = useTranslation();
	const [language, setLanguage] = useState(i18n.language);

	const languages = [
		{ code: "ka", label: "ქარ" },
		{ code: "ru", label: "РУС" },
		{ code: "en", label: "ENG" },
	]

	const handleLangChange = (lng) => {
		setLanguage(lng);
		i18n.changeLanguage(lng);
		if (onLanguageChange) {
			onLanguageChange(lng);
		}
	};

	return (
		<footer className="border-t border-[rgba(255,255,255,0.1)] py-8 sm:py-12 md:py-16 bg-black">
			<div className="container mx-auto px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-4 gap-8 mb-12">
						<div className="md:col-span-2">
							<div className="text-2xl font-bold mb-4 text-white">DigitalForge</div>
							<p className="text-sm max-w-sm text-pretty text-white">
								{t('We create modern digital solutions for your business. Web development, design, and marketing.')}
							</p>
						</div>

						<div>
							<h3 className="font-bold mb-4 text-white">{t('Navigation')}</h3>
							<ul className="space-y-2 text-sm">
								<li>
									<a href="#about-section" className="text-white hover:underline transition-colors">
										{t('About Us')}
									</a>
								</li>
								<li>
									<a href="#services-section" className="text-white hover:underline transition-colors">
										{t('Services')}
									</a>
								</li>
								<li>
									<a href="#portfolio-section" className="text-white hover:underline transition-colors">
										{t('Portfolio')}
									</a>
								</li>
								<li>
									<a href="#contact-section" className="text-white hover:underline transition-colors">
										{t('Contact')}
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h3 className="font-bold mb-4 text-white">{t('Contacts')}</h3>
							<ul className="space-y-2 text-sm">
								<li>
									<a
										href="mailto:digitalforge.ge@gmail.com"
										className="text-white hover:underline transition-colors"
									>
										digitalforge.ge@gmail.com
									</a>
								</li>
								<li>
									<a href="tel:+995571132156" className="text-white hover:underline transition-colors">
										+995 (571) 13-21-56
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="pt-8 border-t border-white/10">
						<div className="flex flex-col md:flex-row justify-between items-center gap-4">
							<p className="text-xs sm:text-sm text-white text-center md:text-left">© {currentYear} DigitalForge. {t('All rights reserved.')}</p>

							<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
								<div className="flex gap-3 sm:gap-4 text-xs sm:text-sm">
									<a href="#" className="text-white hover:underline transition-colors">
										{t('Privacy Policy')}
									</a>
									<a href="#" className="text-white hover:underline transition-colors">
										{t('Terms of Service')}
									</a>
								</div>

								<div className="flex items-center gap-2 border-l border-white pl-4 sm:pl-6">
									<CiGlobe className="w-4 h-4 text-white" />
									<div className="flex gap-1">
										{languages.map((lang) => (
											<button
												key={lang.code}
												onClick={() => handleLangChange(lang.code)}
												className={`px-2 py-1 text-xs font-medium rounded transition-colors ${language === lang.code
													? "bg-white text-black"
													: "text-white hover:bg-white hover:text-black"
													}`}
											>
												{lang.label}
											</button>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
