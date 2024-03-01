import App from '../App';
import Card1 from '../cards/card1/Card1';
import Card from '../cards/card2/Card';

export const RouterInfo = [
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/card1',
        element: <Card1 />,
    },
    { path: '/card2', element: <Card /> },
];
