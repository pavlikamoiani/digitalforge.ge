import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: {
			"About Us": "About Us",
			"Services": "Services",
			"Portfolio": "Portfolio",
			"Contact": "Contact",

			// hero section
			'We create modern websites for your business.': 'We create modern websites for your business.',
			'DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.': 'DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.',
			'Contact Us': 'Contact Us',
			'Our Projects': 'Our Projects',

			// about section
			'DigitalForge is a team of professionals who create digital solutions for businesses of all sizes. We combine creativity, technology, and strategy to achieve your goals.': 'DigitalForge is a team of professionals who create digital solutions for businesses of all sizes. We combine creativity, technology, and strategy to achieve your goals.',
			'Our experience includes website development, unique design creation, and comprehensive marketing. We don’t just make websites — we create tools for your business growth.': 'Our experience includes website development, unique design creation, and comprehensive marketing. We don’t just make websites — we create tools for your business growth.',
			'Projects Completed': 'Projects Completed',
			'Years of Experience': 'Years of Experience',
			'Satisfied Clients': 'Satisfied Clients',
			'Quality Assurance': 'Quality Assurance',

			// services section
			'Our Services': 'Our Services',
			'A full range of services to create and develop your digital presence': 'A full range of services to create and develop your digital presence',
			'Web Development': 'Web Development',
			'We create modern, fast, and adaptive websites using advanced technologies. From landing pages to complex web applications.': 'We create modern, fast, and adaptive websites using advanced technologies. From landing pages to complex web applications.',
			'React & Next.js': 'React & Next.js',
			'Adaptive Design': 'Adaptive Design',
			'SEO Optimization': 'SEO Optimization',
			'High Performance': 'High Performance',
			'Design': 'Design',
			'We develop a unique visual style that reflects your brand values and attracts your target audience.': 'We develop a unique visual style that reflects your brand values and attracts your target audience.',
			'UI/UX Design': 'UI/UX Design',
			'Branding': 'Branding',
			'Prototyping': 'Prototyping',
			'Design Systems': 'Design Systems',

			// Portfolio section
			'Our Projects': 'Our Projects',
			'Selected works we are proud of': 'Selected works we are proud of',

			// Contact section
			'Contact Us': 'Contact Us',
			'Ready to start your project? Contact us and we will discuss how we can help your business grow.': 'Ready to start your project? Contact us and we will discuss how we can help your business grow.',
			'Phone': 'Phone',
			'Social Media': 'Social Media',
			'Thank You!': 'Thank You!',
			'We have received your message and will get back to you soon.': 'We have received your message and will get back to you soon.',
			'Message': 'Message',
			'Your Name': 'Your Name',
			'Your Message': 'Your Message',
			'Send Message': 'Send Message',

			// Footer section
			'Privacy Policy': 'Privacy Policy',
			'Terms of Service': 'Terms of Service',
			'All rights reserved.': 'All rights reserved.',
			'We create modern digital solutions for your business. Web development, design, and marketing.': 'We create modern digital solutions for your business. Web development, design, and marketing.',
			'Navigation': 'Navigation',
			'Contacts': 'Contacts',
			'About Us': 'About Us',
			'Services': 'Services',
			'Portfolio': 'Portfolio',
			'Contact': 'Contact',
		}
	},
	ru: {
		translation: {
			"About Us": "О нас",
			"Services": "Услуги",
			"Portfolio": "Портфолио",
			"Contact": "Контакты",

			// hero section
			'We create modern websites for your business.': 'Мы создаем современные сайты для вашего бизнеса.',
			'DigitalForge is a full-cycle web agency. Development, design, and marketing for your brand growth.': 'DigitalForge - это веб-агентство полного цикла. Разработка, дизайн и маркетинг для роста вашего бренда.',
			'Contact Us': 'Связаться с нами',
			'Our Projects': 'Наши проекты',

			// about section
			'DigitalForge is a team of professionals who create digital solutions for businesses of all sizes. We combine creativity, technology, and strategy to achieve your goals.': 'DigitalForge - это команда профессионалов, создающих цифровые решения для бизнеса любого масштаба. Мы объединяем креативность, технологии и стратегию для достижения ваших целей.',
			'Our experience includes website development, unique design creation, and comprehensive marketing. We don’t just make websites — we create tools for your business growth.': 'Наш опыт включает разработку веб-сайтов, создание уникального дизайна и комплексный маркетинг. Мы не просто создаем сайты — мы создаем инструменты для роста вашего бизнеса.',
			'Projects Completed': 'Завершенных проектов',
			'Years of Experience': 'Лет опыта',
			'Satisfied Clients': 'Довольных клиентов',
			'Quality Assurance': 'Гарантия качества',

			// services section
			'Our Services': 'Наши услуги',
			'A full range of services to create and develop your digital presence': 'Полный спектр услуг по созданию и развитию вашего цифрового присутствия',
			'Web Development': 'Веб-разработка',
			'We create modern, fast, and adaptive websites using advanced technologies. From landing pages to complex web applications.': 'Мы создаем современные, быстрые и адаптивные сайты с использованием передовых технологий. От лендингов до сложных веб-приложений.',
			'React & Next.js': 'React и Next.js',
			'Adaptive Design': 'Адаптивный дизайн',
			'SEO Optimization': 'SEO оптимизация',
			'High Performance': 'Высокая производительность',
			'Design': 'Дизайн',
			'We develop a unique visual style that reflects your brand values and attracts your target audience.': 'Мы разрабатываем уникальный визуальный стиль, который отражает ценности вашего бренда и привлекает вашу целевую аудиторию.',
			'UI/UX Design': 'UI/UX дизайн',
			'Branding': 'Брендинг',
			'Prototyping': 'Прототипирование',
			'Design Systems': 'Дизайн-системы',

			// Portfolio section
			'Our Projects': 'Наши проекты',
			'Selected works we are proud of': 'Избранные работы, которыми мы гордимся',

			// Contact section
			'Contact Us': 'Связаться с нами',
			'Ready to start your project? Contact us and we will discuss how we can help your business grow.': 'Готовы начать свой проект? Свяжитесь с нами, и мы обсудим, как мы можем помочь вашему бизнесу расти.',
			'Phone': 'Телефон',
			'Social Media': 'Социальные сети',
			'Thank You!': 'Спасибо!',
			'We have received your message and will get back to you soon.': 'Мы получили ваше сообщение и скоро свяжемся с вами.',
			'Message': 'Сообщение',
			'Your Name': 'Ваше имя',
			'Your Message': 'Ваше сообщение',
			'Send Message': 'Отправить сообщение',


			// Footer section
			'Privacy Policy': 'Политика конфиденциальности',
			'Terms of Service': 'Условия использования',
			'All rights reserved.': 'Все права защищены.',
			'We create modern digital solutions for your business. Web development, design, and marketing.': 'Мы создаем современные цифровые решения для вашего бизнеса. Веб-разработка, дизайн и маркетинг.',
			'Navigation': 'Навигация',
			'Contacts': 'Контакты',
			'About Us': 'О нас',
			'Services': 'Услуги',
			'Portfolio': 'Портфолио',
			'Contact': 'Контакты',

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
			'Our Projects': 'ჩვენი პროექტები',

			// about section
			'DigitalForge is a team of professionals who create digital solutions for businesses of all sizes. We combine creativity, technology, and strategy to achieve your goals.': 'DigitalForge არის პროფესიონალების გუნდი, რომელიც ქმნის ციფრულ გადაწყვეტილებებს ნებისმიერი ზომის ბიზნესისთვის. ჩვენ ვაერთიანებთ კრეატიულობას, ტექნოლოგიას და სტრატეგიას თქვენი მიზნების მისაღწევად.',
			'Our experience includes website development, unique design creation, and comprehensive marketing. We don’t just make websites — we create tools for your business growth.': 'ჩვენი გამოცდილება მოიცავს ვებსაიტების განვითარებას, უნიკალური დიზაინის შექმნას და ყოვლისმომცველ მარკეტინგს. ჩვენ არ ვქმნით მხოლოდ ვებსაიტებს — ჩვენ ვქმნით ხელსაწყოებს თქვენი ბიზნესის ზრდისთვის.',
			'Projects Completed': 'დასრულებული პროექტები',
			'Years of Experience': 'გამოცდილების წლები',
			'Satisfied Clients': 'დაკმაყოფილებული კლიენტები',
			'Quality Assurance': 'ხარისხის უზრუნველყოფა',

			// services section
			'Our Services': 'ჩვენი სერვისები',
			'A full range of services to create and develop your digital presence': 'სრული სპექტრი სერვისების თქვენი ციფრული ყოფნის შესაქმნელად და განვითარებისთვის',
			'Web Development': 'ვებ განვითარება',
			'We create modern, fast, and adaptive websites using advanced technologies. From landing pages to complex web applications.': 'ჩვენ ვქმნით თანამედროვე, სწრაფ და ადაპტირებად ვებსაიტებს მოწინავე ტექნოლოგიების გამოყენებით. ლენდინგ გვერდებიდან რთულ ვებ აპლიკაციებამდე.',
			'React & Next.js': 'React და Next.js',
			'Adaptive Design': 'ადაპტირებადი დიზაინი',
			'SEO Optimization': 'SEO ოპტიმიზაცია',
			'High Performance': 'მაღალი შესრულება',
			'Design': 'დიზაინი',
			'We develop a unique visual style that reflects your brand values and attracts your target audience.': 'ჩვენ ვქმნით უნიკალურ ვიზუალურ სტილს, რომელიც ასახავს თქვენი ბრენდის ღირებულებებს და იზიდავს თქვენს სამიზნე აუდიტორიას.',
			'UI/UX Design': 'UI/UX დიზაინი',
			'Branding': 'ბრენდინგი',
			'Prototyping': 'პროტოტიპირება',
			'Design Systems': 'დიზაინ სისტემები',

			// Portfolio section
			'Our Projects': 'ჩვენი პროექტები',
			'Selected works we are proud of': 'არჩეული ნამუშევრები, რომლითაც ვამაყობთ',

			// Contact section
			'Contact Us': 'დაგვიკავშირდით',
			'Ready to start your project? Contact us and we will discuss how we can help your business grow.': 'მზად ხართ თქვენი პროექტის დასაწყებად? დაგვიკავშირდით და ჩვენ განვიხილავთ, როგორ შეგვიძლია თქვენი ბიზნესის ზრდაში დახმარება.',
			'Phone': 'ტელეფონი',
			'Social Media': 'სოციალური მედია',
			'Thank You!': 'გმადლობთ!',
			'We have received your message and will get back to you soon.': 'ჩვენ მივიღეთ თქვენი შეტყობინება და მალე დაგიკავშირდებით.',
			'Message': 'შეტყობინება',
			'Your Name': 'თქვენი სახელი',
			'Your Message': 'თქვენი შეტყობინება',
			'Send Message': 'შეტყობინების გაგზავნა',

			// Footer section
			'Privacy Policy': 'კონფიდენციალურობის პოლიტიკა',
			'Terms of Service': 'მომსახურების პირობები',
			'All rights reserved.': 'ყველა უფლება დაცულია.',
			'We create modern digital solutions for your business. Web development, design, and marketing.': 'ჩვენ ვქმნით თანამედროვე ციფრულ გადაწყვეტილებებს თქვენი ბიზნესისთვის. ვებ განვითარება, დიზაინი და მარკეტინგი.',
			'Navigation': 'ნავიგაცია',
			'Contacts': 'კონტაქტები',
			'About Us': 'ჩვენს შესახებ',
			'Services': 'სერვისები',
			'Portfolio': 'პორტფოლიო',
			'Contact': 'კონტაქტი',
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
