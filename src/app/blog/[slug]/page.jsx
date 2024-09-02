import Image from "next/image";
import { notFound } from "next/navigation";

import "../../blogs/blogs.css";
export async function generateStaticParams() {
  const res  = await fetch(`${process.env.NEXTAUTH_URL}/api/getdata`);
  const {data} = await res.json();
  return data.map((post) => ({ slug: post.slug }));
}
const page = async ({ params }) => {
  const { slug } = params;

  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/getdata`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  const {data} = await response.json();
  const post = data.find((p) => p.slug === slug);

  console.log('my post is >>>>>>>>>>',post)
  if (!post) {
    notFound();
  }


  
  return (
    <>
      <section className="blog-single-post">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
              <Image
                src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt="Card image cap"
                priority
                width={825}
                height={431}
                className="featured-main"
              />
              <div className="second">
                <Image
                  src={post.yoast_head_json.schema["@graph"][4].image.url}
                  priority
                  height={50}
                  width={50}
                  alt="logo"
                />
                <h4>
                  By {post.yoast_head_json.schema["@graph"][4].image.caption}
                </h4>
                <h4>
                  {post.yoast_head_json.schema["@graph"][0].datePublished.slice(
                    0,
                    10
                  )}
                </h4>
              </div>
              <h2>{post.title.rendered}</h2>
              {post.acf.post_inner_details &&
                post.acf.post_inner_details.length > 0 && (
                  <div className="inner-description">
                    {post.acf.post_inner_details.map((detail, index) => (
                      <div key={index}>
                        {detail.heading && <h4>{detail.heading}</h4>}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: detail.description,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
