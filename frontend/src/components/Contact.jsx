import { useState } from "react"
import { useTranslation } from 'react-i18next';


export default function Contact() {
    const { t } = useTranslation();

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
        <section id="contact" className="flex w-full items-center justify-between bg-black py-50 px-[10%] " style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="flex items-center justify-between flex-col md:flex-row gap-16 md:gap-20 px-4 w-full">
                <div className="flex-1 min-w-[320px]">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                        {t('Contact Us')}
                    </h2>
                    <p className="text-[#bdbdbd] text-lg mb-10 max-w-xl">
                        {t('Ready to start your project? Contact us and we will discuss how we can help your business grow.')}
                    </p>
                    <div className="mb-7">
                        <div className="font-bold text-white mb-1">Email</div>
                        <div className="text-white">digitalforge.ge@gmail.com</div>
                    </div>
                    <div className="mb-7">
                        <div className="font-bold text-white mb-1">{t('Phone')}</div>
                        <a href="tel:+995571132156" className="text-white">+995 (571) 13-21-56</a>
                    </div>
                    <div>
                        <div className="font-bold text-white mb-1">{t('Social Media')}</div>
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
                            <h3 className="text-2xl font-bold mb-2">{t('Thank You!')}</h3>
                            <p className="text-[#bdbdbd]">
                                {t('We have received your message and will get back to you soon.')}
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label htmlFor="name" className="block text-white font-medium mb-2">
                                    {t('Name')}
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={t('Your Name')}
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
                                    {t('Message')}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder={t('Your Message')}
                                    className="w-full px-4 py-3 rounded-lg border border-[#222] bg-[#111] text-white text-base outline-none resize-none focus:border-white transition"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-white text-black font-medium text-lg rounded-xl py-4 mt-2 hover:bg-gray-200 transition"
                            >
                                {t('Send Message')}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section >
    )
}
