import React from "react";
import styles from "../assets/css/Header.module.css";
import { useTranslation } from "react-i18next";

export default function Header({ onScrollToSection }) {
	const { t, i18n } = useTranslation();

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
				<button className={styles.contactBtn}>
					{t("Contact")}
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
