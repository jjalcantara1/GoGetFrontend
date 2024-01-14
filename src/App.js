import Header from "./components/Header";
import Footer from "./components/Footer";
import SelectRoom from "./screens/SelectRoom";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Route path='/product/:id' element={<RoomScreen />}/>
          </Routes>
        </Container>
      </main>
      <Footer />
      </div>
      </div>
    </Router>
  );
}


export default App;
