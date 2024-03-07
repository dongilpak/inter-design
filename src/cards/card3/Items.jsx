const Item = ({ listOrder }) => {
    console.log(listOrder);
    const listData = [
        { title: 'Lossless Youths', image: 'bg-lossless-youths' },
        { title: 'Estrange Bond', image: 'bg-estrange-bond' },
        { title: 'The Gate Keeper', image: 'bg-gate-keeper' },
        { title: 'Last Trace Of Us', image: 'bg-last-trace' },
        { title: 'Urban Decay', image: 'bg-urban-decay' },
        { title: 'The Migration', image: 'bg-migration' },
    ];
    // [&${listOrder[i]}]:left-1/2 [&:nth-child(4)]:left-[calc(50%+220px)][&:nth-child(5)]:left-[calc(50%+440px)] [&:nth-child(6)]:left-[calc(50%+660px)] [&:nth-child(6)]:opacity-0[&:nth-of-type(2)_.content]:block [&:nth-of-type(2)_.content]:animate-show[&>:nth-child(1)]:left-0 [&>:nth-child(1)]:top-0 [&>:nth-child(1)]:w-full [&>:nth-child(1)]:h-full [&>:nth-child(1)]:transform-none [&>:nth-child(1)]:rounded-none [&>:nth-child(1)]:shadow-none [&>:nth-child(1)]:opacity-100 [&>:nth-child(2)]:left-0 [&>:nth-child(2)]:top-0 [&>:nth-child(2)]:w-full [&>:nth-child(2)]:h-full [&>:nth-child(2)]:transform-none [&>:nth-child(2)]:rounded-none [&>:nth-child(2)]:shadow-none [&>:nth-child(2)]:opacity-100

    return (
        <ul className='slider'>
            {listData.map((item, i) => (
                <li
                    key={item.title}
                    className={`${listOrder[i]} ${item.image} ${
                        listOrder[i] === 'one' || listOrder[i] === 'two'
                            ? 'left-0 top-0 w-full h-full transform-none rounded-none shadow-none opacity-100'
                            : ''
                    } ${listOrder[i] === 'one' ? 'z-0' : ''} ${
                        listOrder[i] === 'two' ? 'z-10' : ''
                    } ${listOrder[i] === 'three' ? 'left-1/2 z-20' : ''} ${
                        listOrder[i] === 'four'
                            ? 'left-[calc(50%+220px)] z-20'
                            : ''
                    } ${
                        listOrder[i] === 'five'
                            ? 'left-[calc(50%+440px)] z-20'
                            : ''
                    } ${
                        listOrder[i] === 'six'
                            ? 'left-[calc(50%+660px)] opacity-0'
                            : ''
                    } w-48 h-72 absolute top-1/2 -translate-y-1/2 bg-center bg-cover rounded-2xl shadow-[0_20px_30px_rgba(255,255,255,0.3)_inset] transition-[transform,left,top,width,height] duration-[.1s,.75s,.75s,.75s,.75s] ${
                        listOrder[i] === 'two' ? '*:block *:animate-show' : ''
                    }`}
                >
                    <div className='content w-[min(30vw,400px)] absolute top-1/2 left-12 -translate-y-1/2 text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)] opacity-0 hidden font-normal text-sm'>
                        <h2 className='uppercase'>&quot;{item.title}&quot;</h2>
                        <p className='description text-[.8rem] leading-[1.7] mx-0 mt-4 mb-6'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Tempore fuga voluptatum, iure corporis
                            inventore praesentium nisi. Id laboriosam ipsam
                            enim.
                        </p>
                        <button className='w-fit bg-[rgba(0,0,0,0.1)] text-white border-2 border-solid border-white rounded-[.25rem] p-3 cursor-pointer'>
                            Read More
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default Item;
