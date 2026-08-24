
import image1 from "../assets/blog_pic_1-Vndvg-NA.png";
import image2 from "../assets/blog_pic_2-CubA8WLf.png";
import image3 from "../assets/blog_pic_3-VOQeV7e1.png";
import image4 from "../assets/blog_pic_4-BsTv5AMX.png";
import image5 from "../assets/blog_pic_5-ClPSSpD9.png";
import image6 from "../assets/blog_pic_6--Mnp9lwI.png";
import image7 from "../assets/blog_pic_7-Dfn1t5km.png";
import image8 from "../assets/blog_pic_8-BxvldwTw.png";
import image9 from "../assets/blog_pic_9-moSXhuWk.png";
import image10 from "../assets//blog_pic_10-DLw5xdDp.png";

const blogs = [
  {
    category: "Lifestyle",
    title: "A detailed step by step guide to manage your lifestyle",
    description: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
    image: image1,
  },
  {
    category: "StartUp",
    title: "How to create an effective startup roadmap or ideas",
    description: "Creating an effective startup roadmap",
    image: image2,
  },
  {
    category: "Technology",
    title: "Learning new technology to boost your career in software",
    description: "Learning New Tech to Boost Your Software Career",
    image: image3,
  },
  {
    category: "Technology",
    title: "Tips for Getting the Most Out of Apps and Software",
    description: "Tips for Getting the Most Out of Apps and Software",
    image: image4,
  },
  {
    category: "Lifestyle",
    title: "Enhancing your skills and capturing memorable moments",
    description: "Enhancing Your Skills and Capturing Memorable Moments",
    image: image5,
  },
  {
    category: "StartUp",
    title: "Maximizing returns by minimizing resources in your startup",
    description: "Maximizing Returns by Minimizing Resources in Your Startup",
    image: image6,
  },
  {
    category: "Finance",
    title: "Taxes on Luxury Houses",
    description: "What Do They Mean for the Market?",
    image: image7,
  },
  {
    category: "Finance",
    title: "The New Way of Study",
    description: "The New Way of Study: Ditching the Old",
    image: image8,
  },
  {
    category: "Lifestyle",
    title: "Importance of Tourism",
    description: " Why Tourism Matters More Than You Think",
    image: image9,
  },
  {
    category: "Lifestyle",
    title: "AI best practices in healthcare",
    description: "Navigating the Future Responsibly",
    image: image10,
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
