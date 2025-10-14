import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			"About Us": "About Us",
			"Services": "Services",
			"Portfolio": "Portfolio",
			"Contact": "Contact",

			'We create modern websites for your business.': 'We create modern websites for your business.',
			'DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.': 'DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.',
			'Contact Us': 'Contact Us',
			'Our Projects': 'Our Projects'
		}
	},
	ru: {
		translation: {
			"About Us": "О нас",
			"Services": "Услуги",
			"Portfolio": "Портфолио",
			"Contact": "Контакты",

			'We create modern websites for your business.': 'Мы создаем современные сайты для вашего бизнеса.',
			'DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.': 'DigitalForge - это веб-агентство полного цикла. Разработка, дизайн и маркетинг для роста вашего бренда.',
			'Contact Us': 'Связаться с нами',
			'Our Projects': 'Наши проекты'
		}
	},
	ka: {
		translation: {
			"About Us": "ჩვენს შესახებ",
			"Services": "სერვისები",
			"Portfolio": "პორტფოლიო",
			"Contact": "კონტაქტი",

			'We create modern websites for your business.': 'ჩვენ ვქმნით თანამედროვე ვებსაიტებს თქვენი ბიზნესისთვის.',
			'DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.': 'DigitalForge არის სრული ციკლის ვებ სააგენტო. განვითარება, დიზაინი და მარკეტინგი თქვენი ბრენდის ზრდისთვის.',
			'Contact Us': 'დაგვიკავშირდით',
			'Our Projects': 'ჩვენი პროექტები'
		}
	}
};

i18n
	.use(initReactI18next)
	.init({
		resources,
		lng: "en",
		fallbackLng: "ru",
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
