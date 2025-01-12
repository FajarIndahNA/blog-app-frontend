import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
    // useSate mengelola state lokal dalam komponen
    // blog variable state untuk menyimpan data blog, setBlogs memperbarui nilai
    const [blog, setBlogs] = useState([]);

    // mendapatkan parameter dari URL /blogs/id
    const params = useParams();

    // mencetak params.id ke konsol mengambil data berdasarkan ID dari url
    const fetchBlogs = async () => {
        const res = await fetch('http://localhost:8000/api/blogs/'+params.id)
        const result = await res.json();
        setBlogs(result.data);
        // console.log(params.id)
    }

    // pemanggilan API setelah render
    useEffect(()=>{
        fetchBlogs();
    }, []);

    return (
        <div className='container'>
        <div className="d-flex justify-content-between pt-5 mb-4">
          <h2>{blog.title}</h2>
          <div>
                <a href="/" className="btn btn-dark">Back to Blogs</a>
          </div>
        </div>

        <div className="row">
            <div className='col-md-12'>
                <p>by <strong>{blog.author}</strong> on {blog.date}</p>

                {
                    (blog.image) && <img className='w-50' src={`http://localhost:8000/uploads/blogs/${blog.image}`}/>
                }

                <div dangerouslySetInnerHTML={{__html:blog.description}}>
                </div>
            </div>
        </div>
     </div>
  )
}

export default BlogDetail
