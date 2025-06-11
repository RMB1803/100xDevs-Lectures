import AppBar from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"

const Blogs = () => {

  // const {loading, blogs} = useBlogs()

  // if(loading) {
  //   return <div>
  //           <AppBar /> 
  //           <div  className="flex justify-center">
  //               <div>
  //                   <BlogSkeleton />
  //               </div>
  //           </div>
  //       </div>
  // }


  return (
    <div>
      <AppBar />
    <div className="flex justify-center">
      <div className="max-w-xl">
        {/* {blogs.map(blog =>
          
        )} */}

<BlogCard 
          authorName={"Ram Mohan"}
          title={"How an ugly single page website makes $5000 monthly without affiliate marketing?"}
          content={"How an ugly single page website makes $5000 monthly without affiliate marketing? How an ugly single page website makes $5000 monthly without affiliate marketing?"}
          publishedDate={"July 12, 2025"}
          />
      </div>
      
    </div>
    </div>
  )
}

export default Blogs
