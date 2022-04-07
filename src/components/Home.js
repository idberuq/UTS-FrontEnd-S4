import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Css Tutorial', body: 'Bisa', author: 'Rizki', id: 1 },
    { title: 'Html Tutorial', body: 'Sip', author: 'Raihan', id: 2 },
    { title: 'Beruq1', body: 'Pokok Yakin', author: 'Carlos', id: 3 },
    { title: 'Beruq2', body: 'Ok', author: 'Carlos', id: 4 }
  ])
 
  const Bdelet = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }
   
  return (

    <div>
      <BlogList blogs={blogs} title="Blogs" Bdelet={Bdelet}/>
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Carlos')} title="Blogs Carlos" Bdelet={Bdelet}/>
    </div>
  );
}
 
export default Home;
