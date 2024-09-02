import React from "react";
import SlotCounter from "react-slot-counter";

const CounterHome = () => {
  return (
    <div>
      <section className="counter-main py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center pb-4">
              <h3>
                Our <span>Work</span>
              </h3>
              <p>
                Lorem  simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been thestandard dummy
                text ever since the 1500s
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col col-xs-12">
              <label>
                <SlotCounter value={["1", "7", "+"]} />
                <p>Years of Experience</p>
              </label>
            </div>
            <div className="col col-xs-12">
              <label>
                <SlotCounter value={["8", "0", "0", "+"]} />
                <p>Case Studies</p>
              </label>
            </div>
            <div className="col col-xs-12">
              <label>
                <SlotCounter value={["5", "M", "+"]} />
                <p>Keywords Ranked</p>
              </label>
            </div>
            <div className="col col-xs-12">
              <label>
                <SlotCounter value={["5", "K", "+"]} />
                <p>Reviews</p>
              </label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CounterHome;
