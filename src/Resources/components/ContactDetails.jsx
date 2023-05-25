import { SlLocationPin, SlPhone } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import "../CSS/ContactDetails.css";

const ContactDetails = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 lg:px-0 my-24">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex lg:flex-row flex-col justify-evenly items-center gap-10 md:gap-0"
      >
        <div>
          <div className="bg-gray-50 p-5 border rounded shadow-md flex items-center">
            <SlLocationPin className="text-6xl" />
            <div className="ml-6">
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "Alata" }}
              >
                Address
              </h2>
              <p>Plot-0582, Unit-6G, Rawda-2, Ajman, UAE</p>
            </div>
          </div>
          <div className="bg-gray-50 p-5 border rounded shadow-md flex items-center my-6">
            <SlPhone className="text-6xl" />
            <div className="ml-6">
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "Alata" }}
              >
                Phone
              </h2>
              <p>
                <a className="link-hover" href="tel:+971555147420">
                  +971 55 514 7420
                </a>{" "}
                (WhatsApp Available)
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-5 border rounded shadow-md flex items-center">
            <AiOutlineMail className="text-6xl" />
            <div className="ml-6">
              <h2
                className="text-2xl font-semibold mb-2"
                style={{ fontFamily: "Alata" }}
              >
                Email
              </h2>
              <a className="link-hover" href="mailto:info@abcrealestateuae.com">
                dubai@abcrealestateuae.com
              </a>
            </div>
          </div>
        </div>
        <div>
          {/* For larger screen */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28828.54979714465!2d55.55438491107552!3d25.419243064361968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f735caddbd15%3A0xe7172a37a00ee8a9!2sAl%20Bahia%20-%20Ajman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1684919898406!5m2!1sen!2sbd"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-xl hidden md:block"
          />

          {/* For small screen */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28828.54979714465!2d55.55438491107552!3d25.419243064361968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f735caddbd15%3A0xe7172a37a00ee8a9!2sAl%20Bahia%20-%20Ajman%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sbd!4v1684921490260!5m2!1sen!2sbd"
            width={400}
            height={300}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow-xl block md:hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
