import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cakes from './pages/Cakes/Cakes';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/cakes"
                    element={<Cakes />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
