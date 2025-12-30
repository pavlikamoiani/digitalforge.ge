import React from "react"
import { motion } from "framer-motion"

export default function PortfolioItem({ title, category, description, image, index, link }) {
    return (
        <motion.div
            className="group cursor-pointer"
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
        >
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-[#111]">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                        whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs text-white uppercase tracking-widest mb-4 inline-block">
                                {category}
                            </span>
                        </div>
                    </div>
                    <div className="absolute top-6 left-6 group-hover:opacity-0 transition-opacity">
                        <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-gray-300 uppercase tracking-widest">
                            {category}
                        </span>
                    </div>
                </div>
                <div className="mt-8 space-y-2">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {title}
                        </h3>
                        <div className="h-px flex-grow mx-4 bg-white/5 group-hover:bg-blue-500/30 transition-all duration-700" />
                        <svg
                            width="24" height="24" viewBox="0 0 24 24" fill="none"
                            className="text-white group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <p className="text-gray-500 text-base leading-relaxed max-w-[90%]">
                        {description}
                    </p>
                </div>
            </a>
        </motion.div>
    )
}