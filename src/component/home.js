import { useState, useEffect } from 'react'
import BlogList from './blogList'
import useFetch from './useFetch';

const Home = () => {
  const {data: Blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  
  return ( 
    <div className="home">
      {error ? <p>{error}</p> : isPending ? <p>Please wait for data to arrive!</p>: <BlogList  blogs={Blogs} title="All Blogs!"/>}
    </div>
   );
}
 
export default Home;