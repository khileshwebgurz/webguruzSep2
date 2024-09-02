import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div>
      <section className="contact-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-xs-12 contact-sub left">
              <p>Get in Touch with</p>
              <h2>Our Experts</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel nunc feugiat, malesuada sapien a, aliquet diam. Vivamus ex
                nisi, pharetra nec ultricie.
              </p>
              <p>Integrate Towards Innovation</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vel nunc feugiat, malesuada sapien a, aliquet diam. Vivamus ex
                nisi, pharetra nec ultricie.
              </p>
              <a href="/" className="partner-btn">
                Become a Partner
              </a>
              <div className="contact-info">
                <h4>Contact Info:</h4>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon"><FontAwesomeIcon icon={faPhone} className="ps-1" /></div>
                    <div className="content">
                      <p>Sales - (+91) 730 700 1777</p>
                      <p>Jobs - (+91) 959 201 6444</p>
                    </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xs-12">
                  <div className="contact-info-sub">
                    <div className="icon"><FontAwesomeIcon icon={faEnvelope} className="ps-1" /></div>
                    <div className="content">
                      <p>Sales - provider@webguruz.in</p>
                      <p>Jobs - careers@webguruz.in</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <form className="contact-right-form">
                <h3>LetGet to know you</h3>
                <label>
                  <input type="text" placeholder="Full Name" />
                </label>
                <label>
                  <input type="text" placeholder="Business Email" />
                </label>
                <label>
                  <input type="number" placeholder="Mobile Number" />
                </label>
                <label>
                  <select>
                    <option>When do you want to launch a solution?</option>
                    <option>When do you want to launch a solution?</option>
                    <option>When do you want to launch a solution?</option>
                    <option>When do you want to launch a solution?</option>
                    <option>When do you want to launch a solution?</option>
                  </select>
                </label>
                <label>
                  <textarea placeholder="About Project"></textarea>
                </label>
                <button type="button" value="Submit" >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
