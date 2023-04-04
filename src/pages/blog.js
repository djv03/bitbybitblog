import React from 'react';
import Link from 'next/link';

const Blog = () => {
  return <div className=''>
    <main className=''>
  <div>
    <Link href={'/blogposts/learn-javascript'}>
    <h3 className=''>How to learn JavaScript in 2022?</h3></Link>
    <p>JavaScript is the language used to design logic for the web</p>
  </div>
  <div className="blogItem">
    <h3>How to learn JavaScript in 2022?</h3>
    <p>JavaScript is the language used to design logic for the web</p>
  </div>
  <div className="blogItem">
    <h3>How to learn JavaScript in 2022?</h3>
    <p>JavaScript is the language used to design logic for the web</p>
  </div>
  </main>
</div>
};

export default Blog;