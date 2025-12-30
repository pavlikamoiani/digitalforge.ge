import { useState } from "react"
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiSend } from "react-icons/fi";

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 4000);
    }

    return (
        <section id="contact-section" className="bg-[#050505] py-24 lg:py-40 px-[10%] overflow-hidden border-b border-white/5">
            <div className="mx-auto flex flex-col lg:flex-row gap-20 items-start">
                <motion.div
                    className="lg:w-1/3"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                        {t('Let’s talk')}
                    </h2>
                    <p className="text-gray-400 text-lg mb-12 font-light">
                        {t('Have an idea? We have the tools to build it. Reach out and let’s create something legendary.')}
                    </p>

                    <div className="space-y-8">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-blue-500 mb-2">{t('Email Us')}</p>
                            <a href="mailto:digitalforge.ge@gmail.com" className="text-xl text-white hover:text-blue-400 transition-colors">digitalforge.ge@gmail.com</a>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-blue-500 mb-2">{t('Call Us')}</p>
                            <a href="tel:+995571132156" className="text-xl text-white hover:text-blue-400 transition-colors">+995 (571) 13-21-56</a>
                        </div>
                    </div>
                </motion.div>

                {/* Правая сторона: Форма */}
                <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <AnimatePresence mode="wait">
                        {isSubmitted ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-[450px] flex flex-col items-center justify-center bg-blue-600/5 border border-blue-500/20 rounded-3xl text-center p-12"
                            >
                                <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(59,130,246,0.5)]">
                                    <FiSend className="text-white text-3xl" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">{t('Message Sent!')}</h3>
                                <p className="text-gray-400 max-w-sm">{t('We will get back to you within 24 hours. Stay tuned.')}</p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-500 ml-2">{t('Name')}</label>
                                    <input
                                        type="text" required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                                        placeholder="John Doe"
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-500 ml-2">Email</label>
                                    <input
                                        type="email" required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                                        placeholder="email@example.com"
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm text-gray-500 ml-2">{t('Message')}</label>
                                    <textarea
                                        rows={5} required
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none"
                                        placeholder={t('Tell us about your project...')}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="md:col-span-2 bg-white text-black font-bold py-5 rounded-2xl text-lg hover:bg-gray-100 transition-colors mt-4 shadow-xl shadow-white/5"
                                >
                                    {t('Send Inquiry')}
                                </motion.button>
                            </form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    )
}