import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import AdminPage from './screens/AdminPage';
import RoomTypeDetail from './components/RoomTypeDetail';
import RoomTypeList from './components/RoomTypeList';
import AddEditRoomType from './components/AddEditRoomType';
import HotelDetails from './components/HotelDetails'
import './bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/admin" element={<AdminPage />} exact /> 
      <Route path="/" element={<LandingPage />} exact />
      <Route path="/hotels/7" element={<HotelDetails />} />
      <Route path="/roomtypes/:id" element={<RoomTypeDetail />} exact />
      <Route path="/add-room-type" element={<AddEditRoomType />} exact />
      <Route path="/edit-room-type/:id" element={<AddEditRoomType />} exact />
      <Route path="/roomtypes" element={<RoomTypeList />} exact />
      </Routes>
    </Router>
  );
}

export default App;
