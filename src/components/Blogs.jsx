import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blogs = () =>{

  // ambil data, fetching data dari back end
  const [blogs, setBlogs] = useState();
  const fetchBlogs = async()=>{
    const res = await fetch('http://localhost:8000/api/blogs/');
    const result = await res.json();
    // 
    setBlogs(result.data);
    // console.log(result)
  }
   // ambil data, fetching data dari back end
  useEffect(() =>{
    fetchBlogs();
  },[])

    return (
        <div className='container'>
        <div className="d-flex justify-content-between pt-5 mb-4">
          <h4>Blogs</h4>
          <a href="/create" className="btn btn-dark">Create</a>
        </div>

        <div className="row">
          {/* grid blogs */}
            {
              blogs && blogs.map((blog) => {
                return <BlogCard key={blog.id} blog={blog}/>;
              })
            }
        </div>
     </div>
    )
}

export default Blogs