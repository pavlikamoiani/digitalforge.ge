import React from "react";
import styles from "../assets/css/Hero.module.css";
import { useTranslation } from "react-i18next";

export default function Hero({ onScrollToSection }) {
	const { t } = useTranslation();
	return (
		<section className={styles.heroSection}>
			<h1 className={styles.heroTitle}>
				{t('We create modern websites for your business.')}
			</h1>
			<div className={styles.heroSubtitle}>
				{t('DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.')}
			</div>
			<div className={styles.heroButtons}>
				<button className={styles.contactBtn} onClick={() => onScrollToSection('contact-section')}>
					{t('Contact Us')}
				</button>
				<button className={styles.projectsBtn} onClick={() => onScrollToSection('projects-section')}>
					{t('Our Projects')}
				</button>
			</div>
			<div className={styles.scrollIndicator}>
				<div className={styles.scrollMouse}>
					<div className={styles.scrollDot} />
				</div>
			</div>
		</section>
	);
}
