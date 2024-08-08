import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Container from './components/container'
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Container />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default AppRoutes
