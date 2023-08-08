import BlogPost from "@/components/UI/BlogPost"
import { blogs } from "@/utils"


const Blog = () => {
  return (
  <div className="px-6 sm:px-16">
     <div className="text-center  py-2 sm:py-5">
        <h1 className="text-center  font-poppins text-2xl">
        Latest Blog Posts
        </h1>
        <p className="text-center">Here are some of our recent blog post at ALPHA PC.</p>
      </div>
     <BlogPost blogs={blogs}/>
  </div>
  )
}
export default Blog

  


