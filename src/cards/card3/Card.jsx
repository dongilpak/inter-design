import { useState } from 'react';
import Item from './Items';

const Card = () => {
    // const listData = [
    //     { title: 'Lossless Youths', image: 'bg-lossless-youths' },
    //     { title: 'Estrange Bond', image: 'bg-estrange-bond' },
    //     { title: 'The Gate Keeper', image: 'bg-gate-keeper' },
    //     { title: 'Last Trace Of Us', image: 'bg-last-trace' },
    //     { title: 'Urban Decay', image: 'bg-urban-decay' },
    //     { title: 'The Migration', image: 'bg-migration' },
    // ];

    const [listOrder, setListOrder] = useState([
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
    ]);

    // const listOrder = ['one', 'two', 'three', 'four', 'five', 'six'];

    const handlePrev = () => {
        const prev = listOrder.shift();
        setListOrder([...listOrder, prev]);
    };

    const handleNext = () => {
        const next = listOrder.pop();
        setListOrder([next, ...listOrder]);
    };

    return (
        <main className='relative w-full h-screen grid place-items-center'>
            <Item listOrder={listOrder} />

            <nav className='absolute flex bottom-8 left-1/2 -translate-x-1/2 z-20 select-none'>
                <div
                    onClick={handlePrev}
                    className='bg-white/50 text-black/70 border-2 border-solid border-black/60 mx-1 p-3 rounded-full cursor-pointer hover:bg-white/30 prev'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18'
                        />
                    </svg>
                </div>
                <div
                    onClick={handleNext}
                    className='bg-white/50 text-black/70 border-2 border-solid border-black/60 mx-1 p-3 rounded-full cursor-pointer hover:bg-white/30 next'
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
                        />
                    </svg>
                </div>
            </nav>
        </main>
    );
};

export default Card;
