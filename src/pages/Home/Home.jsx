import { Helmet } from "react-helmet";
import Banner from "../../componants/Banner/Banner";
import PeakRVLiving from "../../componants/PeakRVLiving/PeakRVLiving";
import RelaxedRVGetaways from "../../componants/RelaxedRVGetaways/RelaxedRVGetaways";
import ImageGallery from "../../componants/ImageGallery/ImageGallery";
import BenifitesReviews from "../../componants/Benifites&Reviews/BenifitesReviews";
import Pricing from "../../componants/Pricing/Pricing";
import ContactUsParkDetails from "../../componants/ContactUsParkDetails/ContactUsParkDetails";
import Faq from "../../componants/Faq/Faq";
import Footer from "../../componants/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RV Park</title>
      </Helmet>
      <Banner />
      <PeakRVLiving />
      <RelaxedRVGetaways />
      <ImageGallery />
      <BenifitesReviews />
      <Pricing />
      <ContactUsParkDetails />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
