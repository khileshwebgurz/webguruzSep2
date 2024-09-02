import React from "react";
import india from "../../../public/images/india.png";
import uk from "../../../public/images/uk.png";
import usa from "../../../public/images/usa.png";
import Image from "next/image";

const addressdata = [
  {
    img: india,
    title: "India",
    para: "4th Floor, SM Heights, C-205, Phase 8 B, Sector 74 Mohali",
  },
  {
    img: uk,
    title: "UK",
    para: "1st Floor, Lorem, C-234, Phase lp,Lorem Lipsum UK",
  },
  {
    img: usa,
    title: "USA",
    para: "1st Floor, Lorem, C-234, Phase lp,Lorem Lipsum USA",
  },
];

function Addresshome() {
  return (
    <div>
      <section className="adress-main">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main">
              <h3 className="color-wt pb-4">Our Address</h3>
            </div>
          </div>
          <div className="row ">
            {addressdata.map((addressconst, index) => (
              <div className="col col-sm-4 col-xs-12" key={index}>
                <div className="address-card">
                  <Image src={addressconst.img} alt="" />
                  <div className="content">
                    <h5>{addressconst.title}</h5>
                    <p>{addressconst.para}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Addresshome;
