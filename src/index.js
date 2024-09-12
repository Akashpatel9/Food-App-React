import ReactDom from 'react-dom/client';
import '../public/index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/ReactRoutes.js';

ReactDom.createRoot(document.querySelector("#root"))
    .render(
        <>
            <RouterProvider router={router}/>
        </>
    );
