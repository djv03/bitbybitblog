import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Blog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("useeffect is in action");
    fetch('http://localhost:3000/api/blogs').then((a) => {
      return a.json();
    }).then((data) => {
      console.log(data);
      setBlogs(data)
    })
  }, [])
  return <div className=''>
    <main className=''>
      {blogs.map((eachblog) => {
        return <div key={eachblog.slug}>
          <Link href={`/blogposts/${eachblog.slug}`}>
            <h3 className=''>{eachblog.title}</h3></Link>
          <p>{eachblog.content.substr(0,150)}</p>
        </div>
      })}
    </main>
  </div>
};

export default Blog;