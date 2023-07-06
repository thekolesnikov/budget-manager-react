import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="history" element={<HistoryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
