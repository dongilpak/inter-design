import App from '../App';
import Card1 from '../cards/card1/Card1';
import Card2 from '../cards/card2/Card';
import Card3 from '../cards/card3/Card';

export const RouterInfo = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/card1',
        element: <Card1 />,
    },
    { path: '/card2', element: <Card2 /> },
    { path: '/card3', element: <Card3 /> },
];
