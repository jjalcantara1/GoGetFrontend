import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import AdminPage from './screens/AdminPage';
import RoomTypeDetail from './components/RoomTypeDetail';
import RoomDetails from './components/RoomDetails';
import RoomTypeList from './screens/RoomTypeList';
import AddEditRoomType from './components/AddEditRoomType';
import AddRoomPage from './screens/AddRoomPage';
import EditRoomPage from './screens/EditRoomPage';
import HotelDetails from './components/HotelDetails'
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

const appStyle = {
  position: 'relative',
  backgroundImage: `url(${wallpaper})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
};

const App = () => (
  <Provider store={store}>
    <Router>
      <div style={appStyle}>
        <div className="image-overlay"  >
          <main className="py-3">
        <Container>
          <Routes>
            <Route path="/admin" element={<AdminPage />} exact /> 
            <Route path="/home" element={<LandingPage />} exact />*/
            <Route path="/hotels/1" element={<HotelDetails />} />
            <Route path="/roomtypes/:id" element={<RoomTypeDetail />} exact />
            <Route path="/roomtypes/new" element={<AddEditRoomType />} />
            <Route path="/roomtypes/:id/edit" element={<AddEditRoomType />} />
            <Route path="/roomtypes" element={<RoomTypeList />} exact />
            <Route path="/roomtypes/:roomTypeId/rooms" element={<RoomDetails />} />
            <Route path="/roomtypes/:roomTypeId/addroom" element={<AddRoomPage />} />
            <Route path="/rooms/:roomId/edit" element={<EditRoomPage />} />
          </Routes>
        
        </Container>
        
        <Container>
        
          <Routes>
            <Route path="/selectroom" element={<SelectRoom />} exact />
            <Route path='/products/:_id' element={<RoomScreen />}/>
            <Route path="/login" element={<LoginPage />} />
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
