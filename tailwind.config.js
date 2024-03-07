/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'lossless-youths':
                    "url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')",
                'estrange-bond': "url('https://i.redd.it/tc0aqpv92pn21.jpg')",
                'gate-keeper':
                    "url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')",
                'last-trace':
                    "url('https://images7.alphacoders.com/878/878663.jpg')",
                'urban-decay':
                    "url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')",
                migration:
                    "url('https://da.se/app/uploads/2015/09/simon-december1994.jpg')",
            },
            keyframes: {
                show: {
                    '0%': {
                        filter: 'blur(5px)',
                        transform: 'translateY(calc(-50% + 75px))',
                    },
                    '100%': {
                        opacity: '1',
                        filter: 'blur(0)',
                    },
                },
            },
            animation: {
                show: 'show .75s ease-in-out .3s forwards',
            },
        },
    },
    plugins: [],
};
