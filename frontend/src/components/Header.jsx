import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiUser, FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({ onScrollToSection }) {
	const { t, i18n } = useTranslation();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	// eslint-disable-next-line
	const changeLang = (lng) => {
		i18n.changeLanguage(lng);
	};

	const headerVariants = {
		hidden: { opacity: 0, y: -40 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 60 } }
	};

	const menuVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
		exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
	};

	return (
		<motion.header
			className="sticky top-0 z-[9999] flex items-center justify-between px-4 md:px-16 py-4 md:py-7 bg-black/70 backdrop-blur-lg text-white border-b border-white/10"
			variants={headerVariants}
			initial="hidden"
			animate="visible"
		>
			<div
				className="font-bold text-[1.3rem] md:text-[1.8rem] tracking-tight cursor-pointer"
				onClick={() => window.location.reload()}
			>
				DigitalForge
			</div>
			<button
				className="md:hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
				onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				aria-label="Toggle menu"
			>
				{mobileMenuOpen ? <FiX /> : <FiMenu />}
			</button>
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.nav
						key="mobile-menu"
						className="flex-col md:flex-row flex items-center gap-4 md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent px-4 py-4 md:p-0 transition-all md:flex"
						initial="hidden"
						animate="visible"
						exit="exit"
						variants={menuVariants}
					>
						<button
							type="button"
							className="text-white text-[0.95rem] md:text-[0.8rem] cursor-pointer transition-colors hover:text-[#bdbdbd] bg-none border-none"
							onClick={() => { onScrollToSection('about-section'); setMobileMenuOpen(false); }}
						>
							{t("About Us")}
						</button>
						<button
							type="button"
							className="text-white text-[0.95rem] md:text-[0.8rem] cursor-pointer transition-colors hover:text-[#bdbdbd] bg-none border-none"
							onClick={() => { onScrollToSection('services-section'); setMobileMenuOpen(false); }}
						>
							{t("Services")}
						</button>
						<button
							type="button"
							className="text-white text-[0.95rem] md:text-[0.8rem] cursor-pointer transition-colors hover:text-[#bdbdbd] bg-none border-none"
							onClick={() => { onScrollToSection('portfolio-section'); setMobileMenuOpen(false); }}
						>
							{t("Portfolio")}
						</button>
						<button
							type="button"
							onClick={() => { onScrollToSection('contact-section'); setMobileMenuOpen(false); }}
							className="bg-white text-black border-none rounded-xl px-8 py-3 font-semibold text-[0.95rem] md:text-[0.8rem] cursor-pointer transition-colors hover:bg-[#e0e0e0] mt-2 md:mt-0"
						>
							{t("Contact")}
						</button>
						{/* <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
							<FiUser />
						</button> */}
						{/* <div className="flex gap-2 ml-8">
							<button onClick={() => changeLang('en')} className="bg-white/10 text-white border border-white rounded-md px-3 py-1 text-[0.95rem] cursor-pointer transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black">EN</button>
							<button onClick={() => changeLang('ru')} className="bg-white/10 text-white border border-white rounded-md px-3 py-1 text-[0.95rem] cursor-pointer transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black">RU</button>
							<button onClick={() => changeLang('ka')} className="bg-white/10 text-white border border-white rounded-md px-3 py-1 text-[0.95rem] cursor-pointer transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black">KA</button>
						</div> */}
					</motion.nav>
				)}
			</AnimatePresence>
			{/* Desktop menu (no animation needed) */}
			<nav className={`flex-col md:flex-row flex items-center gap-4 md:gap-8 absolute md:static top-full left-0 w-full md:w-auto bg-black/90 md:bg-transparent px-4 py-4 md:p-0 transition-all ${mobileMenuOpen ? "hidden" : "hidden"} md:flex`}>
				<button
					type="button"
					className="text-white text-[0.95rem] md:text-[0.8rem] cursor-pointer transition-colors hover:text-[#bdbdbd] bg-none border-none"
					onClick={() => { onScrollToSection('about-section'); setMobileMenuOpen(false); }}
				>
					{t("About Us")}
				</button>
				<button
					type="button"
					className="text-white text-[0.95rem] md:text-[0.8rem] cursor-pointer transition-colors hover:text-[#bdbdbd] bg-none border-none"
					onClick={() => { onScrollToSection('services-section'); setMobileMenuOpen(false); }}
				>
					{t("Services")}
				</button>
				<button
					type="button"
					className="text-white text-[0.95rem] md:text-[0.8rem] cursor-pointer transition-colors hover:text-[#bdbdbd] bg-none border-none"
					onClick={() => { onScrollToSection('portfolio-section'); setMobileMenuOpen(false); }}
				>
					{t("Portfolio")}
				</button>
				<button
					type="button"
					onClick={() => { onScrollToSection('contact-section'); setMobileMenuOpen(false); }}
					className="bg-white text-black border-none rounded-xl px-8 py-3 font-semibold text-[0.95rem] md:text-[0.8rem] cursor-pointer transition-colors hover:bg-[#e0e0e0] mt-2 md:mt-0"
				>
					{t("Contact")}
				</button>
				{/* <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 hover:text-white transition-colors cursor-pointer">
					<FiUser />
				</button> */}
				{/* <div className="flex gap-2 ml-8">
					<button onClick={() => changeLang('en')} className="bg-white/10 text-white border border-white rounded-md px-3 py-1 text-[0.95rem] cursor-pointer transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black">EN</button>
					<button onClick={() => changeLang('ru')} className="bg-white/10 text-white border border-white rounded-md px-3 py-1 text-[0.95rem] cursor-pointer transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black">RU</button>
					<button onClick={() => changeLang('ka')} className="bg-white/10 text-white border border-white rounded-md px-3 py-1 text-[0.95rem] cursor-pointer transition-colors hover:bg-white hover:text-black focus:bg-white focus:text-black">KA</button>
				</div> */}
			</nav>
		</motion.header>
	);
}
