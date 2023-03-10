import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
