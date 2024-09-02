"use client";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import homeTabData from "../../utils/03utilHomeTab"; // Adjust the import path as necessary

const HomeTab = () => {
  return (
    <section className="tab-main py-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-xs-12 heading-main text-center pb-5">
            <p>Your Vision, Our Expertise - Boundless Possibilities</p>
            <h3>
              Unique, Dynamic & Scalable - is
              <span> how we craft our solutions</span>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <Tabs
              defaultActiveKey="experts"
              id="uncontrolled-tab-example"
              className="pb-5"
            >
              {homeTabData.map((tab) => (
                <Tab
                  eventKey={tab.eventKey}
                  title={tab.title}
                  key={tab.eventKey}
                >
                  <div className="image-content d-flex justify-content-between column-gap-5">
                    <div className="content">
                      {tab.content.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                      <Link className="about--btn" href={tab.link.href} aria-label="Tabber links">
                        {tab.link.text} <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
                    <div className="image">
                      <Image
                        src={tab.imageSrc}
                        alt={tab.title}
                          width={643}
                          height={569}
                        style={{height:"100%", width:"100%"}}
                        priority
                      />
                    </div>
                  </div>
                </Tab>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTab;
