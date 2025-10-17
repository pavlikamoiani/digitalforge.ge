import { useState } from "react"

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        setIsSubmitted(true)
        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: "", email: "", message: "" })
        }, 3000)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <section id="contact" className="flex align-center justify-center bg-black py-20 md:py-32" style={{ padding: '10%', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20 px-4">
                <div className="flex-1 min-w-[320px]">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                        Свяжитесь с нами
                    </h2>
                    <p className="text-[#bdbdbd] text-lg md:text-xl mb-10 max-w-xl">
                        Готовы начать проект? Напишите нам, и мы обсудим, как можем помочь вашему бизнесу расти.
                    </p>
                    <div className="mb-7">
                        <div className="font-bold text-white mb-1">Email</div>
                        <div className="text-white">hello@digitalforge.ru</div>
                    </div>
                    <div className="mb-7">
                        <div className="font-bold text-white mb-1">Телефон</div>
                        <div className="text-white">+7 (900) 123-45-67</div>
                    </div>
                    <div>
                        <div className="font-bold text-white mb-1">Социальные сети</div>
                        <div className="flex gap-6 text-white">
                            <a href="#" className="hover:underline">Telegram</a>
                            <a href="#" className="hover:underline">Instagram</a>
                            <a href="#" className="hover:underline">Behance</a>
                        </div>
                    </div>
                </div>
                <div className="flex-1 min-w-[320px]">
                    {isSubmitted ? (
                        <div className="bg-[#111] border border-[#333] rounded-xl p-10 text-center text-white">
                            <div className="text-5xl mb-4">✓</div>
                            <h3 className="text-2xl font-bold mb-2">Спасибо!</h3>
                            <p className="text-[#bdbdbd]">
                                Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    Имя
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ваше имя"
                                    className="w-full px-4 py-3 rounded-lg border border-[#222] bg-[#111] text-white text-base outline-none focus:border-white transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-white font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-lg border border-[#222] bg-[#111] text-white text-base outline-none focus:border-white transition"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-white font-medium mb-2">
                                    Сообщение
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Расскажите о вашем проекте..."
                                    className="w-full px-4 py-3 rounded-lg border border-[#222] bg-[#111] text-white text-base outline-none resize-none focus:border-white transition"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-medium text-lg rounded-xl py-4 mt-2 hover:bg-gray-200 transition"
                            >
                                Отправить сообщение
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    )
}
