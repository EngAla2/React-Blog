import { useHistory, useParams } from 'react-router-dom';
import Loading from './loading';
import useFetch from './useFetch';



const BlogDetails = () => {

  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id)
  const history = useHistory()

  const handleDelete = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE',
    }).then(() => {
      console.log('Blog Deleted!')
      history.push('/')
    })
  }

  return (
    <div className="blog-details">

      {error ? <p>{error}</p> : isPending && <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Loading />
      </div>
      }
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <br />
          <p> {blog.body} </p>
          <br />
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;