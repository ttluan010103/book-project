import App from '../App';
import DetailProduct from '../pages/DetailProduct';
import LoginUser from '../pages/LoginUser';
import RegisterUser from '../pages/RegisterUser';

const routes = [
    {
        path: '/',
        component: <App />,
    },
    {
        path: 'product/:id',
        component: <DetailProduct />,
    },
    {
        path: '/login',
        component: <LoginUser />,
    },
    {
        path: '/register',
        component: <RegisterUser />,
    },
];

export default routes;
