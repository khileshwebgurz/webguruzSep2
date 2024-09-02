import React from "react";
import {
  HealthCareIcon,
  FinanceIcon,
  EcommerceIcon,
  RestaurantIcon,
  TravelIcon,
  EntertainmentIcon,
  HealthCare,
  Finance,
  Ecommerce,
  Restaurant,
  Travel,
  Entertainment,
} from "../../utils/SVGIcons";

const customizeContent = [
  { Icon: HealthCareIcon, title: "HealthCare" },
  { Icon: FinanceIcon, title: "Finance" },
  { Icon: EcommerceIcon, title: "Ecommerce" },
  { Icon: RestaurantIcon, title: "Restaurant" },
  { Icon: TravelIcon, title: "Travel" },
  { Icon: EntertainmentIcon, title: "Entertainment" },
  { Icon: HealthCare, title: "HealthCare" },
  { Icon: Finance, title: "Finance" },
  { Icon: Ecommerce, title: "Ecommerce" },
  { Icon: Restaurant, title: "Restaurant" },
  { Icon: Restaurant, title: "Restaurant" },
  { Icon: Restaurant, title: "Restaurant" },
  { Icon: Travel, title: "Travel" },
  { Icon: Entertainment, title: "Entertainment" },
  { Icon: Entertainment, title: "Entertainment" },
];

const CustomizeHome = () => {
  return (
    <div>
      <section className="customized-approach">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h3>
                A Unified Vision That Caters To
                <span>Diverse Industry Demands</span>
              </h3>
            </div>
          </div>

          <div className="row diverse-main px-2">
            {customizeContent.map(({ Icon, title }, index) => (
              <div className="col col-xs-12" key={index}>
                <div className="icon-content text-center">
                  <Icon />
                  <p className="text-center">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomizeHome;
