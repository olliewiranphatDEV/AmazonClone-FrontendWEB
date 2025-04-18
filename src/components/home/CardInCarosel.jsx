import React from 'react'



function CardInCarosel({ cards }) {
    console.log('cards', cards);

    return (
        <div className="overflow-x-auto scroll-smooth scrollbar-hide w-[95%] absolute top-[50%] z-10 mx-auto left-[11px] sm:left-[31px]">
            <div className="flex gap-4 px-4 w-max">
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className="max-w-[200px] sm:max-w-[280px] max-h-[330px] sm:max-h-[350px] bg-white p-4 shrink-0 overflow-y-hidden"
                    >
                        {/* card content */}
                        {card}
                    </div>
                ))}
            </div>
        </div>

    )
}

export default CardInCarosel