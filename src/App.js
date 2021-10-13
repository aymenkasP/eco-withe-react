import './App.css';
import FeaturesSection from './components/featuresSection/FeaturesSection';
import LatestProductsSection from './components/Latest Products/LatestProductsSection';
import Nav from './components/navBar/Nav';
import Swiperslide from './components/SwiperSlide/SwiperSlide';
import ProductsSection from './components/productSection/ProductsSection'



function App() {
  return (
    <div className="App">
        <Nav />
        <Swiperslide />
        <FeaturesSection />
        <LatestProductsSection />
        <ProductsSection />
    </div>
  );
}

export default App;
