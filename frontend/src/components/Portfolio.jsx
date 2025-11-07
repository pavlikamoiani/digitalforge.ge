import PortfolioItem from "./PortfolioItem"
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function Portfolio() {
    const { t } = useTranslation();

    const projects = [
        {
            title: "E-commerce платформа",
            category: "Веб-разработка",
            description: "Современный интернет-магазин с интеграцией платёжных систем",
            image: "/placeholder.svg?height=600&width=800",
        },
        {
            title: "Корпоративный сайт",
            category: "Дизайн + Разработка",
            description: "Элегантный сайт для финансовой компании",
            image: "/placeholder.svg?height=600&width=800",
        },
        {
            title: "Мобильное приложение",
            category: "UI/UX Дизайн",
            description: "Интуитивный интерфейс для фитнес-приложения",
            image: "/placeholder.svg?height=600&width=800",
        },
        {
            title: "Лендинг для стартапа",
            category: "Веб-разработка",
            description: "Конверсионная посадочная страница с анимациями",
            image: "/placeholder.svg?height=600&width=800",
        },
        {
            title: "Брендинг агентства",
            category: "Брендинг",
            description: "Полный ребрендинг креативного агентства",
            image: "/placeholder.svg?height=600&width=800",
        },
        {
            title: "SaaS платформа",
            category: "Веб-разработка",
            description: "Комплексная система управления проектами",
            image: "/placeholder.svg?height=600&width=800",
        },
    ]

    return (
        <section id="portfolio" className="px-6 py-12 sm:p-[10%]" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="w-full flex flex-col">
                <div >
                    <h2 className="text-5xl md:text-5xl font-bold mb-6 tracking-tight text-balance text-white">{t('Our Projects')}</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl text-[#bdbdbd]">
                        {t('Selected works we are proud of')}
                    </p>
                </div>
                <div className="w-full flex justify-center items-center mt-5">
                    <motion.div
                        className="grid md:grid-cols-2 gap-6 md:gap-8 w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        {projects.map((project, index) => (
                            <PortfolioItem key={index} {...project} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
