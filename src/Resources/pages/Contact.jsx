import PageTitle from "../Hooks/PageTitle";
import ContactBanner from "../components/ContactBanner";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="lg:mt-[88px]">
      <PageTitle title="Contact Us" />
      <ContactBanner />
      <ContactDetails />
      <ContactForm />
    </div>
  );
};

export default Contact;
