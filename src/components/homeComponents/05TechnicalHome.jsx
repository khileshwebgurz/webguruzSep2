import React from "react";
import Image from "next/image";
import techMain from "@/utils/05utilTechHome";


const splitTitle = (title) => {
  const parts = title.split(/<span>(.*?)<\/span>/);
  return (
    <h4>
      {parts.map((part, index) =>
        index % 2 === 1 ? <span key={index}>{part}</span> : part
      )}
    </h4>
  );
};

const TechnicalHome = () => {
  return (
    <div>
      <section className="technical-main py-5">
        <div className="container">
          <div className="row py-0">
            <div className="col-sm-12 col-xs-12 heading-main text-center">
              <h3 className="mb-3">
                Our <span>Technical Expertise</span>
              </h3>
            </div>
          </div>
          {techMain.map((techmain, index) => (
            <div className="row d-flex align-items-center" key={index}>
              <div className="card-content">
                <div className="col-sm-6 col-xs-12 image">
                  <Image src={techmain.img} alt="tech-1.png" style={{height:"auto",width:"100%"}}  loading="lazy"/>
                </div>
                <div className="col-sm-6 col-xs-12 content">
                  {splitTitle(techmain.title)}
                  <p>{techmain.para}</p>
                  <ul className="logos-main">
                    <li>
                      <Image src={techmain.img1} alt="hubspot" style={{height:"auto",width:"auto"}} loading="lazy"/>
                    </li>
                    <li>
                      <Image src={techmain.img2} alt="klavio" style={{height:"auto",width:"auto"}} loading="lazy"/>
                    </li>
                    <li>
                      <Image src={techmain.img3} alt="salesforce" style={{height:"auto",width:"auto"}} loading="lazy"/>
                    </li>
                    <li>
                      <Image src={techmain.img4} alt="marketo" style={{height:"auto",width:"auto"}} loading="lazy" />
                    </li>
                    <li>
                      <Image src={techmain.img5} alt="servicemax" style={{height:"auto",width:"auto"}} loading="lazy"/>
                    </li>
                    <li>
                      <Image src={techmain.img6} alt="constrant" style={{height:"auto",width:"auto"}} loading="lazy"/>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechnicalHome;
