import React from "react";
import blogone from "../../../public/images/blogone.png";
import blogtwo from "../../../public/images/blogtwo.png";
import blogthree from "../../../public/images/blogthree.png";
import Image from "next/image";
import Link from "next/link";
const Blogcontent = [
  {
    img: blogone,
    tag: "Blog",
    title:
      "Home Services Apps - The Future Of Tomorrow | App Development Guide",
    btn: "Read More",
  },
  {
    img: blogtwo,
    tag: "Blog",
    title:
      "Home Services Apps - The Future Of Tomorrow | App Development Guide",
    btn: "Read More",
  },
];

const righttblog = [
  {
    img: blogthree,
    tag: "Blog",
    title:
      "Home Services Apps - The Future Of Tomorrow | App Development Guide",
    btn: "Read More",
  },
];

const Featuredblog = () => {
  return (
    <div>
      <section className="featured-blog py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center mb-5">
              <h3 className="pb-3">
                Featured <span>Blog</span>{" "}
              </h3>
              <p>
                Using the latest technology and industry expertise, we built
                top-end Android and iOS-based applications that add value to the
                business and user experience.
              </p>
            </div>
          </div>
          <div className="row blog-card-content">
            <div className="col-sm-6 col-xs-12 blog-sub left">
              {Blogcontent.map((Blogcont, index) => (
                <div className="blog-card" key={index}>
                  <div className="blogimage">
                    <Image
                      src={Blogcont.img}
                      alt=""
                      style={{  }}
                    />
                  </div>
                  <div className="blog-content">
                    <span className="mb-4">{Blogcont.tag} </span>
                    <h4>{Blogcont.title}</h4>
                    <Link className="explore-btn" href="/">
                      {Blogcont.btn}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-sm-6 col-xs-12 blog-sub right">
              {righttblog.map((Blogcont, index) => (
                <div className="blog-card" key={index}>
                  <div className="blogimage">
                    <Image
                      src={Blogcont.img}
                      alt=""
                      style={{  }}
                    />
                  </div>
                  <div className="blog-content">
                    <span>{Blogcont.tag} </span>
                    <h4>{Blogcont.title}</h4>
                    <Link className="explore-btn" href="/">
                      {Blogcont.btn}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featuredblog;