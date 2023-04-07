//--------->this file has function to fetch data from /api/blogs and render it on /blog endpoint
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Blog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // console.log("useeffect is in action");
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    }).then((data) => {
      //enable this to see fetched data in the console of the browser
      // console.log(data);
      setBlogs(data)
    })
  }, [])

  return <div className=''>
    <main className=''>

      {blogs.map((eachblog) => {
        return <div key={eachblog.slug}>

        <h1 className=''>{eachblog.title}</h1>
        
        <p>{eachblog.metadesc.substring(0,150)}...</p>

        <Link href={`/blogposts/${eachblog.slug}`}>
            <button className=''>read more</button>
        </Link>
        </div>
      })}

    </main>
  </div>
};

export default Blog;