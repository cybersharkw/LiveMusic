import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import App from '../../app.jsx'

const Home = lazy(()=> import('../../view/home/home.jsx'))
const Gift = lazy(() => import('../../view/gift/gift.jsx'));
//const AboutMe = lazy(() => import('../../view/aboutMe/aboutMe.jsx'));

const routes = [

    {
        path:'/',
        element: <App />,
        children: [
            {index: true , element: <Home />},
            {path: 'gift', element: <Gift /> },  
           // {path: 'aboutMe', element: <AboutMe />},


        ],

    },

];

export const router = createBrowserRouter(routes) 