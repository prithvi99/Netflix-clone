import "./signup.css";

import Banner from "./../../components/banner/Banner";
import Section from "./../../components/infoSection/Section";
import Faq from "./../../components/faqs/Faq";
import Footer from "./../../components/footer/Footer";

const Signup = () => {
  return (
    <div className="signup">
      <Banner />
      <Section />
      <Faq />
      <Footer />
    </div>
  );
};

export default Signup;
