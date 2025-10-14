import React from "react";
import styles from "../assets/css/Header.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
	const { t } = useTranslation();

	return (
		<header className={styles.header}>
			<div className={styles.logo} onClick={() => window.location.reload()}
			>
				DigitalForge
			</div>
			<nav className={styles.nav}>
				<Link to="/about" className={styles.navLink}>{t("About Us")}</Link>
				<Link to="/services" className={styles.navLink}>{t("Services")}</Link>
				<Link to="/portfolio" className={styles.navLink}>{t("Portfolio")}</Link>
				<button
					className={styles.contactBtn}
				>
					{t("Contact")}
				</button>
			</nav>
		</header>
	);
}
