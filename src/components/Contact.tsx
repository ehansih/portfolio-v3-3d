import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:vardhan.chauhan@icloud.com" data-cursor="disable">
                vardhan.chauhan@icloud.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Noida, India · IST (UTC+5:30)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href="https://github.com/ehansih" target="_blank" data-cursor="disable" className="contact-social">
              Github <MdArrowOutward />
            </a>
            <a href="https://www.linkedin.com/in/harsh-vardhan-75865121/" target="_blank" data-cursor="disable" className="contact-social">
              LinkedIn <MdArrowOutward />
            </a>
            <a href="https://medium.com/@vardhan.chauhan" target="_blank" data-cursor="disable" className="contact-social">
              Medium <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Telecom Security Leader <br /> <span>Harsh Vardhan Singh Chauhan</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
