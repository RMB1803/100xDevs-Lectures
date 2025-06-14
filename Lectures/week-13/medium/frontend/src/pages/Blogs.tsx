import AppBar from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlogs } from "../hooks"

const Blogs = () => {

  const {loading, blogs} = useBlogs()

  if(loading) {
    return <div>
            <AppBar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                </div>
            </div>
        </div>
  }


  return (
    <div>
      <AppBar />
    <div className="flex justify-center">
      <div className="max-w-xl">
        {blogs.map(blog =>
          <div key={blog.id}>
            <BlogCard 
            id={blog.id}
            authorName={blog.author.name}
            title={blog.title}
            content={blog.content}
            publishedDate={"July 12, 2025"}
            /> 
          </div>
        )}
      </div>
      
    </div>
    </div>
  )
}

export default Blogs
