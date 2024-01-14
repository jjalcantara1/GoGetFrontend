import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import AdminPage from './screens/AdminPage';
import RoomTypeDetail from './components/RoomTypeDetail';
import RoomTypeList from './screens/RoomTypeList';
import AddEditRoomType from './components/AddEditRoomType';
import HotelDetails from './components/HotelDetails'
import './bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import SelectRoom from "./screens/SelectRoom";
import { Container } from "react-bootstrap";
import RoomScreen from "./screens/RoomScreen";
import wallpaper from "./wallpaper.jpg";
import "./index.css";

const appStyle = {
  position: 'relative',
  backgroundImage: `url(${wallpaper})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

function App() {
  return (
    <Router>
      <div style={appStyle}>
        <Header />
        <div className="image-overlay">
          <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<SelectRoom />} exact />
            <Route path='/products/:_id' element={<RoomScreen />}/>
            <Route path="/admin" element={<AdminPage />} exact /> 
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/hotels/7" element={<HotelDetails />} />
            <Route path="/roomtypes/:id" element={<RoomTypeDetail />} exact />
            <Route path="/roomtypes/new" element={<AddEditRoomType />} />
            <Route path="/roomtypes/:id/edit" element={<AddEditRoomType />} />
          <Route path="/roomtypes" element={<RoomTypeList />} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
      </div>
      </div>
      <Routes>
      
      </Routes>
    </Router>
  );
}

export default App;
