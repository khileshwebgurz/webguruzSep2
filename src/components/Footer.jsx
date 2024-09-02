import React from "react";
import dcma from "../../public/images/dmca.png";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer-main pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-xs-12 footer-sub one">
            <h5>About</h5>
            <ul>
              <li>
                <Link href="/">Our company</Link>
              </li>
              <li>
                <Link href="/">Core Team</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">CSR</Link>
              </li>
              <li>
                <Link href="/">How We Work</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub two">
            <h5>Services</h5>
            <ul>
              <li>
                <Link href="/">Web Design</Link>
              </li>
              <li>
                <Link href="/">Web Development</Link>
              </li>
              <li>
                <Link href="/">CMS Development</Link>
              </li>
              <li>
                <Link href="/">Digital Marketing</Link>
              </li>
              <li>
                <Link href="/">It Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub">
            <h5>Technologies</h5>
            <ul>
              <li>
                <Link href="/">Blockchain</Link>
              </li>
              <li>
                <Link href="/">Artificial Intelligence</Link>
              </li>
              <li>
                <Link href="/">AR and VR</Link>
              </li>
              <li>
                <Link href="/">Cloud Computing</Link>
              </li>
              <li>
                <Link href="/">Internet of Things</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub">
            <h5>Industries</h5>
            <ul>
              <li>
                <Link href="/">Our company</Link>
              </li>
              <li>
                <Link href="/">Core Team</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">CSR</Link>
              </li>
              <li>
                <Link href="/">How We Work</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub">
            <h5>About</h5>
            <ul>
              <li>
                <Link href="/">Our company</Link>
              </li>
              <li>
                <Link href="/">Core Team</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">CSR</Link>
              </li>
              <li>
                <Link href="/">How We Work</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub">
            <h5>About</h5>
            <ul>
              <li>
                <Link href="/">Our company</Link>
              </li>
              <li>
                <Link href="/">Core Team</Link>
              </li>
              <li>
                <Link href="/">Career</Link>
              </li>
              <li>
                <Link href="/">CSR</Link>
              </li>
              <li>
                <Link href="/">How We Work</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row py-4 border-botm d-flex align-items-center">
          <div className="col-sm-4 col-xs-12 footer-bottom left">
            <p className="mb-0">Statutory legal information</p>
          </div>
          <div className="col-sm-4 col-xs-12 footer-bottom social-icons">
            <ul className="d-flex align-items-center justify-content-center">
              <li className="px-2">
                <a
                  href="https://www.facebook.com/webguruztechnologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <FontAwesomeIcon icon={faFacebook} height={20} />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://twitter.com/Webguruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter profile"
                >
                  <FontAwesomeIcon icon={faXTwitter} height={20} />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                >
                  <FontAwesomeIcon icon={faLinkedin} height={20} />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.instagram.com/webguruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <FontAwesomeIcon icon={faInstagram} height={20} />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.youtube.com/channel/UC-xaX1FJWj40ED-cTm2Lq6w"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Youtube channel"
                >
                  <FontAwesomeIcon icon={faYoutube} height={20} />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://in.pinterest.com/webguruz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Pinterest page"
                >
                  <FontAwesomeIcon icon={faPinterest} height={20} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-xs-12 footer-bottom right">
            <div className="bottom-right-img d-flex align-items-center">
              <Image src={dcma} alt="dcma" />
              <p className="px-2 mb-0">Mobile App & Web Development Company</p>
            </div>
          </div>
        </div>
        <div className="row copyright-btm" >
          <div className="col-sm-7 col-xs-12 copyright">
            <p>
              Copyright @ 2024 Webguruz Technologies Private Limited. || All
              Right Reserved
            </p>
          </div>
          <div className="col-sm-5 col-xs-12 right-privacy">
            <ul className="d-flex align-items-center justify-content-end">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Term & Condition</Link>
              </li>
              <li>
                <Link href="/">SiteMap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
