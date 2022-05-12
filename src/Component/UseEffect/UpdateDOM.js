import React, { useState, useEffect } from "react";

//TODO: =>1. useEffect(callback)
//*===> Gọi callback mỗi khi component re-render <===
//*===> Gọi callback sau khi component thêm element <===
//TODO: =>2. useEffect(callback, [])
//*===> Gọi callback một lần sau khi component mounted <===
//TODO: =>3. useEffect(callback, des)
//*===> Gọi callback mỗi khi dependency thay đổi <===
//?userEffect (callback)
//! 1. Callback luôn được gọi sau khi component mounted
//! 2. Clean up function luôn được gọi trước khi Component unmounted
//! 3. Clean up function luôn được gọi trước khi callback được gọi (trừ mounted lần đầu)


function Introduce() {
    //TODO: Resize window change width
    const [width, setWidth] = useState(window.innerWidth);
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const callAPIPost = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(callAPIPost)
      .then((response) => response.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, []);


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
    window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div>
      <h2>Sreen's Width is {width}</h2>
    </div>
  );
}

export default Introduce;
