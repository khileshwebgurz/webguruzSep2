import Image from "next/image";
import Link from "next/link";
import SearchBar from './SearchBar'

const RecentPost = ({ posts }) => {
 
  return (
    <>
      <SearchBar />

      <div className="row blog-image-content">
        <div className="col-sm-6 col-xs-12 image">
          <Image
            src={posts[0].yoast_head_json.schema["@graph"][0].thumbnailUrl}
            alt="img"
            width={700}
            height={340}
          />
        </div>
        <div className="col-sm-6 col-xs-12 content">
          <h3>
            <Link href={`/blog/${posts[0].slug}`}>
              {posts[0].title.rendered}
            </Link>
          </h3>
          <p
            dangerouslySetInnerHTML={{
              __html: posts[0].excerpt.rendered
                .replace(/<p>/g, "")
                .replace(/<\/p>/g, ""),
            }}
          />
          <span className="name">
            {posts[0].yoast_head_json.schema["@graph"][4].image.caption}
          </span>
        </div>
      </div>

      {/* Three recent posts */}
      <div className="row blog-image-content-center py-5">
        {posts.slice(1, 4).map((post, index) => (
          <div className="col-sm-4 col-xs-12" key={index}>
            <span className="name mb-2">
                {post.yoast_head_json.schema["@graph"][4].image.caption}
              </span>
            <div className="image">
              <Image
                src={post.yoast_head_json.schema["@graph"][0].thumbnailUrl}
                alt={`img${index + 1}`}
                width={700}
                height={340}
              />
            </div>
            <div className="content">
              <h3>
                <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.excerpt.rendered
                    .replace(/<p>/g, "")
                    .replace(/<\/p>/g, ""),
                }}
              />
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentPost;
