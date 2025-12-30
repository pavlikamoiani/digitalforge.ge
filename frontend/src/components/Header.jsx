import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/languageSlice";

export default function Header({ onScrollToSection }) {
	const { t, i18n } = useTranslation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const dispatch = useDispatch();
	const currentLanguage = useSelector((state) => state.language.language);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const changeLang = (lng) => {
		i18n.changeLanguage(lng);
		dispatch(setLanguage(lng));
	};

	const navLinks = [
		{ id: 'about-section', label: t('About') },
		{ id: 'services-section', label: t('Services') },
		{ id: 'portfolio-section', label: t('Portfolio') },
	];

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			className={`fixed top-0 w-full z-[9999] transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}
		>
			<div className={`mx-auto px-[5%]`}>
				<div className={`flex items-center justify-between bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-full px-6 md:px-8 py-3 transition-all ${isScrolled ? 'shadow-2xl shadow-black/50' : ''}`}>
					<div className="text-xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						DigitalForge<span className="text-blue-500">.</span>
					</div>
					<nav className="hidden md:flex items-center gap-8">
						{navLinks.map(link => (
							<button
								key={link.id}
								onClick={() => onScrollToSection(link.id)}
								className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
							>
								{link.label}
							</button>
						))}
						<div className="flex items-center gap-1 border-l border-white/10 pl-6 ml-2">
							{['EN', 'RU', 'KA'].map((lang) => (
								<button
									key={lang}
									onClick={() => changeLang(lang.toLowerCase())}
									className={`text-[10px] font-bold px-2 py-1 rounded transition-all ${currentLanguage === lang.toLowerCase()
										? "bg-white text-black"
										: "text-gray-500 hover:text-white"
										}`}
								>
									{lang}
								</button>
							))}
						</div>
						<button
							onClick={() => onScrollToSection('contact-section')}
							className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all active:scale-95"
						>
							{t('Contact')}
						</button>
					</nav>
					<button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
						{mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
					</button>
				</div>
			</div>
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className="absolute top-full left-0 w-full bg-[#0a0a0a]/fb backdrop-blur-3xl border-b border-white/10 p-8 flex flex-col gap-8 md:hidden shadow-2xl"
					>
						{navLinks.map(link => (
							<button
								key={link.id}
								onClick={() => { onScrollToSection(link.id); setMobileMenuOpen(false); }}
								className="text-3xl font-bold text-white text-left tracking-tight"
							>
								{link.label}
							</button>
						))}
						<div className="flex gap-4 pt-4 border-t border-white/10">
							{['EN', 'RU', 'KA'].map((lang) => (
								<button
									key={lang}
									onClick={() => { changeLang(lang.toLowerCase()); setMobileMenuOpen(false); }}
									className={`text-lg font-bold ${currentLanguage === lang.toLowerCase() ? "text-blue-500" : "text-gray-500"}`}
								>
									{lang}
								</button>
							))}
						</div>
						<button
							onClick={() => { onScrollToSection('contact-section'); setMobileMenuOpen(false); }}
							className="w-full bg-white text-black py-5 rounded-2xl font-bold text-lg active:scale-95 transition-transform"
						>
							{t('Start a Project')}
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}