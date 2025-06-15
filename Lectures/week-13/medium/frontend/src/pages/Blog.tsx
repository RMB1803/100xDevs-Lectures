import { useParams } from "react-router-dom"
import AppBar from "../components/AppBar"
import { BlogSkeleton } from "../components/BlogSkeleton"
import { useBlog } from "../hooks"
import FullBlog from "../components/FullBlog"

const Blog = () => {

  const { id } = useParams()

  const {loading, blog} = useBlog({id: id || ""})

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
      <FullBlog blog={blog}/>
    </div>
  )
}

export default Blog
