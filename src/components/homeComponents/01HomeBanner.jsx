"use client"
import React, { useState, useRef } from "react";

const HomeBanner = () => {
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState({ website: "" });
  const websiteRef = useRef(null);

  // Domains to validate
  const hasValidDomain =
    /\.(com|net|org|in|edu|gov|mil|int|io|co|us|uk|de|jp|fr|au|br|cn|es|it|nl|ru|se|no|fi|dk|ch|at|be|pt|cz|gr|tr|il|ar|mx|pl|kr|za|nz|ir|hk|sg|my|id|th|tw|vn|ph|eg|pk|sa|ua|bd|ve|ma|ke|tz|ug|sd|dz|ly|mu|zm|zw|ls|sz|bw|na|bi|gw|er|dj|so|km|mg|sc|mz|mw|et|rw|ss|cg|cd|st|tg|ne|gn|bj|td|tg|bf|ng|tg|gh|cm|cf|gq|ao|ml|ga|bj|sn|cv|gm|lr|sl|ci)$/i;

  const validateWebsite = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(url);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleWebsiteBlur = () => {
    const trimmedWebsite = website.trim();
    // Check if website is valid and has a valid domain
    if (hasValidDomain.test(trimmedWebsite)) {
      if (
        !trimmedWebsite.startsWith("http://") &&
        !trimmedWebsite.startsWith("https://")
      ) {
        setWebsite("http://" + trimmedWebsite);
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        website: "Enter a valid URL",
      }));
      if (websiteRef.current) websiteRef.current.focus();
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const websiteError = !validateWebsite(website) ? "Enter a valid URL" : "";

    if (websiteError) {
      setErrors({ website: websiteError });
      if (websiteRef.current) websiteRef.current.focus();
      return;
    }

    // If valid, console the website value
    console.log(`Website entered: ${website}`);
    setWebsite("")
  };

  return (
    <div>
      <section className="home-banner d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 video-banner">
              <video
                autoPlay
                muted
                loop
                preload="auto"
                width={"100%"}
                playsInline
              >
                <source src="/video/baner-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col col-sm-8 col-xs-12 banner-content">
              <h1>
                A{" "}
                <span className="animate-charcter">
                  Website & Mobile App Development Company
                </span>{" "}
                with You in Mind
              </h1>
              <p>Innovative Digital Solutions to Fuel your Growth</p>
              <form className="website-label">
                <input
                  type="text"
                  placeholder="Enter your Website"
                  value={website}
                  onChange={handleWebsiteChange}
                  onBlur={handleWebsiteBlur}
                  ref={websiteRef}
                />
                {errors.website && (
                  <p style={{ color: "red" }}>{errors.website}</p>
                )}
                <button type="button" onClick={handleButtonClick}>
                  Send me a proposal
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBanner;
