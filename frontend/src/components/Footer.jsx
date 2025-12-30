import { useTranslation } from "react-i18next";

export default function Footer() {
	const { t, i18n } = useTranslation();
	const currentYear = new Date().getFullYear();

	const changeLang = (lng) => i18n.changeLanguage(lng);

	return (
		<footer className="bg-[#050505] pt-24 pb-12 px-[10%] border-t border-white/5">
			<div className="mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
					<div className="md:col-span-2">
						<div className="text-3xl font-bold text-white mb-6 tracking-tighter text-blue-500">DigitalForge</div>
						<p className="text-gray-500 text-lg max-w-sm leading-relaxed">
							{t('Crafting high-end digital solutions that push the boundaries of design and technology.')}
						</p>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">{t('Company')}</h4>
						<ul className="space-y-4 text-gray-500">
							<li><a href="#about-section" className="hover:text-white transition-colors">{t('About')}</a></li>
							<li><a href="#portfolio-section" className="hover:text-white transition-colors">{t('Portfolio')}</a></li>
							<li><a href="#contact-section" className="hover:text-white transition-colors">{t('Contact')}</a></li>
						</ul>
					</div>

					<div>
						<h4 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">{t('Language')}</h4>
						<div className="flex flex-wrap gap-2">
							{['en', 'ru', 'ka'].map((lang) => (
								<button
									key={lang}
									onClick={() => changeLang(lang)}
									className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${i18n.language === lang ? 'bg-white text-black' : 'text-gray-500 hover:text-white border border-white/10'}`}
								>
									{lang.toUpperCase()}
								</button>
							))}
						</div>
					</div>
				</div>

				<div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-gray-600 text-sm">
						© {currentYear} DigitalForge. {t('Made with precision in Georgia.')}
					</p>
					<div className="flex gap-8 text-sm text-gray-600">
						<a href="#" className="hover:text-white transition-colors">Privacy</a>
						<a href="#" className="hover:text-white transition-colors">Terms</a>
					</div>
				</div>
			</div>
		</footer>
	);
}