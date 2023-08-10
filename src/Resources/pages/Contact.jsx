import PageTitle from "../Hooks/PageTitle";
import ContactBanner from "../components/ContactBanner";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <PageTitle title="Contact Us" />
      <ContactBanner />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default Contact;
