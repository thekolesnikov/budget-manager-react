import { Outlet } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

function MainLayout() {
    return (
        <div>
            <NavMenu />
            <main className="container">
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
