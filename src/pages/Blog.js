import React, { useState, useEffect } from 'react'
import client from "../client";
import { Link } from "react-router-dom"
// import { propTypes } from '@sanity/block-content-to-react';

export default function Blog() {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    client.fetch(
      `*[_type=="post"]{
        title,
        time,
        slug,
        description,
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
      <section className="px-5 2xl:max-w-7xl 2xl:mx-auto lg:mx-auto">
        <h1 className="font-bold test-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-8xl">Recent Blog's</h1>


        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700" key={post.slug.current}>
              <img className="rounded-t-lg mt-3" src={post.mainImage.asset.url} alt="{post.title" />
              <div className="p-5">
                <div className="px-4 py-2 flex flex-row items-center">
                  <span
                    href="#"
                    className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center"
                  >
                    <svg
                      height="13px"
                      width="13px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 512 512"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                          />
                        </g>
                      </g>
                    </svg>
                    <span className="ml-1">{post.time} mins read</span>
                  </span>
                </div>

                <h4 className="text-xl m-2">{post.title}</h4>
                {/* <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.body.slice(0,50)}
              </p> */}
              <p className="m-2">
                {post.description}
              </p>

                <Link className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" to={`/blog/${post.slug.current}`}>
                  Read More <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>

              </div>
            </article>
          ))}
        </div>


      </section>
    </>
  )
}
