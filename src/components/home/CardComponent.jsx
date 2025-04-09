import React from 'react'

function CardComponent({ cards }) {
    return (
        <div className="overflow-x-auto scroll-smooth scrollbar-hide w-[95%] mx-auto">
            <div className="flex gap-4 px-4 w-max">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className="max-w-[200px] sm:max-w-[280px] bg-white p-4 shrink-0 overflow-y-hidden"
                    >
                        {/* card content */}
                        {card}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardComponent