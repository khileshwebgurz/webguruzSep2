"use client";
import React from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const AllPost = ({ posts, currentPage, totalPages }) => {
  const router = useRouter();

  const categoryLinks = {
    "artificial-intelligence": "/categories/artificial-intelligence",
    "blogging": "/categories/blogging",
    "brand-marketing": "/categories/brand-marketing",
    "content-marketing": "/categories/content-marketing",
    "digital-marketing": "/categories/digital-marketing",
    ecommerce: "/categories/ecommerce",
    "email-marketing": "/categories/email-marketing",
    "facebook-marketing": "/categories/facebook-marketing",
    frameworks: "/categories/frameworks",
    "full-stack-javascript-development":
      "/categories/full-stack-javascript-development",
    "google-remarketing": "/categories/google-remarketing",
    hubspot: "/categories/hubspot",
    infographic: "/categories/infographic",
    infusionsoft: "/categories/infusionsoft",
    "internet-marketing": "/categories/internet-marketing",
    "ios-app": "/categories/ios-app",
    "iphone-app-development": "/categories/iphone-app-development",
    "java-development": "/categories/java-development",
    joomla: "/categories/joomla",
    "linkedin-marketing": "/categories/linkedin-marketing",
    "logo-design": "/categories/logo-design",
    magento: "/categories/magento",
    "main-post": "/categories/main-post",
    "mobile-application-development":
      "/categories/mobile-application-development",
    "office-culture": "/categories/office-culture",
    "online-reputation-management": "/categories/online-reputation-management",
    orm: "/categories/orm",
    "paid-marketing": "/categories/paid-marketing",
    php: "/categories/php",
    seo: "/categories/seo",
    shopify: "/categories/shopify",
    "social-media-marketing": "/categories/social-media-marketing",
    "titanium-development": "/categories/titanium-development",
    "web-application-development": "/categories/web-application-development",
    "web-design": "/categories/web-design",
    "web-developments": "/categories/web-developments",
    wordpress: "/categories/wordpress",
  };

  const handlePageChange = (newPage) => {
    if (newPage === 1) {
      router.push("/blogs");
    } else {
      router.push(`/blogs/page/${newPage}/`);
    }
  };
  return (
    <>
      <div className="row bog-post-main">
        <div className="col-sm-12 col-xs-12 heading-main mb-4">
          <h3>Latest <span>Posts</span></h3>
        </div>
        <div className="col-sm-8 col-xs-12 bog-post bottom">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className="blog-image-content ">
                <div className="image">
                  <Image
                    src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                    alt={post.title.rendered}
                    width={700}
                    height={340}
                  />
                </div>
                <div className="content">
                  <span className="technology">Software Development</span>
                  <h4>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title.rendered}
                    </Link>
                  </h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered
                        .replace(/<p>/g, "")
                        .replace(/<\/p>/g, ""),
                    }}
                  />
                  <span className="name">
                    {/* {post.yoast_head_json.schema["@graph"][4].image.caption}{" "} */}
                    <span className="date">
                      {post.yoast_head_json.schema[
                        "@graph"
                      ][0].datePublished.slice(0, 10)}
                    </span>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p>No matching posts found</p>
          )}
        </div>
        <div className="col-sm-4 col-xs-12">
          <div className="categories">
            <h4>Categories</h4>
            <ul>
              {Object.keys(categoryLinks).map((category) => (
                <li key={category}>
                  <Link href={categoryLinks[category]}>
                    {category.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-xs-12 pagination-number">
            <ul className="d-flex align-items-center justify-content-center">
              <li className="btn-no-color">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                >
                  Prev
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index}>
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={index + 1 === currentPage ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="btn-no-color">
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllPost;
