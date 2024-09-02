import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
// import { getFetchedData } from "../../../../lib/getFetchedData";
// import '../../blogs/blogs.css'

function normalizeString(str) {
  return str.toLowerCase().replace(/-/g, " ").replace(/\s+/g, " ").trim();
}

async function getPost(selectedCategory) {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/getdata`); // This should return the array of posts directly
  const { data } = await res.json();

  if (!data || data.length === 0) {
    return null;
  }

  const category = normalizeString(selectedCategory?.category || "");

  const filteredPosts = data.filter((post) => {
    const postTags = post.acf.list_all_category.map((tag) =>
      normalizeString(tag)
    );
    return postTags.includes(category);
  });

  return filteredPosts;
}

const page = async ({ params }) => {
  const selectedCategory = params;

  const posts = await getPost(selectedCategory);

  if (!posts) {
    notFound();
  }
  return (
    <>
      <section className="blog-categories">
        <div className="container">
          <div className="row">
            {posts.map((post, index) => (
              <div key={index} className="col-sm-4 col-xs-12">
                <div className="blog-card-sub">
                  <div className="image">
                    <Image
                      src={
                        post.yoast_head_json.schema["@graph"][0].thumbnailUrl
                      }
                      alt={post.title}
                      width={700}
                      height={340}
                    />
                  </div>

                  <div className="content">
                    <h5 className="pb-4">{post.title.rendered}</h5>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered
                          .replace(/<p>/g, "")
                          .replace(/<\/p>/g, ""),
                      }}
                    />
                    <Link
                      href={`/blog/${post.slug}`}
                      className="link-btn about--btn"
                    >
                      Read More{" "}
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="arrow-right"
                        className="svg-inline--fa fa-arrow-right ps-1"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
