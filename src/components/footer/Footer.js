import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <h3>Questions? Call 647-896-9720</h3>
        <div className="footerContainer">
          <div className="col">
            <span>FAQ</span>
            <span>Investor Relations</span>
            <span>Ways to Watch</span>
            <span>Corporate Information</span>
          </div>
          <div className="col">
            <span>Help Center</span>
            <span>Jobs</span>
            <span>Terms of Use</span>
            <span>Contact Us</span>
          </div>
          <div className="col">
            <span>Account</span>
            <span>Redeem Gift Cards</span>
            <span>Privacy</span>
            <span>Speed Test</span>
          </div>
          <div className="col">
            <span>Media Center</span>
            <span>Buy Gift Cards</span>
            <span>Cookie Prefrences</span>
            <span>Legal Notices</span>
          </div>
        </div>
        <p>Made by Prithvi Sisodia</p>
      </div>
    </div>
  );
};

export default Footer;
