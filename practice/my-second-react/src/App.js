import { Route,Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupsPage from "./pages/NewMeetups";

function App() {
  return (
      <Routes>
        <Route path="/" element={<AllMeetupsPage />}/>
        <Route path='/favourites' element={<FavouritesPage />}/>
        <Route path='/new-meetup' element={<NewMeetupsPage />}/>
      </Routes>
  );
}

export default App;
