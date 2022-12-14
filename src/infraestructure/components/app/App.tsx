import { Route, Routes, Navigate } from "react-router-dom";
import Favorites from "../../../features/favorites/components/pages/favorites";
import MovieDetails from "../../../features/movies/components/pages/moviedetails";

import { initializeFirebaseApp } from "../../services/firebase";
import Layout from "../layout/layout/layout";
import Home from "../pages/home";

function App() {
    initializeFirebaseApp();

    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/movies/:movieId" element={<MovieDetails />} />
                <Route path="*" element={<Navigate replace to="/" />}></Route>
            </Routes>
        </Layout>
    );
}

export default App;
