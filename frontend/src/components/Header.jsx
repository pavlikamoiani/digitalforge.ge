import React from "react";
import styles from "../assets/css/Header.module.css";
import { useTranslation } from "react-i18next";
import { FiUser } from "react-icons/fi";

export default function Header({ onScrollToSection }) {
	const { t, i18n } = useTranslation();

	// eslint-disable-next-line
	const changeLang = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={() => window.location.reload()}>
				DigitalForge
			</div>
			<nav className={styles.nav}>
				<button
					type="button"
					className={styles.navLink}
					onClick={() => onScrollToSection('about-section')}
					style={{ background: "none", border: "none" }}
				>
					{t("About Us")}
				</button>
				<button
					type="button"
					className={styles.navLink}
					onClick={() => onScrollToSection('services-section')}
					style={{ background: "none", border: "none" }}
				>
					{t("Services")}
				</button>
				<button
					type="button"
					className={styles.navLink}
					onClick={() => onScrollToSection('portfolio-section')}
					style={{ background: "none", border: "none" }}
				>
					{t("Portfolio")}
				</button>
				<button type="button" onClick={() => onScrollToSection('contact-section')} className={styles.contactBtn}>
					{t("Contact")}
				</button>
				<button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-border hover:bg-muted hover:text-primary transition-colors cursonr-pointer">
					<FiUser />
				</button>
				{/* <div className={styles.langSwitcher}>
					<button onClick={() => changeLang('en')} className={styles.langBtn}>EN</button>
					<button onClick={() => changeLang('ru')} className={styles.langBtn}>RU</button>
					<button onClick={() => changeLang('ka')} className={styles.langBtn}>KA</button>
				</div> */}
			</nav>
		</header>
	);
}
