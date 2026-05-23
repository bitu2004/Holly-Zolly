import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VastuSpiritualCategories from './components/VastuSpiritualCategories/VastuSpiritualCategories';
import PopularVastuCollection from './components/PopularVastuCollection/PopularVastuCollection';
import NewVastuArrivals from './components/NewVastuArrivals/NewVastuArrivals';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ExpertConsultation from './components/ExpertConsultation/ExpertConsultation';
import TrustStrip from './components/TrustStrip/TrustStrip';
import CustomerReviews from './components/CustomerReviews/CustomerReviews';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="app-shell">
      <div className="app-backdrop" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <VastuSpiritualCategories />
        <PopularVastuCollection />
        <NewVastuArrivals />
        <ProductShowcase />
        <WhyChooseUs />
        <ExpertConsultation />
        <TrustStrip />
        <CustomerReviews />
      </main>
      <Footer />
    </div>
  );
}
