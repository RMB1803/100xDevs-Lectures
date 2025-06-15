import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

const AppBar = () => {
  return (
    <div className="border-b px-10 flex justify-between py-4 cursor-pointer">
      <Link to={"/blogs"} className="flex flex-col justify-center text-lg">
        Medium
      </Link>

      <div>
        <Link to={"/publish"}>
          <button type="button" className="text-white mt-4 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2 text-center me-2 mb-2">New</button>
        </Link>
        <Avatar size={"big"} name={"Ram"} />
      </div>
    </div>
  )
}

export default AppBar
