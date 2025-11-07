import React from "react"
import { motion } from "framer-motion"

export default function PortfolioItem({ title, category, description, image }) {

    return (
        <motion.div
            className="bg-black flex flex-col h-full w-full border-1 border-white/10 hover:border-white/100 transition-border duration-300"
            style={{ minHeight: 480 }}
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 60 }}
            whileHover={{ scale: 1.025, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
        >
            <div
                className="flex items-center justify-center"
                style={{
                    background: "#ebebeb",
                    height: 400,
                    maxWidth: 650,
                    position: "relative"
                }}
            >
                <motion.img
                    src={image || "/placeholder.svg"}
                    alt=""
                    className="transition-transform duration-300"
                    style={{
                        width: 80,
                        height: 80,
                        opacity: 0.5,
                        objectFit: "contain"
                    }}
                    whileHover={{ scale: 1.12, rotate: 6, opacity: 0.7 }}
                    transition={{ type: "spring", stiffness: 120, damping: 10 }}
                />
            </div>
            <div style={{ padding: '40px 30px' }}>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{category}</div>
                <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
        </motion.div>
    )
}
