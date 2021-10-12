import './App.css';
import FeaturesSection from './components/featuresSection/FeaturesSection';
import Nav from './components/navBar/Nav';
import Swiperslide from './components/SwiperSlide/SwiperSlide';



function App() {
  return (
    <div className="App">
        <Nav />
        <Swiperslide />
        <FeaturesSection />
    </div>
  );
}

export default App;
