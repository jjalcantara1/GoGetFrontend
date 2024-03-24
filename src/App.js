import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import AboutUs from './screens/AboutUs';
import Faqs from './screens/Faqs';
import AdminPage from './screens/AdminPage';
import HotelDetails from './screens/HotelDetails';
import RoomTypeDetail from './components/RoomTypeDetail';
import RoomDetails from './components/RoomDetails';
import RoomTypeList from './screens/RoomTypeList';
import AddEditRoomType from './components/AddEditRoomType';
import AddRoomPage from './screens/AddRoomPage';
import EditRoomPage from './screens/EditRoomPage';
import './bootstrap.min.css'; 

import Footer from "./components/Footer";
import SelectRoom from "./screens/SelectRoom";
import { Container } from "react-bootstrap";
import RoomScreen from "./screens/RoomScreen";
import wallpaper from "./wallpaper.jpg";
import "./index.css";
import { Provider } from 'react-redux';
import store from './store';
import LoginPage from './screens/LoginPage';
import ProtectedRoute from './utils/ProtectedRoute';
import RoomAvailabilityScreen from './screens/RoomAvailabilityScreen';
import ContactPage from './screens/ContactPage';
import GuestLog from './components/GuestLog';
import OrderScreen from './screens/OrderScreen';
import PromoScreen from './screens/PromoScreen';
import PromoEditScreen from './screens/PromoEditScreen';
import PromoRedeem from './components/PromoRedeem';
import ContactList from './screens/ContactList';



const appStyle = {
  position: 'relative',
  backgroundImage: `url(${wallpaper})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '80vh',
};

const App = () => (
  <Provider store={store}>
    <Router>
      <div style={appStyle}>
        <div className="image-overlay"  >
          <main className="py-3">
        <Container>
          <Routes>
            <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} exact />
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/aboutUs" element={<AboutUs />} exact />
            <Route path="/hotels/1" element={<ProtectedRoute><HotelDetails /></ProtectedRoute>} exact />
            <Route path="/roomtypes/:id" element={<ProtectedRoute><RoomTypeDetail /></ProtectedRoute>} exact />
            <Route path="/roomtypes/new" element={<ProtectedRoute><AddEditRoomType /></ProtectedRoute>} exact />
            <Route path="/roomtypes/:id/edit" element={<ProtectedRoute><AddEditRoomType /></ProtectedRoute>} exact />
            <Route path="/roomtypes" element={<ProtectedRoute><RoomTypeList /></ProtectedRoute>} exact />
            <Route path="/roomtypes/:roomTypeId/rooms" element={<ProtectedRoute><RoomDetails /></ProtectedRoute>} exact />
            <Route path="/roomtypes/:roomTypeId/addroom" element={<ProtectedRoute><AddRoomPage /></ProtectedRoute>} exact />
            <Route path="/rooms/:roomId/edit" element={<ProtectedRoute><EditRoomPage /></ProtectedRoute>} exact />
            <Route path="/booknow" element={<RoomAvailabilityScreen />} />
            <Route path="/FAQs" element={<Faqs />} />
            <Route path="/guestlog" element={<ProtectedRoute><GuestLog /></ProtectedRoute>} exact />
            <Route path="/order" element={<OrderScreen />} />
            <Route path="/promos" element={<ProtectedRoute><PromoScreen /></ProtectedRoute>} exact />
            <Route path="/editPromo" element={<ProtectedRoute><PromoEditScreen /></ProtectedRoute>} exact />
            <Route path="/contact-list" element={<ProtectedRoute><ContactList /></ProtectedRoute>} exact />
          </Routes>
        
        </Container>
        
        <Container>
        
          <Routes>
            <Route path="/selectroom" element={<SelectRoom />} exact />
            <Route path='/selectroom/product/:id' element={<RoomScreen />}/>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/redeem" element={<PromoRedeem/>} />
          </Routes>
        </Container>  



      </main>
      <Footer />
      </div>
      </div>
    </Router>
  </Provider>
);

export default App;
