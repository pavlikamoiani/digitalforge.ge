import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ onScrollToSection }) {
	const { t } = useTranslation();
	const [isScrolled, setIsScrolled] = useState(false);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
				<div className={`flex items-center justify-between bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-full px-8 py-3 transition-all ${isScrolled ? 'shadow-2xl shadow-black/50' : ''}`}>

					<div className="text-xl font-bold tracking-tighter text-white cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
						DigitalForge<span className="text-blue-500">.</span>
					</div>
					<nav className="hidden md:flex items-center gap-10">
						{navLinks.map(link => (
							<button
								key={link.id}
								onClick={() => onScrollToSection(link.id)}
								className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
							>
								{link.label}
							</button>
						))}
						<button
							onClick={() => onScrollToSection('contact-section')}
							className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-200 transition-all active:scale-95"
						>
							{t('Contact')}
						</button>
					</nav>
					<button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
						className="absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 p-8 flex flex-col gap-6 md:hidden backdrop-blur-3xl"
					>
						{navLinks.map(link => (
							<button key={link.id} onClick={() => { onScrollToSection(link.id); setMobileMenuOpen(false); }} className="text-2xl font-bold text-white text-left">
								{link.label}
							</button>
						))}
						<button onClick={() => { onScrollToSection('contact-section'); setMobileMenuOpen(false); }} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold">
							{t('Start a Project')}
						</button>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
}