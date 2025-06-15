import type { Blog } from "../hooks"
import AppBar from "./AppBar"
import { Avatar } from "./BlogCard"

const FullBlog = ({blog}: {blog: Blog}) => {

  return (
    <div>
        <AppBar />

        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
                <div className="col-span-8">
                    <div className="text-5xl font-extrabold">
                        {blog.title}
                    </div>

                    <div className="text-slate-400 pt-2">
                        Posted on 2nd December 2024
                    </div>

                    <div className="text-slate-700 pt-4">
                        {blog.content}
                    </div>
                </div>

                <div className="col-span-4">
                    <div className="text-slate-700 text-lg">
                        Author
                    </div>

                    <div className="flex pt-4">
                        <div className="flex flex-col justify-center pr-4">
                            <Avatar name={blog.author.name || "Anonymous"} size="big"/>
                        </div>

                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name || "Anonymous"}
                            </div>

                            <div className="text-slate-500 pt-1">
                                Random catchphrase about the author's ability to grab the reader's attention
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullBlog
