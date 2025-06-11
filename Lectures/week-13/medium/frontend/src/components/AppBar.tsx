import { Avatar } from "./BlogCard"

const AppBar = () => {
  return (
    <div className="border-b px-10 flex justify-between py-4">
      <div className="flex flex-col justify-center">
        Medium
      </div>

      <div>
        <Avatar size={"big"} name={"Ram"} />
      </div>
    </div>
  )
}

export default AppBar
