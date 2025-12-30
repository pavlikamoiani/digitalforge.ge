import PortfolioItem from "./PortfolioItem"
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import ovanesova from "../assets/images/ovanesova.jpg"
import thepark from "../assets/images/thepark.jpg"
import icity from "../assets/images/icity.avif"

export default function Portfolio() {
    const { t } = useTranslation();

    const projects = [
        { title: t("E-commerce platform"), category: t("Web Development"), description: t("Modern store with payment integration"), image: icity, link: "https://icity.ge/" },
        { title: t("Corporate Site"), category: t("Web Development"), description: t("Elegant site for a financial company"), image: thepark, link: "https://thepark.ge/" },
        { title: t("Mobile App"), category: t("UI/UX Design"), description: t("Intuitive interface for fitness app"), image: "" },
        { title: t("Startup Landing"), category: t("Web Development"), description: t("Conversion page with animations"), image: ovanesova, link: "https://ovanesova-flowers.ru/" },
    ];

    return (
        <section id="portfolio" className="relative px-[10%] bg-[#050505] py-24 lg:py-40 border-b border-white/5">
            <div className="mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="text-blue-500 font-mono tracking-widest uppercase text-sm mb-4 block">
                            {t('Case Studies')}
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-none">
                            {t('Selected')} <span className="text-gray-500">{t('Works')}</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 text-lg md:text-xl max-w-sm">
                        {t('Crafting digital experiences that combine functionality with visual excellence.')}
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                    }}
                >
                    {projects.map((project, index) => (
                        <PortfolioItem key={index} {...project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}