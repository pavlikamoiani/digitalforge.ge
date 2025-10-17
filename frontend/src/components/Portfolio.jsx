import PortfolioItem from "./PortfolioItem"

export default function Portfolio() {
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
        <section id="portfolio" style={{ padding: '10%', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="w-full flex flex-col">
                <div >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance text-white">Наши проекты</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl text-[#bdbdbd]">
                        Избранные работы, которыми мы гордимся
                    </p>
                </div>
                <div className="w-full flex justify-center items-center" style={{ padding: '5% 10%' }}>
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8 w-full ">
                        {projects.map((project, index) => (
                            <PortfolioItem key={index} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
