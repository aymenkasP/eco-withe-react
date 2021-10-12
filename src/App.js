import './App.css';
import FeaturesSection from './components/featuresSection/FeaturesSection';
import LatestProductsSection from './components/Latest Products/LatestProductsSection';
import Nav from './components/navBar/Nav';
import Swiperslide from './components/SwiperSlide/SwiperSlide';



function App() {
  return (
    <div className="App">
        <Nav />
        <Swiperslide />
        <FeaturesSection />
        <LatestProductsSection />
    </div>
  );
}

export default App;
