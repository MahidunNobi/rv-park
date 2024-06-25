import ContactUs from "./ContactUs/ContactUs";
import ParkInfo from "./ParkInfo/ParkInfo";

const ContactUsParkDetails = () => {
  return (
    <div id="contact-us" className="bg-hunterGreen/10">
      <div className="container mx-auto px-4 py-12 mt-24 mb-12 md:flex md:justify-between gap-6">
        <ParkInfo />
        <ContactUs />
      </div>
    </div>
  );
};

export default ContactUsParkDetails;
