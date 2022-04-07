const BlogList = ({ blogs,title,Bdelet}) => {
        return (
          <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
              <div className="blog-preview" key={blog.id} >
                <h2>{ blog.title }</h2>
                <p>{ blog.body }</p>
                <p>Dibuat oleh { blog.author}</p>
                <button onClick={() => Bdelet(blog.id)}>Delet Blog</button>
              </div>
            ))}
          </div>
        );
      }
    
 
export default BlogList;