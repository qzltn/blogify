
import image1 from "../assets/blog_pic_1-Vndvg-NA.png";
import image2 from "../assets/blog_pic_2-CubA8WLf.png";

const blogs =[
    {
        category:"Lifestyle",
        title:"A detailed step by step guide to manage your lifestyle",
        description:"A Simple Step-by-Step Guide to Managing Your Lifestyle",
        image: image1,
    },
    {

category:"StartUp",
        title:"How to create an effective startup roadmap or ideas",
        description:"Creating an effective startup roadmap",
        image:image2,
    },

];
const BlogCard = () => {
  return (
    <section>
        {blogs.map((blog) => (
             <article key={blog.title}>
<img src={blog.image}
alt={blog.title}
/>

<span>{blog.category}</span>
<h2>{blog.title}</h2>
<p>{blog.description}</p>


 </article>
        
    
    
    
    ))}
     </section>
    );


  
  
}

export default BlogCard
