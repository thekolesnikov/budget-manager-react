import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './pages/HomePage/HomePage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import PalindromPage from './pages/PalindromPage/PalindromPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="history" element={<HistoryPage />} />
                    <Route path="palindrom" element={<PalindromPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
