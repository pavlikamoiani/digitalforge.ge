import React from 'react'
import styles from '../assets/css/Service.module.css'
import { useTranslation } from 'react-i18next';

const Services = () => {

	const { t } = useTranslation();
	return (
		<>
			<div className={styles.servicesHeader}>
				<h1 className={styles.servicesTitle}>{t('Our Services')}</h1>
				<p className={styles.servicesSubtitle}>
					{t('A full range of services to create and develop your digital presence')}
				</p>
			</div>
			<div className={styles.servicesContainer}>
				<div className={styles.serviceCard}>
					<div className={styles.serviceNumber}>01</div>
					<h2 className={styles.serviceTitle}>{t('Web Development')}</h2>
					<p className={styles.serviceDesc}>
						{t('We create modern, fast, and adaptive websites using advanced technologies. From landing pages to complex web applications.')}
					</p>
					<ul className={styles.serviceList}>
						<li>{t('React & Next.js')}</li>
						<li>{t('Adaptive Design')}</li>
						<li>{t('SEO Optimization')}</li>
						<li>{t('High Performance')}</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceNumber}>02</div>
					<h2 className={styles.serviceTitle}>{t('Design')}</h2>
					<p className={styles.serviceDesc}>
						{t('We develop a unique visual style that reflects your brand values and attracts your target audience.')}
					</p>
					<ul className={styles.serviceList}>
						<li>{t('UI/UX Design')}</li>
						<li>{t('Branding')}</li>
						<li>{t('Prototyping')}</li>
						<li>{t('Design Systems')}</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceNumber}>03</div>
					<h2 className={styles.serviceTitle}>{t('Design')}</h2>
					<p className={styles.serviceDesc}>
						{t('We develop a unique visual style that reflects your brand values and attracts your target audience.')}
					</p>
					<ul className={styles.serviceList}>
						<li>{t('UI/UX Design')}</li>
						<li>{t('Branding')}</li>
						<li>{t('Prototyping')}</li>
						<li>{t('Design Systems')}</li>
					</ul>
				</div>
				<div className={styles.serviceCard}>
					<div className={styles.serviceNumber}>04</div>
					<h2 className={styles.serviceTitle}>{t('Design')}</h2>
					<p className={styles.serviceDesc}>
						{t('We develop a unique visual style that reflects your brand values and attracts your target audience.')}
					</p>
					<ul className={styles.serviceList}>
						<li>{t('UI/UX Design')}</li>
						<li>{t('Branding')}</li>
						<li>{t('Prototyping')}</li>
						<li>{t('Design Systems')}</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default Services