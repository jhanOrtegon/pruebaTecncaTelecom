import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginV from '../views/Login';
import Dashboard from './Dashboard';
import PrivteRouters from './PrivteRouters';
import PublicRouters from './PublicRouters';
import { Fondo } from './styled';

const AppRouter = () => {
    return (
        // <Fondo>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <PublicRouters>
                        <LoginV />
                    </PublicRouters>
                } />

                <Route path='/*'
                    element={
                        <PrivteRouters>
                            <Dashboard />
                        </PrivteRouters>
                    }
                />
            </Routes>
        </BrowserRouter>
        // </Fondo>
    )
}

export default AppRouter;