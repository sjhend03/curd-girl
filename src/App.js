import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBarContainer } from './containers/NavBarContainer/NavBarContainer'
import { HomeContainer } from './containers/HomeContainer/HomeContainer';
import { ContactContainer } from './containers/ContactContainer/ContactContainer';
import { GalleryContainer } from './containers/GalleryContainer/GalleryContainer';
import { MerchContainer } from './containers/MerchContainer/MerchContainer';
import { BookingContainer } from './containers/BookingContainer/BookingContainer';

const App = () => {
  const routes = [{name: 'Home', path:'/', element: <HomeContainer />},
                    {name: 'Booking', path: '/bookus', element: <BookingContainer />},
                    {name: 'Contact', path: '/contact', element: <ContactContainer />},
                    {name: 'Gallery', path: '/gallery', element: <GalleryContainer />},
                    {name: 'Merch', path: '/merch', element: <MerchContainer />}
                   ]
  return (
    <Router>
      <NavBarContainer routes={routes}/>
      <Routes>
        {routes.map((route, index) => <Route key={index} path={route.path} element={route.element}/>)}
      </Routes>
    </Router>
  );
}

export default App;
