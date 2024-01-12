import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import AdminPage from './screens/AdminPage';
import RoomTypeDetail from './components/RoomTypeDetail';
import RoomTypeList from './screens/RoomTypeList';
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
      <Route path="/roomtypes/new" element={<AddEditRoomType />} />
      <Route path="/roomtypes/:id/edit" element={<AddEditRoomType />} />
      <Route path="/roomtypes" element={<RoomTypeList />} exact />
      </Routes>
    </Router>
  );
}

export default App;
