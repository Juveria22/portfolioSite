import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("/data/posts.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.slug === slug);
        setPost(found);

        if (found?.file) {
          fetch(found.file)
            .then((res) => res.text())
            .then((md) => setContent(md));
        }
      });
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-mocha pt-20 flex justify-center items-center text-light-sage">
        Loading...
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-mocha pt-20 pb-20 px-6 relative">
    <div className="max-w-3xl mx-auto">

      <Link 
        to="/blog" 
        className="text-light-sage underline hover:text-matchatransition"
      >
        ← Back to Journal
      </Link>

      <h1 className="text-3xl font-bold text-light-sage mt-6 mb-6">
        {post.title}
      </h1>

      {/* Markdown Container */}
      <div 
        className="
          p-8 rounded-3xl shadow-sm leading-relaxed
          bg-light-sage
          text-latte
          prose prose-custom
        "
      >
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>


    </div>
  </div>

  );
}
