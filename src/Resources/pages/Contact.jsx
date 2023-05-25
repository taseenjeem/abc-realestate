import PageTitle from "../Hooks/PageTitle";
import ContactBanner from "../components/ContactBanner";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <div>
      <PageTitle title="Contact Us" />
      <ContactBanner />
      <ContactDetails />
    </div>
  );
};

export default Contact;
