import React from "react"

export default function PortfolioItem({ title, category, description }) {

    return (
        <div
            className="bg-black flex flex-col h-full w-full border-1 border-white/10 hover:border-white/100 transition-border duration-300"
            style={{ minHeight: 480 }}
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
                <img
                    src="/placeholder.svg"
                    alt=""
                    className="hover:scale-105 transition-transform duration-300"
                    style={{
                        width: 80,
                        height: 80,
                        opacity: 0.5,
                        objectFit: "contain"
                    }}
                />
            </div>
            <div style={{ padding: '40px 30px' }}>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{category}</div>
                <h3 className="text-2xl font-bold tracking-tight text-white">{title}</h3>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
        </div>
    )
}
