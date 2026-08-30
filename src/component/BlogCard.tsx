import image1 from "../assets/blog_pic_1-Vndvg-NA.png";
import image2 from "../assets/blog_pic_2-CubA8WLf.png";
import image3 from "../assets/602e3a39-2a0f-4048-99dd-6d4d313f7bb5.jpeg";
import image4 from "../assets/16786fec-4cbd-4781-b0c2-77258f33184f.jpeg";
import image5 from "../assets/241f20d4-38ac-4317-98e7-775a14626364.jpeg";
import image6 from "../assets/a9681d5d-bb10-41d4-9ff1-2c20bd76f6d7.jpeg";
import image7 from "../assets/3ac9d1c7-d2d3-40c6-ae16-080ccad85b92.jpeg";
import image8 from "../assets/4ead74bb-01a1-4e5e-a12a-ac0ca7ba0b47.jpeg";
import image9 from "../assets/b4673084-5f4b-439e-911a-18b6ac467f8c.jpeg";
import image10 from "../assets/c3b73164-53d5-4281-b9bd-42c3a171eff4.jpeg";

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
    category: "Lifestyle",
    title: "A detailed step by step guide to manage your lifestyle",
    description: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
    image: image3,
  },
  {
    category: "StartUp",
    title: "How to create an effective startup roadmap or ideas",
    description: "Creating an effective startup roadmap",
    image: image4,
  },
  {
    category: "Lifestyle",
    title: "A detailed step by step guide to manage your lifestyle",
    description: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
    image: image5,
  },
  {
    category: "StartUp",
    title: "How to create an effective startup roadmap or ideas",
    description: "Creating an effective startup roadmap",
    image: image6,
  },
  {
    category: "Lifestyle",
    title: "A detailed step by step guide to manage your lifestyle",
    description: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
    image: image7,
  },
  {
    category: "StartUp",
    title: "How to create an effective startup roadmap or ideas",
    description: "Creating an effective startup roadmap",
    image: image8,
  },
  {
    category: "Lifestyle",
    title: "A detailed step by step guide to manage your lifestyle",
    description: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
    image: image9,
  },
  {
    category: "StartUp",
    title: "How to create an effective startup roadmap or ideas",
    description: "Creating an effective startup roadmap",
    image: image10,
  },
];

const BlogCard = () => {
  return (
    <section className="bg-white px-5 py-10 dark:bg-gray-950">

      <div className="grid grid-cols-1 gap-6">

        {blogs.map((blog, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-xl bg-white shadow-sm dark:bg-gray-900"
          >

            <img
              src={blog.image}
              alt={blog.title}
              className="h-52 w-full object-cover"
            />

            <div className="p-5">

              <span className="text-sm text-gray-500 dark:text-gray-400">
                {blog.category}
              </span>

              <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">
                {blog.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {blog.description}
              </p>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
};

export default BlogCard;