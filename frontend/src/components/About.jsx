import React from 'react'
import styles from "../assets/css/About.module.css";
import { useTranslation } from 'react-i18next';

const About = () => {
	const { t } = useTranslation();

	return (
		<section id="about-section" className={styles.aboutSection}>
			<div className={styles.aboutContent}>
				<div className={styles.aboutText}>
					<h2 className={styles.aboutTitle}>{t('About Us')}</h2>
					<p className={styles.aboutDesc}>
						{t('DigitalForge is a team of professionals who create digital solutions for businesses of all sizes. We combine creativity, technology, and strategy to achieve your goals.')}
						<br /> <br />
						<p>
							{t('Our experience includes website development, unique design creation, and comprehensive marketing. We don’t just make websites — we create tools for your business growth.')}
						</p>
					</p>
				</div>
				<div className={styles.aboutStats}>
					<div className={styles.statCard}>
						<div className={styles.statValue}>50+</div>
						<div className={styles.statLabel}>{t('Projects Completed')}</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statValue}>5+</div>
						<div className={styles.statLabel}>{t('Years of Experience')}</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statValue}>40+</div>
						<div className={styles.statLabel}>{t('Satisfied Clients')}</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statValue}>100%</div>
						<div className={styles.statLabel}>{t('Quality Assurance')}</div>
					</div>
				</div>
			</div>
		</section >
	)
}

export default About