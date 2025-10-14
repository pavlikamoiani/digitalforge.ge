import React from 'react'
import styles from "../assets/css/About.module.css";

const About = () => {
	return (
		<section id="about-section" className={styles.aboutSection}>
			<div className={styles.aboutContent}>
				<div className={styles.aboutText}>
					<h2 className={styles.aboutTitle}>О нас</h2>
					<p className={styles.aboutDesc}>
						DigitalForge — это команда профессионалов, которая создаёт цифровые решения для бизнеса любого масштаба. Мы объединяем креативность, технологии и стратегию для достижения ваших целей.<br /><br />
						Наш опыт охватывает разработку веб-сайтов, создание уникального дизайна и комплексный маркетинг. Мы не просто делаем сайты — мы создаём инструменты для роста вашего бизнеса.
					</p>
				</div>
				<div className={styles.aboutStats}>
					<div className={styles.statCard}>
						<div className={styles.statValue}>50+</div>
						<div className={styles.statLabel}>Проектов реализовано</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statValue}>5+</div>
						<div className={styles.statLabel}>Лет опыта</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statValue}>40+</div>
						<div className={styles.statLabel}>Довольных клиентов</div>
					</div>
					<div className={styles.statCard}>
						<div className={styles.statValue}>100%</div>
						<div className={styles.statLabel}>Качество работы</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About