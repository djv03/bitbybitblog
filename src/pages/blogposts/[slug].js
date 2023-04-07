//------> this file has function to add dynamic routes to the in the /blogpost/[blogitem] endpoint
//this is the file responsible for individual blog post page    

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'


console.log("form slug.js");

const slug = () => {
    const [blog, setBlogs] = useState();
    const router = useRouter();

    useEffect(() => {
        if (!router.isReady) return;

        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((fetchedblogs) => {

            return fetchedblogs.json();
        }).then((parsedblogs) => {
            setBlogs(parsedblogs);
        })
    }, [router.isReady])

    return <div className=''>
        <main className=''>
            <div>
                <h3 className=''>{blog && blog.slug}</h3>
                <p>{blog && blog.content}</p>
            </div>
        </main>
    </div>
};

export default slug;