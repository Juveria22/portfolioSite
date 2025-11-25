import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data/posts.json")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error loading posts:", err));
  }, []);

  return (
  <div className="min-h-screen bg-mocha pt-20 pb-20 px-6 relative">

    <h1 className="text-center text-4xl font-bold text-light-sage mb-12">
      Juvi’s Journal
    </h1>

    <div className="max-w-3xl mx-auto space-y-10 ">
      {posts.map((post) => (
        <Link
          key={post.slug}
          to={`/blog/${post.slug}`}
          className="block transform transition hover:scale-[1.01]"
        >
          <div
            className="
              p-8 rounded-3xl shadow-md leading-relaxed 
              bg-matcha
              hover:bg-[var(--color-matcha)]/30
              transition-colors duration-300
              pixel-bubble
            "
          >
            <h2 className="text-xl font-semibold text-[var(--color-mocha)] mb-3">
              {post.title}
            </h2>

            <p className="text-[var(--color-mocha)]/90 line-clamp-2">
              {post.text}
            </p>
          </div>
        </Link>
      ))}
    </div>

  </div>
);
}