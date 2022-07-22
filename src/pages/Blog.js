import React, { useState, useEffect } from 'react'
import client from "../client";
import { Link } from "react-router-dom"

const Blog = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    client.fetch(
      `[_type=="post"]{
        title,
        slug,
        body,
        mainImage {
          asset->{
            _id,
            url
          },
          alt
        }
      }`
    ).then((data) => setPosts(data)).catch(console.error)
  }, []);


  return (
    <>
      <section>
        <h1>Blog Page</h1>
        <h2>Post is {posts.length}</h2>

        <div>
          {posts.map((post) => (
            console.log(post)
         
          ))}
        </div>
      </section>
    </>
  )
}

export default Blog