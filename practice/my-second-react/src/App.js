import { Route,Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <><MainNavigation />
    <div>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
        <Route path='/new-meetup' element={<NewMeetupsPage />} />
      </Routes>
    </div></>
  );
}

export default App;
