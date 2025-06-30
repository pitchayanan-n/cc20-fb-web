import CreatePost from "./CreatePost"

function PostContainer() {
  return (
    <div className="w-[680px] mx-auto min-h-screen my-3 flex flex-col gap-4 rounded-lg bg-blue-100">
      <CreatePost />
      PostItem
      PostItem
    </div>
  )
}
export default PostContainer