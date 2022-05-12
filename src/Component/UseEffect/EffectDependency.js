import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const tabs = ["posts", "comments", "albums"];

export default function UseEffectDependency() {
  const [title, setTitle] = useState("");

  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);



  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  useEffect(() => {
    const hanleScroll = () => {
      if (window.scrollY >= 20) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", hanleScroll);

    return () => {
      window.removeEventListener("scroll", hanleScroll);
    };
  }, []);


  return (
    <div className="container">
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <hr />
      {tabs.map((tab, i) => (
        <button
          key={i}
          style={type === tab ? { color: "#FFF", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      {showGoToTop && (
        <Button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
        >
          Go to Top
        </Button>
      )}
    </div>
  );
}
